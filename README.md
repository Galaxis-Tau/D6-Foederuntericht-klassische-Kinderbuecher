# Förderzyklus klassische Kinderbücher

Eine vollständig statische und offlinefähige Lernseite zu sechs klassischen
Kinderbüchern. Der neue Abschlusscheck verbindet einen vierminütigen
Stolperwort-Lesecheck mit einem zwölfminütigen Bedeutungsquiz.

## Abschlusscheck

- 60 unabhängig neu verfasste Stolperwort-Sätze
- vier Minuten Bearbeitungszeit
- keine unmittelbare Rückmeldung während des Tests
- 18 zufällig ausgewählte Bedeutungsfragen
- drei Begriffe aus jedem der sechs Werke
- Auswertung nach Werk sowie nach Nomen und Verben
- druckbarer Laufzettel
- ausschließlich lokale Ergebnisspeicherung im Browser

Der Abschlusscheck wird über `abschluss.html` geöffnet. Die Aufgaben liegen in
`abschluss-data.js`.

## Keine offizielle STOLLE-Ausgabe

Der enthaltene Stolperwort-Lesecheck ist ein eigenständig entwickeltes und
nicht normiertes Förderinstrument. Er enthält keine offiziellen Aufgaben des
STOLperwörter-LEsetests und darf nicht mit dessen Normtabellen ausgewertet
werden. Weitere Angaben stehen in [NOTICE.md](NOTICE.md).

## Lizenzen

- Programmcode: MIT, siehe [LICENSE](LICENSE)
- eigenständig entwickelte Bildungsinhalte: CC BY 4.0, siehe
  [LICENSE-CONTENT.md](LICENSE-CONTENT.md)
- Materialien Dritter: nicht enthalten und nicht lizenziert

## Nutzung

Es ist kein Build-System erforderlich. `index.html` kann direkt über einen
statischen Webserver oder GitHub Pages bereitgestellt werden. Für lokale Tests
sollte die Seite über `http://localhost` statt über `file://` geöffnet werden.

