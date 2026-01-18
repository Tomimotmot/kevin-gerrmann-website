# Kevin Gerrmann - Hörbuchsprecher & Voice Actor

Portfolio-Website für Kevin Gerrmann, professioneller Hörbuchsprecher.

## Struktur

```
├── index.html          # Hauptseite
├── css/
│   └── styles.css      # Stylesheet
├── js/
│   └── main.js         # JavaScript
├── assets/
│   ├── images/         # Bilder (Portrait, Equipment)
│   ├── audio/          # Audio-Demos (MP3)
│   └── favicon/        # Favicons
├── robots.txt          # SEO
├── sitemap.xml         # SEO
└── CNAME               # Custom Domain (GitHub Pages)
```

## Setup

### Bilder hinzufügen
Lege folgende Dateien in `assets/images/`:
- `kevin-portrait.jpg` - Portrait-Foto
- `microphone.jpg` - Mikrofon-Foto
- `headphones.jpg` - Kopfhörer-Foto
- `og-image.jpg` - Social Media Preview (1200x630px)

### Audio-Demos hinzufügen
Lege folgende MP3-Dateien in `assets/audio/`:
- `demo-thriller.mp3`
- `demo-kinder.mp3`
- `demo-corporate.mp3`

### Favicon generieren
Nutze [favicon.io](https://favicon.io/) um Favicons zu erstellen und lege sie in `assets/favicon/`.

## Deployment auf GitHub Pages

1. Repository auf GitHub erstellen
2. Code pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```
3. In Repository Settings → Pages → Source: "Deploy from a branch" → main
4. Custom Domain einrichten (optional):
   - CNAME-Datei mit Domain erstellen
   - DNS bei Domain-Anbieter konfigurieren

## Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Cormorant Garamond, Outfit)

## Features

- Responsive Design
- SEO-optimiert (Meta-Tags, Schema.org, Open Graph)
- Accessibility (ARIA-Labels, semantisches HTML)
- Custom Audio-Player
- Smooth Scrolling
- Scroll-Animationen

## Lizenz

Alle Rechte vorbehalten © Kevin Gerrmann
