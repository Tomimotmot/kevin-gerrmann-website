# Projektplan: Kevin Gerrmann - Hörbuchsprecher Webseite

## 1. Analyse des bestehenden Templates

### Stärken des aktuellen Templates:
- **Elegantes Design**: Dunkles Theme mit Gold-Akzenten, professionelle Ästhetik
- **Vollständige Sektionen**: Hero, Vorteile, Demos, Über mich, Studio, Kontakt
- **Responsive**: Mobile-Navigation und Media Queries vorhanden
- **Animationen**: Soundwaves, Fade-In Effekte, Hover-States
- **Audio-Player UI**: Visuelle Waveform-Darstellung (Platzhalter)

### Verbesserungspotential:
- Alles in einer HTML-Datei (CSS/JS nicht separiert)
- Keine echten Audio-Dateien eingebunden
- Platzhalter-Bilder (keine echten Fotos)
- Keine SEO-Optimierung (Schema.org, Open Graph)
- Keine Kontaktformular-Funktionalität
- Fehlende Favicon und Meta-Tags

---

## 2. Framework-Entscheidung

### Option A: Vanilla HTML/CSS/JS (Empfohlen)
**Vorteile:**
- Schnellste Ladezeit
- Keine Build-Tools nötig
- Einfache Wartung
- Kostenloses Hosting überall möglich
- Für eine Portfolio-Seite völlig ausreichend

**Nachteile:**
- Manuelle Optimierungen nötig

### Option B: Astro
**Vorteile:**
- Statische Generierung, sehr schnell
- Komponenten-basiert
- Gute SEO-Unterstützung

**Nachteile:**
- Overhead für eine einfache Seite
- Build-Prozess nötig

### Option C: Next.js / Nuxt
**Vorteile:**
- Leistungsfähig, viele Features

**Nachteile:**
- Massiver Overhead für eine statische Portfolio-Seite
- Längere Ladezeiten durch JS-Bundle

### Empfehlung: **Option A - Vanilla HTML/CSS/JS**
Für eine Hörbuchsprecher-Portfolio-Seite ist Vanilla die beste Wahl. Schnell, einfach, wartungsarm.

---

## 3. Hosting-Optionen

### Option 1: GitHub Pages (Kostenlos) - Empfohlen
- **Kosten:** Kostenlos
- **SSL:** Ja, automatisch
- **Custom Domain:** Ja (z.B. kevin-gerrmann.de)
- **Deployment:** Git Push
- **Vorteile:** Zuverlässig, schnelles CDN, keine Wartung

### Option 2: Netlify (Kostenlos)
- **Kosten:** Free Tier ausreichend
- **SSL:** Ja, automatisch
- **Custom Domain:** Ja
- **Vorteile:** Kontaktformular-Backend inklusive (Netlify Forms)
- **Deployment:** Git Push oder Drag & Drop

### Option 3: Vercel (Kostenlos)
- **Kosten:** Free Tier ausreichend
- **SSL:** Ja
- **Deployment:** Git Push
- **Gut für:** Wenn später doch ein Framework genutzt wird

### Option 4: Traditionelles Webhosting (z.B. All-Inkl, Strato)
- **Kosten:** ~3-5€/Monat
- **Vorteile:** E-Mail-Postfächer inklusive, PHP möglich für Kontaktformular
- **Nachteile:** Kostet Geld, mehr Wartung

### Empfehlung: **Netlify** oder **GitHub Pages**
Beide kostenlos, zuverlässig und mit Custom Domain. Netlify hat den Vorteil von eingebauten Formularen.

---

## 4. Projektstruktur (Neu)

```
kev-hoerbuchsprecher/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── kevin-portrait.jpg
│   │   ├── microphone.jpg
│   │   ├── headphones.jpg
│   │   ├── studio.jpg
│   │   └── og-image.jpg (für Social Media)
│   ├── audio/
│   │   ├── demo-thriller.mp3
│   │   ├── demo-kinder.mp3
│   │   └── demo-corporate.mp3
│   └── favicon/
│       ├── favicon.ico
│       ├── favicon-32x32.png
│       └── apple-touch-icon.png
├── CNAME (für GitHub Pages Custom Domain)
└── README.md
```

---

## 5. Optimierungen und Features

### Phase 1: Grundlegende Optimierungen
- [ ] CSS und JS in separate Dateien auslagern
- [ ] Meta-Tags ergänzen (Open Graph, Twitter Cards)
- [ ] Schema.org Markup für Person/LocalBusiness
- [ ] Favicon erstellen und einbinden
- [ ] Bilder optimieren (WebP Format)
- [ ] Alt-Texte für alle Bilder

### Phase 2: Funktionalität
- [ ] Echte Audio-Player mit HTML5 Audio
- [ ] Audio-Dateien einbinden
- [ ] Kontaktformular (Netlify Forms oder Formspree)
- [ ] Cookie-Banner (falls Analytics gewünscht)

### Phase 3: Performance & SEO
- [ ] Lazy Loading für Bilder
- [ ] Critical CSS inline
- [ ] Preload für wichtige Ressourcen
- [ ] robots.txt und sitemap.xml
- [ ] Google Search Console einrichten

### Phase 4: Extras (Optional)
- [ ] Impressum & Datenschutz Seiten
- [ ] Analytics (Plausible oder Simple Analytics - DSGVO-konform)
- [ ] Testimonials/Referenzen Sektion
- [ ] Download-Bereich für Pressematerial

---

## 6. Nächste Schritte

1. **Entscheidung treffen:** Framework und Hosting bestätigen
2. **Assets sammeln:** Echte Fotos, Audio-Demos, Logo
3. **Projektstruktur aufsetzen:** Dateien separieren
4. **Entwicklung:** Optimierungen umsetzen
5. **Testing:** Cross-Browser, Mobile, Performance
6. **Deployment:** Auf gewählte Plattform deployen
7. **Domain:** kevin-gerrmann.de verbinden

---

## 7. Geschätzte Inhalte die Kevin bereitstellen muss

- [ ] Professionelles Portrait-Foto
- [ ] Fotos vom Studio-Equipment
- [ ] 3 Audio-Demo-Dateien (MP3, ca. 1-2 Min. je)
- [ ] Logo (falls vorhanden) oder Bestätigung dass "KG" reicht
- [ ] Korrekte E-Mail-Adresse bestätigen
- [ ] Impressums-Daten (Name, Adresse für Impressum)
- [ ] Domain-Entscheidung (kevin-gerrmann.de?)

---

## Fragen zur Klärung

1. **Hosting:** Netlify (mit eingebautem Kontaktformular) oder GitHub Pages?
2. **Domain:** Soll eine eigene Domain genutzt werden? Welche?
3. **Kontaktformular:** Reicht ein mailto-Link oder echtes Formular gewünscht?
4. **Analytics:** Sollen Besucherzahlen getrackt werden?
5. **Impressum/Datenschutz:** Sollen diese als separate Seiten angelegt werden?
