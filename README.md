# Kevin Gerrmann - Hörbuchsprecher Website

Portfolio-Website für Kevin Gerrmann, professioneller Hörbuchsprecher.

**Live:** https://tomimotmot.github.io/kevin-gerrmann-website/

---

## TODO

### Texte
- [ ] Alle Texte in `content.js` durchgehen und finalisieren
- [ ] Hero-Bereich: Untertitel anpassen?
- [ ] Vorteile: Formulierungen prüfen
- [ ] Über mich: Text mit Kevin abstimmen
- [ ] Kontakt: E-Mail-Adresse bestätigen

### Bilder
- [ ] Portrait-Foto von Kevin → `assets/images/kevin-portrait.jpg`
- [ ] Mikrofon-Foto → `assets/images/microphone.jpg`
- [ ] Kopfhörer-Foto → `assets/images/headphones.jpg`
- [ ] Social Media Preview (1200x630px) → `assets/images/og-image.jpg`
- [ ] Favicon erstellen → `assets/favicon/`

### Audio-Demos
- [ ] Thriller-Demo → `assets/audio/demo-thriller.mp3`
- [ ] Kinder-Demo → `assets/audio/demo-kinder.mp3`
- [ ] Corporate-Demo → `assets/audio/demo-corporate.mp3`

### Rechtliches
- [ ] Impressum ausfüllen (Adresse, etc.)
- [ ] Datenschutz: Kontaktdaten ergänzen

### Domain
- [ ] Domain kaufen/auswählen (z.B. kevin-gerrmann.de)
- [ ] DNS-Einstellungen beim Domain-Anbieter:
  - CNAME Record: `www` → `tomimotmot.github.io`
  - A Records für Apex-Domain:
    ```
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    ```
- [ ] CNAME-Datei im Repo erstellen mit Domain
- [ ] GitHub Pages Custom Domain aktivieren
- [ ] HTTPS erzwingen

---

## Texte bearbeiten

Alle Texte sind in **`content.js`** - einfach dort bearbeiten, committen, fertig.

## Struktur

```
├── index.html          # Hauptseite
├── content.js          # ALLE TEXTE HIER
├── css/styles.css      # Styling
├── js/main.js          # Funktionalität
├── assets/
│   ├── images/         # Bilder
│   ├── audio/          # Audio-Demos
│   └── favicon/        # Favicons
├── impressum.html
└── datenschutz.html
```
