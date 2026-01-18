<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kevin Gerrmann | Hörbuchsprecher & Voice Actor</title>
    <meta name="description" content="Professioneller Hörbuchsprecher Kevin Gerrmann – Thriller, Hörspiele, Imagefilme. Jetzt Demos anhören und buchen.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --gold: #D4AF37;
            --gold-light: #F4E4BC;
            --gold-dark: #8B7355;
            --bg-dark: #0A0A0F;
            --bg-card: #12121A;
            --bg-elevated: #1A1A25;
            --text-primary: #F5F5F5;
            --text-secondary: #9CA3AF;
            --text-muted: #6B7280;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }
        body::before {
            content: '';
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
            opacity: 0.03;
            pointer-events: none;
            z-index: 1000;
        }
        h1, h2, h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; }
        nav {
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 100;
            padding: 1.5rem 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(180deg, rgba(10, 10, 15, 0.95) 0%, transparent 100%);
            backdrop-filter: blur(10px);
        }
        .logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--gold);
            letter-spacing: 0.1em;
            text-decoration: none;
        }
        .nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
        }
        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            transition: color 0.3s;
            position: relative;
        }
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -4px; left: 0;
            width: 0; height: 1px;
            background: var(--gold);
            transition: width 0.3s;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-links a:hover::after { width: 100%; }
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 2rem;
        }
        .hero-bg {
            position: absolute;
            inset: 0;
            background: 
                radial-gradient(ellipse 80% 50% at 50% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 60%),
                radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 40%);
        }
        .sound-waves {
            position: absolute;
            left: 50%; top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            gap: 8px;
            opacity: 0.15;
        }
        .sound-wave {
            width: 4px;
            background: linear-gradient(180deg, var(--gold) 0%, transparent 100%);
            border-radius: 4px;
            animation: wave 1.5s ease-in-out infinite;
        }
        .sound-wave:nth-child(1) { height: 60px; animation-delay: 0s; }
        .sound-wave:nth-child(2) { height: 100px; animation-delay: 0.1s; }
        .sound-wave:nth-child(3) { height: 140px; animation-delay: 0.2s; }
        .sound-wave:nth-child(4) { height: 180px; animation-delay: 0.3s; }
        .sound-wave:nth-child(5) { height: 200px; animation-delay: 0.4s; }
        .sound-wave:nth-child(6) { height: 180px; animation-delay: 0.5s; }
        .sound-wave:nth-child(7) { height: 140px; animation-delay: 0.6s; }
        .sound-wave:nth-child(8) { height: 100px; animation-delay: 0.7s; }
        .sound-wave:nth-child(9) { height: 60px; animation-delay: 0.8s; }
        @keyframes wave {
            0%, 100% { transform: scaleY(0.5); opacity: 0.3; }
            50% { transform: scaleY(1); opacity: 1; }
        }
        .hero-content {
            position: relative;
            text-align: center;
            max-width: 900px;
            z-index: 10;
        }
        .hero-pretitle {
            font-size: 0.85rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 1.5rem;
            opacity: 0;
            animation: fadeInUp 1s ease forwards;
        }
        .hero-title {
            font-size: clamp(3rem, 10vw, 7rem);
            font-weight: 700;
            line-height: 1;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--gold-light) 50%, var(--gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            opacity: 0;
            animation: fadeInUp 1s ease 0.2s forwards;
        }
        .hero-subtitle {
            font-size: 1.3rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            font-weight: 300;
            opacity: 0;
            animation: fadeInUp 1s ease 0.4s forwards;
        }
        .hero-cta {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
            opacity: 0;
            animation: fadeInUp 1s ease 0.6s forwards;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .btn {
            padding: 1rem 2.5rem;
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 2px;
            transition: all 0.4s;
            cursor: pointer;
            border: none;
        }
        .btn-primary {
            background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
            color: var(--bg-dark);
            box-shadow: 0 4px 30px rgba(212, 175, 55, 0.3);
        }
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 40px rgba(212, 175, 55, 0.4);
        }
        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .btn-secondary:hover { border-color: var(--gold); color: var(--gold); }
        .scroll-indicator {
            position: absolute;
            bottom: 3rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-muted);
            font-size: 0.75rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            opacity: 0;
            animation: fadeInUp 1s ease 1s forwards;
        }
        .scroll-line {
            width: 1px;
            height: 60px;
            background: linear-gradient(180deg, var(--gold) 0%, transparent 100%);
            animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
            0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
            50% { opacity: 1; transform: scaleY(1); }
        }
        section {
            padding: 8rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }
        .section-header { text-align: center; margin-bottom: 5rem; }
        .section-pretitle {
            font-size: 0.8rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 1rem;
        }
        .section-title { font-size: clamp(2.5rem, 5vw, 4rem); }
        #benefits {
            background: linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-card) 100%);
            padding: 8rem 2rem;
            position: relative;
        }
        #benefits::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
        }
        .benefits-intro {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 5rem;
        }
        .benefits-intro p {
            color: var(--text-secondary);
            font-size: 1.15rem;
            line-height: 1.8;
        }
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        .benefit-card {
            padding: 2.5rem 2rem;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.4s;
            position: relative;
        }
        .benefit-card::before {
            content: '';
            position: absolute;
            top: 0; left: 2rem; right: 2rem;
            height: 2px;
            background: linear-gradient(90deg, var(--gold), transparent);
            opacity: 0;
            transition: opacity 0.4s;
        }
        .benefit-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(212, 175, 55, 0.2);
            transform: translateY(-5px);
        }
        .benefit-card:hover::before { opacity: 1; }
        .benefit-icon {
            width: 56px; height: 56px;
            border-radius: 12px;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05));
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }
        .benefit-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.4rem;
            margin-bottom: 0.75rem;
        }
        .benefit-text {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.7;
        }
        #demos { background: var(--bg-dark); }
        .demos-grid { display: grid; gap: 2rem; }
        .demo-card {
            background: var(--bg-elevated);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 2rem;
            transition: all 0.4s;
        }
        .demo-card:hover {
            transform: translateY(-5px);
            border-color: rgba(212, 175, 55, 0.2);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }
        .demo-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1.5rem;
        }
        .demo-category {
            font-size: 0.75rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--gold);
            padding: 0.4rem 1rem;
            background: rgba(212, 175, 55, 0.1);
            border-radius: 2px;
        }
        .demo-duration { color: var(--text-muted); font-size: 0.85rem; }
        .demo-title { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .demo-description { color: var(--text-secondary); margin-bottom: 1.5rem; }
        .audio-player {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 6px;
        }
        .play-btn {
            width: 50px; height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }
        .play-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
        }
        .play-btn svg { width: 20px; height: 20px; fill: var(--bg-dark); margin-left: 3px; }
        .waveform-container { flex: 1; position: relative; height: 50px; display: flex; align-items: center; }
        .waveform { width: 100%; height: 40px; display: flex; align-items: center; gap: 2px; }
        .waveform-bar {
            flex: 1;
            background: rgba(212, 175, 55, 0.3);
            border-radius: 2px;
            transition: all 0.1s;
        }
        .waveform-bar.active { background: var(--gold); }
        .progress-bar {
            position: absolute;
            bottom: 0; left: 0;
            height: 3px;
            background: var(--gold);
            border-radius: 2px;
            width: 0%;
        }
        .time-display { font-size: 0.8rem; color: var(--text-muted); min-width: 80px; text-align: right; }
        #about {
            background: linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-card) 50%, var(--bg-dark) 100%);
            padding: 10rem 2rem;
        }
        .about-wrapper { max-width: 1200px; margin: 0 auto; }
        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 6rem;
            align-items: center;
        }
        .about-image { position: relative; }
        .about-image-frame {
            aspect-ratio: 3/4;
            background: linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-card) 100%);
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .placeholder-portrait { font-size: 8rem; color: rgba(212, 175, 55, 0.2); }
        .about-accent {
            position: absolute;
            width: 150px; height: 150px;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
            top: -30px; right: -30px;
            border-radius: 50%;
        }
        .about-content h2 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1.5rem; line-height: 1.2; }
        .about-content p { color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 1.05rem; }
        .about-highlight {
            color: var(--gold);
            font-style: italic;
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.4rem;
            border-left: 2px solid var(--gold);
            padding-left: 1.5rem;
            margin: 2rem 0;
        }
        #equipment { padding: 8rem 2rem; background: var(--bg-dark); }
        .equipment-wrapper { max-width: 1200px; margin: 0 auto; }
        .equipment-showcase {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-top: 4rem;
        }
        .equipment-card {
            border-radius: 12px;
            overflow: hidden;
            background: var(--bg-card);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.4s;
        }
        .equipment-card:hover {
            border-color: rgba(212, 175, 55, 0.3);
            transform: translateY(-8px);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }
        .equipment-image {
            width: 100%;
            aspect-ratio: 4/3;
            object-fit: cover;
            display: block;
        }
        .equipment-info { padding: 2rem; }
        .equipment-brand {
            font-size: 0.75rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 0.5rem;
        }
        .equipment-name {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.6rem;
            margin-bottom: 0.75rem;
        }
        .equipment-desc { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; }
        .equipment-full {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .equipment-full .equipment-visual {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.02) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem;
        }
        .equipment-full .equipment-visual-icon { font-size: 6rem; opacity: 0.6; }
        .equipment-full .equipment-info { display: flex; flex-direction: column; justify-content: center; padding: 3rem; }
        #contact {
            text-align: center;
            padding: 8rem 2rem 6rem;
            background: linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-card) 100%);
        }
        .contact-content { max-width: 600px; margin: 0 auto; }
        .contact-email {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            color: var(--gold);
            text-decoration: none;
            display: inline-block;
            margin: 2rem 0;
            position: relative;
        }
        .contact-email::after {
            content: '';
            position: absolute;
            bottom: -5px; left: 0;
            width: 100%; height: 2px;
            background: var(--gold);
            transform: scaleX(0);
            transition: transform 0.3s;
        }
        .contact-email:hover::after { transform: scaleX(1); }
        .contact-tagline { color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 3rem; }
        footer {
            padding: 3rem 2rem;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--text-muted);
            font-size: 0.85rem;
            background: var(--bg-card);
        }
        footer span { color: var(--gold); }
        .mobile-menu-btn {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
        }
        .mobile-menu-btn span { display: block; width: 25px; height: 2px; background: var(--text-primary); }
        @media (max-width: 1024px) {
            .about-grid { grid-template-columns: 1fr; gap: 3rem; }
            .about-image { order: -1; max-width: 400px; margin: 0 auto; }
            .benefits-grid { grid-template-columns: repeat(2, 1fr); }
            .equipment-showcase { grid-template-columns: 1fr; }
            .equipment-full { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
            nav { padding: 1rem 1.5rem; }
            .nav-links {
                display: none;
                position: absolute;
                top: 100%; left: 0; right: 0;
                background: var(--bg-dark);
                flex-direction: column;
                padding: 2rem;
                gap: 1.5rem;
            }
            .nav-links.active { display: flex; }
            .mobile-menu-btn { display: flex; }
            .hero-cta { flex-direction: column; align-items: center; }
            .btn { width: 100%; max-width: 280px; text-align: center; }
            section { padding: 5rem 1.5rem; }
            .benefits-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <nav>
        <a href="#" class="logo">KG</a>
        <ul class="nav-links">
            <li><a href="#benefits">Vorteile</a></li>
            <li><a href="#demos">Demos</a></li>
            <li><a href="#about">Über mich</a></li>
            <li><a href="#equipment">Studio</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul>
        <button class="mobile-menu-btn" aria-label="Menü"><span></span><span></span><span></span></button>
    </nav>
    <section class="hero">
        <div class="hero-bg"></div>
        <div class="sound-waves">
            <div class="sound-wave"></div><div class="sound-wave"></div><div class="sound-wave"></div>
            <div class="sound-wave"></div><div class="sound-wave"></div><div class="sound-wave"></div>
            <div class="sound-wave"></div><div class="sound-wave"></div><div class="sound-wave"></div>
        </div>
        <div class="hero-content">
            <p class="hero-pretitle">Hörbuchsprecher & Voice Actor</p>
            <h1 class="hero-title">Kevin Gerrmann</h1>
            <p class="hero-subtitle">Stimme für Geschichten, die unter die Haut gehen.<br>Hörbücher · Hörspiele · Imagefilme</p>
            <div class="hero-cta">
                <a href="#demos" class="btn btn-primary">Demos anhören</a>
                <a href="#contact" class="btn btn-secondary">Anfrage senden</a>
            </div>
        </div>
        <div class="scroll-indicator"><span>Entdecken</span><div class="scroll-line"></div></div>
    </section>
    <section id="benefits">
        <div class="section-header">
            <p class="section-pretitle">Warum mit mir arbeiten</p>
            <h2 class="section-title">Ihr Projekt in guten Händen</h2>
        </div>
        <div class="benefits-intro">
            <p>Sie suchen eine Stimme, die Ihre Geschichte trägt – und einen Partner, auf den Sie sich verlassen können. Hier erfahren Sie, was eine Zusammenarbeit mit mir auszeichnet.</p>
        </div>
        <div class="benefits-grid">
            <div class="benefit-card">
                <div class="benefit-icon">⚡</div>
                <h3 class="benefit-title">Schnelle Lieferung</h3>
                <p class="benefit-text">Zeitdruck? Kein Problem. Kurze Texte liefere ich oft noch am selben Tag. Größere Projekte erhalten Sie zuverlässig im vereinbarten Zeitrahmen.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">🎯</div>
                <h3 class="benefit-title">Sofort einsatzbereit</h3>
                <p class="benefit-text">Dank professioneller Studioumgebung erhalten Sie Aufnahmen in Broadcast-Qualität – fertig gemastert, ohne zusätzliche Nachbearbeitung.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">🎭</div>
                <h3 class="benefit-title">Wandelbare Stimme</h3>
                <p class="benefit-text">Vom packenden Thriller-Erzähler über lebendige Kinderstimmen bis zum seriösen Unternehmenston – ich finde den Klang, der zu Ihrem Projekt passt.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">🌐</div>
                <h3 class="benefit-title">Remote-Regie möglich</h3>
                <p class="benefit-text">Sie möchten die Aufnahme live begleiten? Per Video-Session sind Sie dabei, als säßen Sie mit im Studio. Echtzeit-Feedback, sofortige Anpassungen.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">✓</div>
                <h3 class="benefit-title">Zuverlässige Umsetzung</h3>
                <p class="benefit-text">Briefing verstanden, Termin gehalten, Qualität geliefert. Sie erhalten genau das, was wir besprochen haben – ohne Überraschungen.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">↻</div>
                <h3 class="benefit-title">Flexibel bei Änderungen</h3>
                <p class="benefit-text">Kurzfristige Textanpassungen oder eine andere Betonung? Korrekturen setze ich schnell und unkompliziert um. Ihr Projekt bleibt im Fluss.</p>
            </div>
        </div>
    </section>
    <section id="demos">
        <div class="section-header">
            <p class="section-pretitle">Portfolio</p>
            <h2 class="section-title">Hörproben</h2>
        </div>
        <div class="demos-grid">
            <div class="demo-card">
                <div class="demo-header">
                    <span class="demo-category">Hörbuch – Thriller</span>
                    <span class="demo-duration">1:42</span>
                </div>
                <h3 class="demo-title">„Stille Wasser"</h3>
                <p class="demo-description">Spannungsgeladene Erzählung mit düsterer Atmosphäre. Packend vorgetragen, um den Hörer in den Bann zu ziehen.</p>
                <div class="audio-player">
                    <button class="play-btn"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg></button>
                    <div class="waveform-container"><div class="waveform" id="waveform-thriller"></div><div class="progress-bar"></div></div>
                    <span class="time-display">0:00 / 1:42</span>
                </div>
            </div>
            <div class="demo-card">
                <div class="demo-header">
                    <span class="demo-category">Hörspiel – Kinder</span>
                    <span class="demo-duration">1:18</span>
                </div>
                <h3 class="demo-title">„Finn und der Wolkenfuchs"</h3>
                <p class="demo-description">Lebendige Charakterstimmen für junge Hörer. Warmherzig, fantasievoll und mit Liebe zum Detail gesprochen.</p>
                <div class="audio-player">
                    <button class="play-btn"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg></button>
                    <div class="waveform-container"><div class="waveform" id="waveform-kinder"></div><div class="progress-bar"></div></div>
                    <span class="time-display">0:00 / 1:18</span>
                </div>
            </div>
            <div class="demo-card">
                <div class="demo-header">
                    <span class="demo-category">Imagefilm – Marketing</span>
                    <span class="demo-duration">0:52</span>
                </div>
                <h3 class="demo-title">Corporate Voice</h3>
                <p class="demo-description">Professionell, vertrauenswürdig und überzeugend. Die Stimme für Ihr Unternehmen.</p>
                <div class="audio-player">
                    <button class="play-btn"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg></button>
                    <div class="waveform-container"><div class="waveform" id="waveform-corporate"></div><div class="progress-bar"></div></div>
                    <span class="time-display">0:00 / 0:52</span>
                </div>
            </div>
        </div>
    </section>
    <section id="about">
        <div class="about-wrapper">
            <div class="about-grid">
                <div class="about-image">
                    <div class="about-accent"></div>
                    <div class="about-image-frame"><span class="placeholder-portrait">🎙️</span></div>
                </div>
                <div class="about-content">
                    <p class="section-pretitle">Über mich</p>
                    <h2>Eine Stimme, die Geschichten zum Leben erweckt</h2>
                    <p>Als professioneller Hörbuchsprecher bringe ich Texte zum Klingen. Ob packende Thriller, zauberhafte Kinderhörspiele oder überzeugende Unternehmensfilme – ich finde den richtigen Ton für Ihr Projekt.</p>
                    <p class="about-highlight">„Jedes Wort verdient es, gehört zu werden. Ich gebe ihm die Stimme, die es braucht."</p>
                    <p>Mit meinem professionellen Home-Studio bin ich flexibel und kurzfristig für Ihre Produktionen verfügbar. Remote-Regie ist selbstverständlich möglich.</p>
                    <a href="#contact" class="btn btn-primary">Projekt besprechen</a>
                </div>
            </div>
        </div>
    </section>
    <section id="equipment">
        <div class="equipment-wrapper">
            <div class="section-header">
                <p class="section-pretitle">Technik</p>
                <h2 class="section-title">Mein Studio</h2>
            </div>
            <div class="equipment-showcase">
                <div class="equipment-card">
                    <img src="microphone.png" alt="Neumann TLM 103 Mikrofon" class="equipment-image">
                    <div class="equipment-info">
                        <span class="equipment-brand">Neumann</span>
                        <h3 class="equipment-name">TLM 103</h3>
                        <p class="equipment-desc">Das Großmembran-Kondensatormikrofon aus dem Hause Neumann – der Industriestandard für kristallklare Sprachaufnahmen in Broadcast-Qualität.</p>
                    </div>
                </div>
                <div class="equipment-card">
                    <img src="headphones.png" alt="Beyerdynamic DT 770 Pro Kopfhörer" class="equipment-image">
                    <div class="equipment-info">
                        <span class="equipment-brand">Beyerdynamic</span>
                        <h3 class="equipment-name">DT 770 Pro</h3>
                        <p class="equipment-desc">Geschlossener Studiokopfhörer für präzises Monitoring. Damit höre ich genau das, was später bei Ihnen ankommt – bis ins kleinste Detail.</p>
                    </div>
                </div>
                <div class="equipment-card equipment-full">
                    <div class="equipment-visual"><span class="equipment-visual-icon">🏠</span></div>
                    <div class="equipment-info">
                        <span class="equipment-brand">Home Studio</span>
                        <h3 class="equipment-name">Eigene Sprecherkabine</h3>
                        <p class="equipment-desc">Professionell gedämmt und akustisch optimiert für störungsfreie Aufnahmen ohne Raumhall. Studioqualität direkt zu Ihnen – ohne Kompromisse.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contact">
        <div class="section-header">
            <p class="section-pretitle">Kontakt</p>
            <h2 class="section-title">Lassen Sie uns sprechen</h2>
        </div>
        <div class="contact-content">
            <p class="contact-tagline">Sie haben ein Projekt? Ich freue mich auf Ihre Anfrage.</p>
            <a href="mailto:kontakt@kevin-gerrmann.de" class="contact-email">kontakt@kevin-gerrmann.de</a>
            <div style="margin-top: 3rem;">
                <a href="mailto:kontakt@kevin-gerrmann.de?subject=Projektanfrage" class="btn btn-primary">Anfrage senden</a>
            </div>
        </div>
    </section>
    <footer><p>© 2025 <span>Kevin Gerrmann</span> · Hörbuchsprecher & Voice Actor</p></footer>
    <script>
        document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('active'));
        });
        function generateWaveform(id, count = 60) {
            const c = document.getElementById(id);
            if (!c) return;
            for (let i = 0; i < count; i++) {
                const bar = document.createElement('div');
                bar.className = 'waveform-bar';
                bar.style.height = (10 + Math.random() * 30) + 'px';
                c.appendChild(bar);
            }
        }
        generateWaveform('waveform-thriller');
        generateWaveform('waveform-kinder');
        generateWaveform('waveform-corporate');
        document.querySelectorAll('.audio-player').forEach(player => {
            const btn = player.querySelector('.play-btn');
            const progress = player.querySelector('.progress-bar');
            const time = player.querySelector('.time-display');
            const bars = player.querySelectorAll('.waveform-bar');
            const dur = player.closest('.demo-card').querySelector('.demo-duration').textContent;
            const [m, s] = dur.split(':').map(Number);
            const total = m * 60 + s;
            let playing = false, prog = 0, int = null;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.audio-player').forEach(p => {
                    if (p !== player) {
                        clearInterval(p.dataset.int);
                        p.querySelector('.play-btn').innerHTML = '<svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>';
                        p.querySelector('.progress-bar').style.width = '0%';
                        p.querySelectorAll('.waveform-bar').forEach(b => b.classList.remove('active'));
                    }
                });
                if (playing) {
                    clearInterval(int);
                    btn.innerHTML = '<svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>';
                    playing = false;
                } else {
                    btn.innerHTML = '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
                    playing = true;
                    int = setInterval(() => {
                        prog += 0.5;
                        const pct = (prog / total) * 100;
                        progress.style.width = pct + '%';
                        time.textContent = Math.floor(prog/60) + ':' + String(Math.floor(prog%60)).padStart(2,'0') + ' / ' + dur;
                        bars.forEach((b, i) => { if (i <= Math.floor(pct/100*bars.length)) b.classList.add('active'); });
                        if (prog >= total) {
                            clearInterval(int);
                            prog = 0;
                            progress.style.width = '0%';
                            time.textContent = '0:00 / ' + dur;
                            btn.innerHTML = '<svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>';
                            bars.forEach(b => b.classList.remove('active'));
                            playing = false;
                        }
                    }, 500);
                    player.dataset.int = int;
                }
            });
        });
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
            });
        });
        window.addEventListener('scroll', () => {
            document.querySelector('nav').style.background = window.scrollY > 100 ? 'rgba(10,10,15,0.98)' : 'linear-gradient(180deg,rgba(10,10,15,0.95) 0%,transparent 100%)';
        });
    </script>
</body>
</html>