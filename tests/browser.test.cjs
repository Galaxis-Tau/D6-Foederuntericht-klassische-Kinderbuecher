const fs = require('fs');
const path = require('path');
const playwrightModule = process.env.PLAYWRIGHT_MODULE || 'playwright';
const { chromium } = require(playwrightModule);

const baseUrl = process.argv[2] || 'http://127.0.0.1:8765';
const outputDir = path.resolve(process.argv[3] || './qa');

(async () => {
  fs.mkdirSync(outputDir, { recursive: true });
  const launchOptions = { headless: true };
  if (process.env.CHROME_EXECUTABLE) launchOptions.executablePath = process.env.CHROME_EXECUTABLE;
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage({ viewport: { width: 1440, height: 1050 } });
  const errors = [];
  page.on('console', message => {
    if (message.type() === 'error' && !message.text().includes('favicon.ico')) errors.push(`console: ${message.text()}`);
  });
  page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));

  await page.goto(`${baseUrl}/index.html`);
  await page.locator('[data-final-check]').waitFor();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, '01-startseite-mit-abschlusscheck.png'), fullPage: true });
  await page.click('[data-final-check]');
  await page.waitForURL('**/abschluss.html');
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, '02-abschlusscheck-start.png'), fullPage: true });

  await page.click('#start-button');
  await page.waitForTimeout(250);
  await page.screenshot({ path: path.join(outputDir, '03-lesecheck.png'), fullPage: true });
  for (let index = 0; index < 60; index += 1) {
    await page.locator('.word').first().waitFor();
    const clicked = await page.evaluate(() => {
      const sentence = [...document.querySelectorAll('.word')].map(button => button.textContent).join(' ');
      const item = globalThis.ABSCHLUSS_DATA.readingItems.find(entry => entry.text === sentence);
      if (!item) return false;
      const button = [...document.querySelectorAll('.word')].find(candidate => candidate.textContent.replace(/[.,!?;:„“”"()]/g, '').trim() === item.error);
      if (!button) return false;
      button.click();
      return true;
    });
    if (!clicked) throw new Error(`Stolperwort in Runde ${index + 1} nicht gefunden.`);
  }

  await page.locator('#vocabulary-screen.active').waitFor();
  await page.waitForTimeout(250);
  await page.screenshot({ path: path.join(outputDir, '04-bedeutungscheck.png'), fullPage: true });
  for (let index = 0; index < 18; index += 1) {
    await page.locator('.option').first().waitFor();
    const clicked = await page.evaluate(() => {
      const question = document.querySelector('#question-text').textContent;
      const wordMatch = question.match(/Was bedeutet „(.+?)“/);
      const meaningMatch = question.match(/Bedeutung: „(.+?)“/);
      let correct;
      if (wordMatch) correct = globalThis.ABSCHLUSS_DATA.memoryTerms.find(term => term.word === wordMatch[1])?.meaning;
      if (meaningMatch) correct = globalThis.ABSCHLUSS_DATA.memoryTerms.find(term => term.meaning === meaningMatch[1])?.word;
      const button = [...document.querySelectorAll('.option')].find(candidate => candidate.textContent === correct);
      if (!button) return false;
      button.click();
      return true;
    });
    if (!clicked) throw new Error(`Richtige Bedeutungsantwort in Runde ${index + 1} nicht gefunden.`);
    await page.click('#save-answer');
  }

  await page.locator('#result-screen.active').waitFor();
  await page.waitForTimeout(400);
  const reading = await page.locator('#read-correct').textContent();
  const vocabulary = await page.locator('#vocabulary-score').textContent();
  if (reading !== '60') throw new Error(`Erwartet 60 richtige Stolperwörter, erhalten ${reading}.`);
  if (vocabulary !== '18/18') throw new Error(`Erwartet 18/18 Bedeutungen, erhalten ${vocabulary}.`);
  if (await page.locator('#work-results .work-row').count() !== 6) throw new Error('Auswertung enthält nicht alle sechs Werke.');
  await page.screenshot({ path: path.join(outputDir, '05-ergebnis-desktop.png'), fullPage: true });

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(`${baseUrl}/abschluss.html`);
  await mobile.evaluate(() => localStorage.clear());
  await mobile.reload();
  await mobile.waitForTimeout(400);
  await mobile.screenshot({ path: path.join(outputDir, '06-start-mobil.png'), fullPage: true });
  if ((await mobile.locator('body').evaluate(node => node.scrollWidth)) > 390) throw new Error('Horizontales Überlaufen in der mobilen Ansicht.');

  await browser.close();
  if (errors.length) throw new Error(errors.join('\n'));
  console.log('OK: Startkarte, vollständiger 60+18-Durchlauf, Ergebnisprofil und mobile Ansicht geprüft.');
})().catch(error => { console.error(error); process.exit(1); });
