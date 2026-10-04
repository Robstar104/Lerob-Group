# Lerob Group

Statische, deutschsprachige Website für Lerob Group. Kein Build und keine Laufzeit-Abhängigkeiten erforderlich.

## Lokal ansehen

Im Projektordner ausführen:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Dann http://127.0.0.1:4173 öffnen. Alle auszuliefernden Dateien liegen in `dist/`.

## Seiten

- `/`: Startseite mit Projekten, gemeinsamem Anspruch, Über uns und Kontakt
- `/impressum/`: bestätigte Betreiber, vollständige Anschrift und Kontakt
- `/datenschutz/`: Hinweise entsprechend der implementierten Funktionen und Hosting über Sites
- `/404.html`: Fehlerseite

`DESIGN.md` dokumentiert das mit Taste entwickelte Gestaltungsraster, die Referenzen und Designentscheidungen. `qa/` enthält lokale Prüfergebnisse; dieser Ordner wird nicht veröffentlicht.

## Inhalte bearbeiten

Texte und Links in `dist/index.html`, Rechtstexte in ihren jeweiligen Unterordnern. Farben, Typografie und Breakpoints in `dist/styles.css`. `dist/main.js` steuert ausschließlich das mobile Menü. Ohne JavaScript stehen alle Inhalte und Navigationslinks weiterhin zur Verfügung. Darkmode folgt der Systemeinstellung. Es werden weder Tracking noch eigene Cookies, Formulare oder Browser-Speicher eingesetzt.

## Quellen

- Inhalte und Produktstatus: https://byware.de/ und https://startklar-lerob.netlify.app/ (geprüft am 4. Oktober 2026).
- ByRoutine: originales Produktbild von https://byware.de/assets/img/byroutine-preview-today.png, als WebP optimiert. Kein erfundenes Interface. Das Bild ist eine Produktvorschau, kein Versprechen für die finale App.
- Manrope: lokale OFL-Schrift. Lizenz in `dist/assets/OFL-Manrope.txt`.
- Editorial-Referenz: https://www.studiofaculty.com/ (keine Assets übernommen).
- Betreiber, Straße/Hausnummer und E-Mail vom Nutzer im Chat bestätigt.
- Rechtliche Quellen: https://www.gesetze-im-internet.de/ddg/__5.html und https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng/
- Hosting: https://openai.com/policies/chatgpt-sites-data-processing-addendum/ und https://openai.com/policies/eu-privacy-policy/

## Veröffentlichung

Die Sites-Identität liegt in `.openai/hosting.json`. Die neue Bereitstellung ist nur für den Eigentümer zugänglich. Ein Wechsel auf eine eigene Domain erfordert das Anpassen von Canonical-/OpenGraph-URLs und `sitemap.xml`/`robots.txt`. Bei einem Wechsel des Hosting-Anbieters müssen außerdem die Datenschutzhinweise angepasst werden. App-Icons, Manifest, Favicon, robots.txt, Sitemap und Server-Header sind vorbereitet. Es gibt bewusst kein unbestätigtes Unternehmensschema und keine erfundene Rechtsform.

Impressum und Datenschutz basieren auf den bestätigten Angaben und der technischen Umsetzung; eine anwaltliche Prüfung ist damit nicht ersetzt. Nicht verifizierbare konkrete Aufbewahrungsfristen wurden nicht erfunden.
