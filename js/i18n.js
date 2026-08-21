/* js/i18n.js - Llum de Lluna i18n Translation Engine */

const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.treatments": "Tratamientos",
        "nav.gallery": "Galería",
        "nav.appointment": "Cita",
        "header.mode": "Modo",

        "footer.description": "Espacio dedicado al cuidado consciente de la piel, manicuras premium y rituales de bienestar para realzar tu luz propia.",
        "footer.ownerLabel": "Propietaria y Esteticista:",
        "footer.linksTitle": "Enlaces",
        "footer.hoursTitle": "Horarios",
        "footer.monFri": "Lunes - Viernes",
        "footer.saturday": "Sábados",
        "footer.sunday": "Domingos",
        "footer.closed": "Cerrado",
        "footer.contactTitle": "Contacto",
        "footer.rights": "Todos los derechos reservados.",
        "footer.tagline": "Estética & Bienestar",
        "footer.language": "Idioma:",

        "hero.subtitle": "Centro de Estética en L'Eliana",
        "hero.h1": "Centro de Estética en L'Eliana",
        "hero.lead": "Tu santuario de estética y bienestar en L'Eliana concebido para tu <strong>máxima privacidad, confort y desconexión absoluta</strong>. Disfruta de una atención 100% exclusiva en cabinas individuales a puerta cerrada, combinando alta cosmética con técnicas de masaje únicas.",
        "hero.btnTreatments": "Ver Tratamientos",
        "hero.btnBook": "Reservar Cita",

        "privacy.tag": "Tu Privacidad Es Nuestra Prioridad",
        "privacy.title": "Máxima Privacidad, Intimidad y Confort",
        "privacy.desc": "Un centro de estética en L'Eliana concebido para ser un refugio íntimo: reservado, pacífico y diseñado para tu relajación plena sin interrupciones.",

        "services.tag": "Nuestros Tratamientos Destacados",
        "services.title": "Experiencias de Belleza & Bienestar",
        "services.facialTitle": "Facial Renovador Profundo",
        "services.facialDesc": "Higiene facial avanzada, hidratación intensiva y luminosidad inmediata ajustada a tu tipo de piel.",
        "services.bodyTitle": "Maderoterapia & Remodelación",
        "services.bodyDesc": "Técnica holística reafirmante y drenante para moldear la figura y aliviar tensiones profundas.",
        "services.nailsTitle": "Manicura & Pedicura Spa",
        "services.nailsDesc": "Cuidado delicado de uñas y cutículas con esmaltado duradero y exfoliación nutritiva.",
        "services.massageTitle": "Masajes & Rituales Holísticos",
        "services.massageDesc": "Desconexión total mediante masajes relajantes con aceites esenciales orgánicos en cabina individual.",
        "services.viewAll": "Ver Todos los Tratamientos",

        "gallery.tag": "Instalaciones Privadas en L'Eliana",
        "gallery.title": "Galería & Instalaciones en L'Eliana",
        "gallery.desc": "Descubre el ambiente íntimo y sereno de nuestras cabinas individuales en L'Eliana, concebidas para garantizar tu máxima privacidad, confort y resultados de belleza excepcionales.",
        "gallery.filterAll": "Todos",
        "gallery.filterFacial": "Facial",
        "gallery.filterBody": "Bienestar & Masajes",
        "gallery.filterNails": "Manicura & Uñas",
        "gallery.filterCenter": "El Centro",

        "contact.tag": "Reserva Tu Cita",
        "contact.title": "Contacto & Ubicación",
        "contact.desc": "Pide tu cita por teléfono, WhatsApp o rellenando el siguiente formulario. Te responderemos rápidamente.",
        "contact.nameLabel": "Nombre completo",
        "contact.phoneLabel": "Teléfono de contacto",
        "contact.serviceLabel": "Tratamiento de interés",
        "contact.messageLabel": "Mensaje o preferencia de horario",
        "contact.sendBtn": "Enviar Solicitud"
    },

    va: {
        "nav.home": "Inici",
        "nav.treatments": "Tractaments",
        "nav.gallery": "Galeria",
        "nav.appointment": "Cita",
        "header.mode": "Mode",

        "footer.description": "Espai dedicat a la cura conscient de la pell, manicures prèmium i rituals de benestar per a realçar la teua llum pròpia.",
        "footer.ownerLabel": "Propietària i Esteticista:",
        "footer.linksTitle": "Enllaços",
        "footer.hoursTitle": "Horaris",
        "footer.monFri": "Dilluns - Divendres",
        "footer.saturday": "Dissabtes",
        "footer.sunday": "Diumenges",
        "footer.closed": "Tancat",
        "footer.contactTitle": "Contacte",
        "footer.rights": "Tots els drets reservats.",
        "footer.tagline": "Estètica i Benestar",
        "footer.language": "Idioma:",

        "hero.subtitle": "Centre d'Estètica a L'Eliana",
        "hero.h1": "Centre d'Estètica a L'Eliana",
        "hero.lead": "El teu santuari d'estètica i benestar a L'Eliana concebut per a la teua <strong>màxima privacitat, confort i desconnexió absoluta</strong>. Gaudeix d'una atenció 100% exclusiva en cabines individuals a porta tancada, combinant alta cosmètica amb tècniques de massatge úniques.",
        "hero.btnTreatments": "Veure Tractaments",
        "hero.btnBook": "Reservar Cita",

        "privacy.tag": "La Teua Privacitat És La Nostra Prioritat",
        "privacy.title": "Màxima Privacitat, Intimitat i Confort",
        "privacy.desc": "Un centre d'estètica a L'Eliana concebut per a ser un refugi íntim: reservat, pacífic i dissenyat per a la teua relaxació plena sense interrupcions.",

        "services.tag": "Els Nostres Tractaments Destacats",
        "services.title": "Experiències de Bellesa i Benestar",
        "services.facialTitle": "Facial Renovador Profund",
        "services.facialDesc": "Higiene facial avançada, hidratació intensiva i lluminositat immediata adaptada al teu tipus de pell.",
        "services.bodyTitle": "Maderoteràpia i Remodelació",
        "services.bodyDesc": "Tècnica holística fermant i drenant per a moldre la figura i alleujar tensions profundes.",
        "services.nailsTitle": "Manicura i Pedicura Spa",
        "services.nailsDesc": "Cura delicada d'ungles i cutícules amb esmaltat durador i exfoliació nutritiva.",
        "services.massageTitle": "Massatges i Rituals Holístics",
        "services.massageDesc": "Desconnexió total mitjançant massatges relaxants amb olis essencials orgànics en cabina individual.",
        "services.viewAll": "Veure Tots els Tractaments",

        "gallery.tag": "Instal·lacions Privades a L'Eliana",
        "gallery.title": "Galeria i Instal·lacions a L'Eliana",
        "gallery.desc": "Descobreix l'ambient íntim i serè de les nostres cabines individuals a L'Eliana, concebudes per a garantir la teua màxima privacitat, confort i resultats de bellesa excepcionals.",
        "gallery.filterAll": "Tots",
        "gallery.filterFacial": "Facial",
        "gallery.filterBody": "Benestar i Massatges",
        "gallery.filterNails": "Manicura i Ungles",
        "gallery.filterCenter": "El Centre",

        "contact.tag": "Reserva La Teua Cita",
        "contact.title": "Contacte i Ubicació",
        "contact.desc": "Demana la teua cita per telèfon, WhatsApp o emplenant el següent formulari. Et respondrem ràpidament.",
        "contact.nameLabel": "Nom complet",
        "contact.phoneLabel": "Telèfon de contacte",
        "contact.serviceLabel": "Tractament d'interès",
        "contact.messageLabel": "Missatge o preferència d'horari",
        "contact.sendBtn": "Enviar Sol·licitud"
    },

    en: {
        "nav.home": "Home",
        "nav.treatments": "Treatments",
        "nav.gallery": "Gallery",
        "nav.appointment": "Book Now",
        "header.mode": "Theme",

        "footer.description": "A sanctuary dedicated to conscious skincare, premium manicures, and wellness rituals to highlight your natural glow.",
        "footer.ownerLabel": "Owner & Esthetician:",
        "footer.linksTitle": "Quick Links",
        "footer.hoursTitle": "Opening Hours",
        "footer.monFri": "Monday - Friday",
        "footer.saturday": "Saturdays",
        "footer.sunday": "Sundays",
        "footer.closed": "Closed",
        "footer.contactTitle": "Contact Us",
        "footer.rights": "All rights reserved.",
        "footer.tagline": "Aesthetics & Wellness",
        "footer.language": "Language:",

        "hero.subtitle": "Aesthetics Center in L'Eliana",
        "hero.h1": "Aesthetics Center in L'Eliana",
        "hero.lead": "Your sanctuary of beauty and wellness in L'Eliana designed for your <strong>maximum privacy, comfort, and ultimate relaxation</strong>. Enjoy 100% exclusive care in private individual treatment rooms, combining high-end cosmetics with signature massage techniques.",
        "hero.btnTreatments": "Explore Treatments",
        "hero.btnBook": "Book an Appointment",

        "privacy.tag": "Your Privacy Is Our Priority",
        "privacy.title": "Maximum Privacy, Intimacy & Comfort",
        "privacy.desc": "An aesthetic boutique center in L'Eliana crafted to be an intimate sanctuary: peaceful, private, and tailored for your total relaxation without interruptions.",

        "services.tag": "Featured Treatments",
        "services.title": "Beauty & Wellness Experiences",
        "services.facialTitle": "Deep Renewal Facial",
        "services.facialDesc": "Advanced facial cleansing, intensive hydration, and instant glow customized for your skin type.",
        "services.bodyTitle": "Wood Therapy & Body Sculpting",
        "services.bodyDesc": "Holistic firming and lymphatic drainage technique to sculpt your body and relieve deep muscle tension.",
        "services.nailsTitle": "Spa Manicure & Pedicure",
        "services.nailsDesc": "Delicate care for nails and cuticles with long-lasting polish and nourishing exfoliation.",
        "services.massageTitle": "Holistic Massages & Rituals",
        "services.massageDesc": "Pure relaxation through signature massages with organic essential oils in a private treatment room.",
        "services.viewAll": "View All Treatments",

        "gallery.tag": "Private Facilities in L'Eliana",
        "gallery.title": "Gallery & Facilities in L'Eliana",
        "gallery.desc": "Discover the intimate and serene ambience of our private individual treatment rooms in L'Eliana, created for your comfort and exceptional results.",
        "gallery.filterAll": "All",
        "gallery.filterFacial": "Facials",
        "gallery.filterBody": "Wellness & Massages",
        "gallery.filterNails": "Manicures & Nails",
        "gallery.filterCenter": "The Center",

        "contact.tag": "Book Your Appointment",
        "contact.title": "Contact & Location",
        "contact.desc": "Schedule your session by phone, WhatsApp, or by submitting the contact form below.",
        "contact.nameLabel": "Full Name",
        "contact.phoneLabel": "Phone Number",
        "contact.serviceLabel": "Treatment of Interest",
        "contact.messageLabel": "Message or Preferred Schedule",
        "contact.sendBtn": "Submit Request"
    }
};

class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferred_lang') || 'es';
        if (!['es', 'va', 'en'].includes(this.currentLang)) {
            this.currentLang = 'es';
        }
    }

    init() {
        this.setLanguage(this.currentLang, false);
        this.bindEvents();
    }

    get(key, lang = this.currentLang) {
        return translations[lang]?.[key] || translations['es']?.[key] || key;
    }

    setLanguage(lang, save = true) {
        if (!translations[lang]) return;
        this.currentLang = lang;
        if (save) {
            localStorage.setItem('preferred_lang', lang);
        }

        // Update html lang tag
        const langMap = { es: 'es', va: 'ca', en: 'en' };
        document.documentElement.lang = langMap[lang] || 'es';

        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.get(key, lang);
            if (translation) {
                // If element has HTML tags in translation and original contained HTML
                if (translation.includes('<') && translation.includes('>')) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Update UI controls
        this.updateUIControls();
    }

    updateUIControls() {
        const langLabel = document.getElementById('currentLangLabel');
        if (langLabel) {
            langLabel.textContent = this.currentLang.toUpperCase();
        }

        // Header options
        document.querySelectorAll('.lang-option-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Footer buttons
        document.querySelectorAll('.footer-lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    bindEvents() {
        // Dropdown toggle
        const toggleBtn = document.getElementById('langToggleBtn');
        const dropdownMenu = document.getElementById('langDropdownMenu');

        if (toggleBtn && dropdownMenu) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = dropdownMenu.classList.contains('show');
                if (isOpen) {
                    dropdownMenu.classList.remove('show');
                    toggleBtn.setAttribute('aria-expanded', 'false');
                } else {
                    dropdownMenu.classList.add('show');
                    toggleBtn.setAttribute('aria-expanded', 'true');
                }
            });

            document.addEventListener('click', (e) => {
                if (!toggleBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    dropdownMenu.classList.remove('show');
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // Header option buttons
        document.addEventListener('click', (e) => {
            const langBtn = e.target.closest('[data-lang]');
            if (langBtn) {
                const lang = langBtn.getAttribute('data-lang');
                if (lang) {
                    this.setLanguage(lang);
                    if (dropdownMenu) {
                        dropdownMenu.classList.remove('show');
                    }
                }
            }
        });
    }
}

window.i18n = new I18nManager();
