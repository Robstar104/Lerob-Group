# Lerob Group

Statische, deutschsprachige Website für Lerob Group. Kein Build und keine Laufzeit-Abhängigkeiten erforderlich.

## Lokal ansehen

Im Projektordner ausführen:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Dann http://127.0.0.1:4173 öffnen. Alle auszuliefernden Dateien liegen direkt im Hauptverzeichnis.

## VS Code Live Server

`index.html` mit „Open with Live Server“ öffnen. CSS, Schrift, Bild, JavaScript und interne Seitenlinks sind relativ verknüpft.

## Deployment

### Netlify
Die Website ist für Netlify vorkonfiguriert (`netlify.toml`):
- **Build command:** leer lassen
- **Publish directory:** `.` (bzw. leer lassen)
- Sicherheits-Header (`_headers` und `netlify.toml`) sind vorkonfiguriert.
- Bei jedem Push auf den `main`-Branch baut und aktualisiert Netlify die Seite automatisch.

### GitHub Pages
1. Auf GitHub unter **Settings** → **Pages** gehen.
2. Unter **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/(root)`
3. Speichern. Die Website ist nach wenigen Augenblicken live.

## Seiten

- `/`: Startseite mit Projekten, gemeinsamem Anspruch, Über uns und Kontakt
- `/impressum/`: bestätigte Betreiber, vollständige Anschrift und Kontakt
- `/datenschutz/`: Hinweise entsprechend der implementierten Funktionen
- `/404.html`: Fehlerseite

`DESIGN.md` dokumentiert das Gestaltungsraster, die Referenzen und Designentscheidungen. `qa/` enthält lokale Prüfergebnisse; dieser Ordner wird nicht veröffentlicht.

## Inhalte bearbeiten

Texte und Links in `index.html`, Rechtstexte in ihren jeweiligen Unterordnern (`impressum/index.html`, `datenschutz/index.html`). Farben, Typografie und Breakpoints in `styles.css`. `main.js` steuert ausschließlich das mobile Menü. Ohne JavaScript stehen alle Inhalte und Navigationslinks weiterhin zur Verfügung. Darkmode folgt der Systemeinstellung. Es werden weder Tracking noch eigene Cookies, Formulare oder Browser-Speicher eingesetzt.

## Quellen

- Inhalte und Produktstatus: https://byware.de/ und https://startklar-lerob.netlify.app/ (geprüft am 4. Oktober 2026).
- ByRoutine: originales Produktbild von https://byware.de/assets/img/byroutine-preview-today.png, als WebP optimiert.
- Manrope: lokale OFL-Schrift. Lizenz in `assets/OFL-Manrope.txt`.
- Betreiber, Straße/Hausnummer und E-Mail vom Nutzer im Chat bestätigt.
- Rechtliche Quellen: https://www.gesetze-im-internet.de/ddg/__5.html und https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng/
