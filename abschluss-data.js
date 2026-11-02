/*
 * Eigenständig entwickelte Test- und Übungsdaten.
 * Keine offiziellen Aufgaben des STOLperwörter-LEsetests.
 * Inhaltslizenz: CC BY 4.0, siehe LICENSE-CONTENT.md und NOTICE.md.
 */
(function () {
  "use strict";

  const readingItems = [
    { id: 1, text: "Am frühen Morgen öffnet Nora das Küchenfenster Teppich.", error: "Teppich" },
    { id: 2, text: "Der Hausmeister wischt gründlich den nassen Flur singt.", error: "singt" },
    { id: 3, text: "Im Stadtpark sammeln die Kinder bunte Blätter schwimmt.", error: "schwimmt" },
    { id: 4, text: "Unsere Nachbarin gießt jeden Abend die Blumen gestern.", error: "gestern" },
    { id: 5, text: "Nach der Pause arbeitet die Klasse wieder konzentriert Apfel.", error: "Apfel" },
    { id: 6, text: "Der kleine Hund wartet geduldig vor der Bäckerei rechnet.", error: "rechnet" },
    { id: 7, text: "Auf dem Markt kauft Vater frisches Gemüse Wolke.", error: "Wolke" },
    { id: 8, text: "Mila legt ihr gelesenes Buch zurück ins Regal schreibt.", error: "schreibt" },
    { id: 9, text: "Der Zug erreicht den Bahnhof heute pünktlich Banane.", error: "Banane" },
    { id: 10, text: "Im Musikraum übt Jonas eine schwierige Melodie Fenster.", error: "Fenster" },
    { id: 11, text: "Vor dem Unterricht verteilt die Lehrerin neue Arbeitsblätter schläft.", error: "schläft" },
    { id: 12, text: "Die Katze beobachtet vom Fensterbrett aufmerksam einen Vogel Turnhalle.", error: "Turnhalle" },
    { id: 13, text: "Am Wochenende besucht unsere Familie ein kleines Museum rechnet.", error: "rechnet" },
    { id: 14, text: "Im Garten baut mein Bruder ein Häuschen aus Holz schwimmt.", error: "schwimmt" },
    { id: 15, text: "Nach dem Regen glänzen die Pflastersteine im Sonnenlicht Suppe.", error: "Suppe" },
    { id: 16, text: "Während der Fahrt liest Lea einen spannenden Roman hüpft.", error: "hüpft" },
    { id: 17, text: "Der Bäcker stellt morgens warme Brötchen ins Schaufenster Mathematik.", error: "Mathematik" },
    { id: 18, text: "Auf dem Schulhof besprechen zwei Freunde ihren Plan Kartoffel.", error: "Kartoffel" },
    { id: 19, text: "Unser Kaninchen versteckt sich gern unter dem alten Tisch erklärt.", error: "erklärt" },
    { id: 20, text: "Im Schwimmbad zieht Amir ruhig seine Bahnen Schere.", error: "Schere" },
    { id: 21, text: "Bevor das Gewitter beginnt, räumen wir die Gartenstühle ins Haus Hausaufgabe.", error: "Hausaufgabe" },
    { id: 22, text: "Die Forscherin notiert jede Beobachtung sorgfältig in ihrem Heft singt.", error: "singt" },
    { id: 23, text: "Nachdem der Bus gehalten hat, steigen alle Fahrgäste langsam aus Wolldecke.", error: "Wolldecke" },
    { id: 24, text: "Im Winter trägt mein Bruder einen dicken Mantel schwimmt.", error: "schwimmt" },
    { id: 25, text: "Weil der Weg glatt ist, gehen die Wanderer besonders vorsichtig Käse.", error: "Käse" },
    { id: 26, text: "Die Bibliothekarin empfiehlt uns einen Roman über eine mutige Entdeckerin rechnet.", error: "rechnet" },
    { id: 27, text: "Während die Suppe kocht, deckt Samira den Tisch aufmerksam Wolke.", error: "Wolke" },
    { id: 28, text: "Der Mechaniker prüft die Bremsen, bevor das Fahrrad wieder benutzt wird Banane.", error: "Banane" },
    { id: 29, text: "Nach dem Training füllt Leon seine Trinkflasche mit Wasser singt.", error: "singt" },
    { id: 30, text: "Die Klasse vergleicht zwei Berichte und sammelt wichtige Unterschiede Teppich.", error: "Teppich" },
    { id: 31, text: "Obwohl es draußen regnet, findet das Schulfest in der Turnhalle statt Kartoffel.", error: "Kartoffel" },
    { id: 32, text: "Die Ärztin erklärt dem Patienten den Ablauf der Untersuchung leise Fenster.", error: "Fenster" },
    { id: 33, text: "Wenn alle Materialien bereitliegen, beginnt die Gruppe mit dem Experiment Suppe.", error: "Suppe" },
    { id: 34, text: "Mara fasst den gelesenen Abschnitt in drei eigenen Sätzen zusammen schwimmt.", error: "schwimmt" },
    { id: 35, text: "Der Chor probt das neue Lied, bis alle Einsätze sicher klingen Bleistift.", error: "Bleistift" },
    { id: 36, text: "Damit niemand den Weg verliert, zeichnet Tom eine genaue Karte rechnet.", error: "rechnet" },
    { id: 37, text: "Der Förster zeigt den Kindern, welche Spuren zu einem Reh gehören Schokolade.", error: "Schokolade" },
    { id: 38, text: "Nachdem die Mannschaft lange geübt hat, gelingt der schwierige Spielzug endlich Wolke.", error: "Wolke" },
    { id: 39, text: "Die Schülerin begründet ihre Meinung mit zwei passenden Beispielen schwimmt.", error: "schwimmt" },
    { id: 40, text: "Vor der Abstimmung erläutert der Klassensprecher noch einmal den Vorschlag Banane.", error: "Banane" },
    { id: 41, text: "Weil die Brücke gesperrt ist, wählen wir einen anderen Weg durch den Park Suppe.", error: "Suppe" },
    { id: 42, text: "Der Reporter überprüft seine Informationen, bevor er den Artikel veröffentlicht hüpft.", error: "hüpft" },
    { id: 43, text: "Während die anderen diskutieren, ordnet Mila die wichtigsten Gedanken auf Karten Teppich.", error: "Teppich" },
    { id: 44, text: "Die Gruppe erkennt, dass beide Texte dieselbe Frage unterschiedlich beantworten Kartoffel.", error: "Kartoffel" },
    { id: 45, text: "Nach dem Gespräch überarbeitet Jonas seine erste Einschätzung sorgfältig schwimmt.", error: "schwimmt" },
    { id: 46, text: "Obwohl der Versuch zunächst misslingt, verändert die Klasse nur eine Bedingung Schere.", error: "Schere" },
    { id: 47, text: "Die Kinder schließen aus den Spuren, dass nachts ein Tier im Garten war Mathematik.", error: "Mathematik" },
    { id: 48, text: "Bevor wir eine Entscheidung treffen, vergleichen wir die Vorteile beider Möglichkeiten singt.", error: "singt" },
    { id: 49, text: "Die Autorin beschreibt den Ort so genau, dass man ihn sich gut vorstellen kann Wolldecke.", error: "Wolldecke" },
    { id: 50, text: "Wenn ein Begriff unklar bleibt, suchen die Lernenden eine passende Erklärung Banane.", error: "Banane" },
    { id: 51, text: "Der Schüler unterscheidet sorgfältig zwischen einer Behauptung und einem überprüfbaren Beleg Suppe.", error: "Suppe" },
    { id: 52, text: "Nachdem alle Ergebnisse gesammelt sind, stellt die Gruppe einen Zusammenhang her hüpft.", error: "hüpft" },
    { id: 53, text: "Die Klasse beurteilt den Vorschlag nach zuvor vereinbarten Kriterien Taschenlampe.", error: "Taschenlampe" },
    { id: 54, text: "Während des Vortrags notiert Lea nur die Aussagen, die für das Thema wichtig sind schwimmt.", error: "schwimmt" },
    { id: 55, text: "Aus mehreren Einzelinformationen entwickelt die Gruppe eine gemeinsame Schlussfolgerung Käse.", error: "Käse" },
    { id: 56, text: "Obwohl beide Figuren ähnlich handeln, verfolgen sie dabei unterschiedliche Absichten rechnet.", error: "rechnet" },
    { id: 57, text: "Der Text verdeutlicht durch ein Beispiel, welche Folgen eine unüberlegte Entscheidung haben kann Wolke.", error: "Wolke" },
    { id: 58, text: "Bevor die Lernenden ihre Lösung präsentieren, prüfen sie noch einmal die Reihenfolge der Schritte Banane.", error: "Banane" },
    { id: 59, text: "Die Zusammenfassung nennt die Hauptaussage und lässt unwichtige Einzelheiten weg Teppich.", error: "Teppich" },
    { id: 60, text: "Nachdem Mia den Standpunkt erklärt hat, reagiert sie sachlich auf den Einwand Kartoffel.", error: "Kartoffel" }
  ];

  const memoryTerms = [
    { work: "Heidi", word: "Freundschaft", meaning: "eine enge, vertrauensvolle Verbindung zwischen Menschen", type: "Nomen", priority: true },
    { work: "Heidi", word: "lernen", meaning: "sich Wissen oder eine Fähigkeit aneignen", type: "Verb", priority: true },
    { work: "Heidi", word: "vermissen", meaning: "traurig sein, weil jemand oder etwas nicht da ist", type: "Verb", priority: true },
    { work: "Heidi", word: "ermutigen", meaning: "jemandem Mut und Zuversicht geben", type: "Verb", priority: true },
    { work: "Heidi", word: "beobachten", meaning: "jemanden oder etwas aufmerksam und längere Zeit ansehen", type: "Verb", priority: true },
    { work: "Heidi", word: "zurückkehren", meaning: "wieder an einen früheren Ort kommen", type: "Verb", priority: true },

    { work: "Die Konferenz der Tiere", word: "Konferenz", meaning: "eine Zusammenkunft, bei der mehrere Personen ein Thema besprechen", type: "Nomen", priority: true },
    { work: "Die Konferenz der Tiere", word: "Frieden", meaning: "ein Zustand ohne Krieg und gewaltsamen Streit", type: "Nomen", priority: true },
    { work: "Die Konferenz der Tiere", word: "Vertrag", meaning: "eine verbindliche Vereinbarung zwischen mehreren Seiten", type: "Nomen", priority: true },
    { work: "Die Konferenz der Tiere", word: "Forderung", meaning: "eine nachdrücklich verlangte Leistung oder Handlung", type: "Nomen", priority: true },
    { work: "Die Konferenz der Tiere", word: "beraten", meaning: "gemeinsam über eine Frage nachdenken und sprechen", type: "Verb", priority: true },
    { work: "Die Konferenz der Tiere", word: "überzeugen", meaning: "jemanden durch Gründe zu einer Ansicht bringen", type: "Verb", priority: true },

    { work: "Die kleine Hexe", word: "Prüfung", meaning: "eine Aufgabe, mit der Wissen oder Können festgestellt wird", type: "Nomen", priority: true },
    { work: "Die kleine Hexe", word: "Verantwortung", meaning: "die Pflicht, für das eigene Handeln und seine Folgen einzustehen", type: "Nomen", priority: true },
    { work: "Die kleine Hexe", word: "Regel", meaning: "eine festgelegte Vorschrift für ein bestimmtes Verhalten", type: "Nomen", priority: true },
    { work: "Die kleine Hexe", word: "bestehen", meaning: "eine Prüfung erfolgreich abschließen", type: "Verb", priority: true },
    { work: "Die kleine Hexe", word: "widersprechen", meaning: "deutlich sagen, dass man anderer Meinung ist", type: "Verb", priority: true },
    { work: "Die kleine Hexe", word: "nachdenken", meaning: "sich gründlich mit einer Frage beschäftigen", type: "Verb", priority: true },

    { work: "Timm Thaler", word: "Wette", meaning: "eine Vereinbarung darüber, wer mit einer Behauptung recht behält", type: "Nomen", priority: true },
    { work: "Timm Thaler", word: "Geheimnis", meaning: "etwas, das nur wenige Menschen wissen sollen", type: "Nomen", priority: true },
    { work: "Timm Thaler", word: "Freiheit", meaning: "die Möglichkeit, ohne unnötigen Zwang selbst zu entscheiden", type: "Nomen", priority: true },
    { work: "Timm Thaler", word: "unterschreiben", meaning: "den eigenen Namen als Bestätigung unter einen Text setzen", type: "Verb", priority: true },
    { work: "Timm Thaler", word: "vertrauen", meaning: "sich auf die Ehrlichkeit oder Hilfe einer Person verlassen", type: "Verb", priority: true },
    { work: "Timm Thaler", word: "schweigen", meaning: "absichtlich nichts sagen", type: "Verb", priority: true },

    { work: "Momo", word: "Zeit", meaning: "die Abfolge von Augenblicken, Stunden, Tagen und Jahren", type: "Nomen", priority: true },
    { work: "Momo", word: "Gemeinschaft", meaning: "eine Gruppe von Menschen, die etwas miteinander verbindet", type: "Nomen", priority: true },
    { work: "Momo", word: "Erinnerung", meaning: "ein Gedanke an etwas, das man früher erlebt oder erfahren hat", type: "Nomen", priority: true },
    { work: "Momo", word: "Geschichte", meaning: "eine mündlich oder schriftlich erzählte Folge von Ereignissen", type: "Nomen", priority: true },
    { work: "Momo", word: "zuhören", meaning: "aufmerksam darauf achten, was jemand sagt", type: "Verb", priority: true },
    { work: "Momo", word: "versöhnen", meaning: "einen Streit beenden und wieder Frieden herstellen", type: "Verb", priority: true },

    { work: "Max und Moritz", word: "Streich", meaning: "eine absichtliche Handlung, mit der jemand geneckt oder getäuscht wird", type: "Nomen", priority: true },
    { work: "Max und Moritz", word: "planen", meaning: "im Voraus festlegen, wie etwas geschehen soll", type: "Verb", priority: true },
    { work: "Max und Moritz", word: "sammeln", meaning: "mehrere Dinge suchen und an einem Ort zusammenbringen", type: "Verb", priority: true },
    { work: "Max und Moritz", word: "anzünden", meaning: "etwas zum Brennen bringen", type: "Verb", priority: true },
    { work: "Max und Moritz", word: "backen", meaning: "Lebensmittel durch Hitze im Ofen zubereiten", type: "Verb", priority: true },
    { work: "Max und Moritz", word: "Brücke", meaning: "ein Bauwerk, das über ein Hindernis hinwegführt", type: "Nomen", priority: true }
  ];

  globalThis.ABSCHLUSS_DATA = Object.freeze({
    version: "1.0.0",
    readingDurationSeconds: 240,
    vocabularyDurationSeconds: 720,
    vocabularyQuestionCount: 18,
    readingItems: Object.freeze(readingItems),
    memoryTerms: Object.freeze(memoryTerms)
  });
})();
