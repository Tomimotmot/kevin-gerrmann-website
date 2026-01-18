/**
 * ==========================================================================
 * WEBSITE-INHALTE
 * ==========================================================================
 *
 * Hier kannst du alle Texte der Website bearbeiten.
 * Einfach den Text zwischen den Anführungszeichen ändern und speichern.
 *
 * WICHTIG:
 * - Anführungszeichen " nicht löschen
 * - Bei mehrzeiligem Text \n für Zeilenumbruch nutzen
 * ==========================================================================
 */

const CONTENT = {

    // ==========================================================================
    // HERO BEREICH (Startseite oben)
    // ==========================================================================
    hero: {
        pretitle: "Hörbuchsprecher & Voice Actor",
        title: "Kevin Gerrmann",
        subtitle: "Stimme für Geschichten, die unter die Haut gehen.",
        services: "Hörbücher · Hörspiele · Imagefilme",
        buttonPrimary: "Demos anhören",
        buttonSecondary: "Anfrage senden"
    },

    // ==========================================================================
    // VORTEILE BEREICH
    // ==========================================================================
    benefits: {
        pretitle: "Warum mit mir arbeiten",
        title: "Ihr Projekt in guten Händen",
        intro: "Sie suchen eine Stimme, die Ihre Geschichte trägt – und einen Partner, auf den Sie sich verlassen können. Hier erfahren Sie, was eine Zusammenarbeit mit mir auszeichnet.",

        items: [
            {
                icon: "⚡",
                title: "Schnelle Lieferung",
                text: "Klare Absprachen, strukturierte Abläufe, zügige Umsetzung. Sie wissen jederzeit, woran Sie sind, und erhalten Ihr Projekt zuverlässig im vereinbarten Zeitrahmen."
            },
            {
                icon: "🎯",
                title: "Sofort einsatzbereit",
                text: "Dank professioneller Studioumgebung erhalten Sie Aufnahmen in Broadcast-Qualität, fertig gemastert, ohne zusätzliche Nachbearbeitung."
            },
            {
                icon: "🎭",
                title: "Wandelbare Stimme",
                text: "Vom packenden Thriller-Erzähler über lebendige Kinderstimmen bis zum seriösen Unternehmenston – ich finde den Klang, der zu Ihrem Projekt passt."
            },
            {
                icon: "🌐",
                title: "Remote-Regie möglich",
                text: "Sie möchten die Aufnahme live begleiten? Per Video-Session sind Sie dabei, als säßen Sie mit im Studio. Echtzeit-Feedback, sofortige Anpassungen."
            },
            {
                icon: "✓",
                title: "Zuverlässige Umsetzung",
                text: "Briefing verstanden, Termin gehalten, Qualität geliefert. Sie erhalten genau das, was wir besprochen haben – ohne Überraschungen."
            },
            {
                icon: "↻",
                title: "Flexibel bei Änderungen",
                text: "Kurzfristige Textanpassungen oder eine andere Betonung? Korrekturen setze ich schnell und unkompliziert um. Ihr Projekt bleibt im Fluss."
            }
        ]
    },

    // ==========================================================================
    // DEMOS / HÖRPROBEN
    // ==========================================================================
    demos: {
        pretitle: "Portfolio",
        title: "Hörproben",

        items: [
            {
                category: "Hörbuch – Thriller",
                duration: "1:42",
                title: "»Stille Wasser«",
                description: "Spannungsgeladene Erzählung mit düsterer Atmosphäre. Packend vorgetragen, um den Hörer in den Bann zu ziehen.",
                audioFile: "assets/audio/demo-thriller.mp3"
            },
            {
                category: "Hörspiel – Kinder",
                duration: "1:18",
                title: "»Finn und der Wolkenfuchs«",
                description: "Lebendige Charakterstimmen für junge Hörer. Warmherzig, fantasievoll und mit Liebe zum Detail gesprochen.",
                audioFile: "assets/audio/demo-kinder.mp3"
            },
            {
                category: "Imagefilm – Marketing",
                duration: "0:52",
                title: "Corporate Voice",
                description: "Professionell, vertrauenswürdig und überzeugend. Die Stimme für Ihr Unternehmen.",
                audioFile: "assets/audio/demo-corporate.mp3"
            }
        ]
    },

    // ==========================================================================
    // ÜBER MICH
    // ==========================================================================
    about: {
        pretitle: "Über mich",
        title: "Eine Stimme, die Geschichten zum Leben erweckt",

        paragraphs: [
            "Als professioneller Hörbuchsprecher bringe ich Texte zum Klingen. Ob packende Thriller, zauberhafte Kinderhörspiele oder überzeugende Unternehmensfilme – ich finde den richtigen Ton für Ihr Projekt.",
            "Mit meinem professionellen Home-Studio bin ich flexibel und kurzfristig für Ihre Produktionen verfügbar. Remote-Regie ist selbstverständlich möglich."
        ],

        quote: "»Jedes Wort verdient es, gehört zu werden. Ich gebe ihm die Stimme, die es braucht.«",

        buttonText: "Projekt besprechen"
    },

    // ==========================================================================
    // STUDIO / EQUIPMENT
    // ==========================================================================
    equipment: {
        pretitle: "Technik",
        title: "Mein Studio",

        items: [
            {
                brand: "Neumann",
                name: "TLM 103",
                description: "Das Großmembran-Kondensatormikrofon aus dem Hause Neumann – der Industriestandard für kristallklare Sprachaufnahmen in Broadcast-Qualität.",
                image: "assets/images/microphone.jpg"
            },
            {
                brand: "Beyerdynamic",
                name: "DT 770 Pro",
                description: "Geschlossener Studiokopfhörer für präzises Monitoring. Damit höre ich genau das, was später bei Ihnen ankommt – bis ins kleinste Detail.",
                image: "assets/images/headphones.jpg"
            },
            {
                brand: "Home Studio",
                name: "Eigene Sprecherkabine",
                description: "Professionell gedämmt und akustisch optimiert für störungsfreie Aufnahmen ohne Raumhall. Studioqualität direkt zu Ihnen – ohne Kompromisse.",
                image: null,
                icon: "🏠"
            }
        ]
    },

    // ==========================================================================
    // KONTAKT
    // ==========================================================================
    contact: {
        pretitle: "Kontakt",
        title: "Lassen Sie uns sprechen",
        tagline: "Sie haben ein Projekt? Ich freue mich auf Ihre Anfrage.",
        email: "kontakt@kevin-gerrmann.de",
        buttonText: "Anfrage senden"
    },

    // ==========================================================================
    // FOOTER
    // ==========================================================================
    footer: {
        copyright: "© 2025 Kevin Gerrmann · Hörbuchsprecher & Voice Actor"
    }

};
