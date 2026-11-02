globalThis.window = globalThis;
await import("../abschluss-data.js");

const data = globalThis.ABSCHLUSS_DATA;
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const normalize = value => String(value).replace(/[.,!?;:„“”"()]/g, "").trim();

assert(data.readingItems.length === 60, "Der Lesecheck muss genau 60 Sätze enthalten.");
assert(new Set(data.readingItems.map(item => item.text)).size === 60, "Testsätze müssen eindeutig sein.");
assert(data.readingItems.every(item => item.text.split(/\s+/).filter(token => normalize(token) === item.error).length === 1), "Jedes Stolperwort muss genau einmal vorkommen.");
assert(data.memoryTerms.length === 36, "Der Bedeutungs-Pool muss 36 Begriffe enthalten.");

const works = [...new Set(data.memoryTerms.map(term => term.work))];
assert(works.length === 6, "Es müssen Begriffe aus genau sechs Werken vorhanden sein.");
works.forEach(work => {
  const terms = data.memoryTerms.filter(term => term.work === work && term.priority);
  assert(terms.length >= 3, `${work} braucht mindestens drei priorisierte Begriffe.`);
});

assert(data.memoryTerms.every(term => ["Nomen", "Verb"].includes(term.type)), "Unbekannte Wortart im Bedeutungs-Pool.");
console.log(`OK: ${data.readingItems.length} neue Sätze, ${data.memoryTerms.length} Begriffe aus ${works.length} Werken.`);
