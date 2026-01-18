/**
 * Kevin Gerrmann - Hörbuchsprecher & Voice Actor
 * Main JavaScript
 */

(function() {
    'use strict';

    // ==========================================================================
    // Content Loading from content.js
    // ==========================================================================

    function loadContent() {
        if (typeof CONTENT === 'undefined') return;

        // Hero
        setText('.hero-pretitle', CONTENT.hero.pretitle);
        setText('.hero-title', CONTENT.hero.title);
        const subtitleEl = document.querySelector('.hero-subtitle');
        if (subtitleEl) {
            subtitleEl.innerHTML = `${CONTENT.hero.subtitle}<br>${CONTENT.hero.services}`;
        }
        setText('.hero-cta .btn-primary', CONTENT.hero.buttonPrimary);
        setText('.hero-cta .btn-secondary', CONTENT.hero.buttonSecondary);

        // Benefits
        setText('#benefits .section-pretitle', CONTENT.benefits.pretitle);
        setText('#benefits .section-title', CONTENT.benefits.title);
        setText('.benefits-intro p', CONTENT.benefits.intro);

        const benefitCards = document.querySelectorAll('.benefit-card');
        CONTENT.benefits.items.forEach((item, i) => {
            if (benefitCards[i]) {
                setText('.benefit-icon', item.icon, benefitCards[i]);
                setText('.benefit-title', item.title, benefitCards[i]);
                setText('.benefit-text', item.text, benefitCards[i]);
            }
        });

        // Demos
        setText('#demos .section-pretitle', CONTENT.demos.pretitle);
        setText('#demos .section-title', CONTENT.demos.title);

        const demoCards = document.querySelectorAll('.demo-card');
        CONTENT.demos.items.forEach((item, i) => {
            if (demoCards[i]) {
                setText('.demo-category', item.category, demoCards[i]);
                setText('.demo-duration', item.duration, demoCards[i]);
                setText('.demo-title', item.title, demoCards[i]);
                setText('.demo-description', item.description, demoCards[i]);
                const player = demoCards[i].querySelector('.audio-player');
                if (player) player.dataset.audioSrc = item.audioFile;
            }
        });

        // About
        setText('#about .section-pretitle', CONTENT.about.pretitle);
        setText('#about h2', CONTENT.about.title);
        const aboutParagraphs = document.querySelectorAll('.about-content > p:not(.section-pretitle)');
        CONTENT.about.paragraphs.forEach((text, i) => {
            if (aboutParagraphs[i]) aboutParagraphs[i].textContent = text;
        });
        setText('.about-highlight', CONTENT.about.quote);
        setText('.about-content .btn', CONTENT.about.buttonText);

        // Equipment
        setText('#equipment .section-pretitle', CONTENT.equipment.pretitle);
        setText('#equipment .section-title', CONTENT.equipment.title);

        const equipCards = document.querySelectorAll('.equipment-card');
        CONTENT.equipment.items.forEach((item, i) => {
            if (equipCards[i]) {
                setText('.equipment-brand', item.brand, equipCards[i]);
                setText('.equipment-name', item.name, equipCards[i]);
                setText('.equipment-desc', item.description, equipCards[i]);
            }
        });

        // Contact
        setText('#contact .section-pretitle', CONTENT.contact.pretitle);
        setText('#contact .section-title', CONTENT.contact.title);
        setText('.contact-tagline', CONTENT.contact.tagline);
        const emailLink = document.querySelector('.contact-email');
        if (emailLink) {
            emailLink.textContent = CONTENT.contact.email;
            emailLink.href = `mailto:${CONTENT.contact.email}`;
        }
        setText('.contact-cta .btn', CONTENT.contact.buttonText);

        // Footer
        const footerP = document.querySelector('footer p');
        if (footerP) footerP.innerHTML = CONTENT.footer.copyright.replace('Kevin Gerrmann', '<span>Kevin Gerrmann</span>');
    }

    function setText(selector, text, parent = document) {
        const el = parent.querySelector(selector);
        if (el) el.textContent = text;
    }

    // Load content on DOM ready
    loadContent();

    // ==========================================================================
    // Mobile Navigation
    // ==========================================================================

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded',
                navLinks.classList.contains('active'));
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ==========================================================================
    // Smooth Scrolling
    // ==========================================================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================================================
    // Navigation Background on Scroll
    // ==========================================================================

    const nav = document.querySelector('nav');

    function updateNavBackground() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavBackground, { passive: true });
    updateNavBackground();

    // ==========================================================================
    // Waveform Generation
    // ==========================================================================

    function generateWaveform(container, barCount = 60) {
        if (!container) return;

        container.innerHTML = '';

        for (let i = 0; i < barCount; i++) {
            const bar = document.createElement('div');
            bar.className = 'waveform-bar';
            // Create varied heights for visual interest
            const height = 10 + Math.random() * 30;
            bar.style.height = `${height}px`;
            container.appendChild(bar);
        }
    }

    // Generate waveforms for all audio players
    document.querySelectorAll('.waveform').forEach(waveform => {
        generateWaveform(waveform);
    });

    // ==========================================================================
    // Audio Player
    // ==========================================================================

    class AudioPlayer {
        constructor(playerElement) {
            this.player = playerElement;
            this.playBtn = playerElement.querySelector('.play-btn');
            this.progressBar = playerElement.querySelector('.progress-bar');
            this.timeDisplay = playerElement.querySelector('.time-display');
            this.waveformContainer = playerElement.querySelector('.waveform-container');
            this.bars = playerElement.querySelectorAll('.waveform-bar');

            // Get audio source from data attribute
            this.audioSrc = playerElement.dataset.audioSrc;
            this.audio = null;

            // Get duration from the demo card
            const demoCard = playerElement.closest('.demo-card');
            const durationText = demoCard?.querySelector('.demo-duration')?.textContent || '0:00';
            this.totalDuration = this.parseDuration(durationText);
            this.durationText = durationText;

            this.isPlaying = false;
            this.currentTime = 0;

            this.init();
        }

        parseDuration(str) {
            const parts = str.split(':').map(Number);
            return parts[0] * 60 + parts[1];
        }

        formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        init() {
            // Initialize audio element if source exists
            if (this.audioSrc) {
                this.audio = new Audio(this.audioSrc);
                this.audio.preload = 'metadata';

                this.audio.addEventListener('loadedmetadata', () => {
                    this.totalDuration = this.audio.duration;
                    this.durationText = this.formatTime(this.totalDuration);
                    this.updateTimeDisplay();
                });

                this.audio.addEventListener('timeupdate', () => {
                    this.currentTime = this.audio.currentTime;
                    this.updateProgress();
                });

                this.audio.addEventListener('ended', () => {
                    this.stop();
                });
            }

            this.playBtn.addEventListener('click', () => this.togglePlay());

            // Click on waveform to seek
            this.waveformContainer.addEventListener('click', (e) => {
                if (this.audio) {
                    const rect = this.waveformContainer.getBoundingClientRect();
                    const percent = (e.clientX - rect.left) / rect.width;
                    this.audio.currentTime = percent * this.totalDuration;
                }
            });

            this.updateTimeDisplay();
        }

        togglePlay() {
            if (this.isPlaying) {
                this.pause();
            } else {
                this.play();
            }
        }

        play() {
            // Stop all other players
            document.querySelectorAll('.audio-player').forEach(p => {
                if (p !== this.player && p.audioPlayerInstance) {
                    p.audioPlayerInstance.stop();
                }
            });

            this.isPlaying = true;
            this.updatePlayButton();

            if (this.audio) {
                this.audio.play();
            } else {
                // Demo mode: simulate playback
                this.simulatePlayback();
            }
        }

        pause() {
            this.isPlaying = false;
            this.updatePlayButton();

            if (this.audio) {
                this.audio.pause();
            } else if (this.simulationInterval) {
                clearInterval(this.simulationInterval);
            }
        }

        stop() {
            this.isPlaying = false;
            this.currentTime = 0;
            this.updatePlayButton();
            this.updateProgress();

            if (this.audio) {
                this.audio.pause();
                this.audio.currentTime = 0;
            } else if (this.simulationInterval) {
                clearInterval(this.simulationInterval);
            }
        }

        simulatePlayback() {
            this.simulationInterval = setInterval(() => {
                this.currentTime += 0.5;
                this.updateProgress();

                if (this.currentTime >= this.totalDuration) {
                    this.stop();
                }
            }, 500);
        }

        updatePlayButton() {
            const icon = this.isPlaying
                ? '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
                : '<svg viewBox="0 0 24 24"><polygon class="play-icon" points="5,3 19,12 5,21"></polygon></svg>';
            this.playBtn.innerHTML = icon;
        }

        updateProgress() {
            const percent = (this.currentTime / this.totalDuration) * 100;
            this.progressBar.style.width = `${percent}%`;

            // Update waveform bars
            const activeBarCount = Math.floor((percent / 100) * this.bars.length);
            this.bars.forEach((bar, index) => {
                bar.classList.toggle('active', index < activeBarCount);
            });

            this.updateTimeDisplay();
        }

        updateTimeDisplay() {
            this.timeDisplay.textContent = `${this.formatTime(this.currentTime)} / ${this.durationText}`;
        }
    }

    // Initialize all audio players
    document.querySelectorAll('.audio-player').forEach(player => {
        player.audioPlayerInstance = new AudioPlayer(player);
    });

    // ==========================================================================
    // Intersection Observer for Animations
    // ==========================================================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.benefit-card, .demo-card, .equipment-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .benefit-card.visible,
        .demo-card.visible,
        .equipment-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

})();
