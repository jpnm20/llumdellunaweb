/* js/i18n.js - Llum de Lluna i18n Translation Engine */

const translations = {
    es: {
        // Navigation & Header
        "nav.home": "Inicio",
        "nav.treatments": "Tratamientos",
        "nav.gallery": "Galería",
        "nav.appointment": "Cita",
        "nav.contact": "Contacto & Reservas",
        "header.mode": "Modo",
        "header.modeDark": "Modo Oscuro",
        "header.modeLight": "Modo Claro",

        // Footer
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

        // Hero Section (Home)
        "hero.subtitle": "Centro de Estética en L'Eliana",
        "hero.h1": "Centro de Estética en L'Eliana",
        "hero.lead": "Tu santuario de estética y bienestar en L'Eliana concebido para tu <strong>máxima privacidad, confort y desconexión absoluta</strong>. Disfruta de una atención 100% exclusiva en cabinas individuales a puerta cerrada, combinando alta cosmética con técnicas de masaje únicas.",
        "hero.btnTreatments": "Ver Tratamientos",
        "hero.btnBook": "Reservar Cita",

        // Privacy Section (Home)
        "privacy.tag": "Tu Privacidad Es Nuestra Prioridad",
        "privacy.title": "Máxima Privacidad, Intimidad y Confort",
        "privacy.desc": "Un centro de estética en L'Eliana concebido para ser un refugio íntimo: reservado, pacífico y diseñado para tu relajación plena sin interrupciones.",
        "privacy.p1Title": "Cabinas Privadas Individuales",
        "privacy.p1Desc": "Tratamientos a puerta cerrada con total confidencialidad. Garantizamos tu intimidad absoluta y cero interrupciones mientras cuidamos de ti.",
        "privacy.p2Title": "Ambiente de Calma & Relax",
        "privacy.p2Desc": "Un espacio silencioso y acogedor en L'Eliana con música tenue y aromaterapia donde el estrés cotidiano se detiene.",
        "privacy.p3Title": "Atención Exclusiva 1 a 1",
        "privacy.p3Desc": "Sin aglomeraciones ni prisas. Cada cita está programada holgadamente para dedicarte el 100% de nuestra atención en exclusiva.",
        "privacy.p4Title": "Alta Cosmética Premium",
        "privacy.p4Desc": "Firmas de alta gama respetuosas con tu piel y el planeta, combinando tecnología de vanguardia y manos expertas.",

        // About Section (Home)
        "about.subtitle": "Llum de Lluna",
        "about.title": "Un refugio de armonía y privacidad creado para ti en L'Eliana",
        "about.p1": "Nuestra filosofía nace del respeto profundo por tu cuerpo, tu intimidad y tu bienestar. Concebimos Llum de Lluna como un santuario privado de estética en L'Eliana donde no existen los ruidos ni las prisas del exterior.",
        "about.p2": "En cada sesión te recibimos en un entorno individual a puerta cerrada, garantizando que tu privacidad sea absoluta. Trabajamos exclusivamente con firmas cosméticas de alta gama, combinando técnicas avanzadas para lograr resultados visibles en un clima de tranquilidad inigualable.",
        "about.btn": "Reservar tu momento de relax",

        // Star Services Section (Home)
        "services.featuredTag": "Servicios Estrella",
        "services.featuredTitle": "Experiencias Destacadas",
        "services.featuredDesc": "Hemos diseñado una selección de nuestros tratamientos más queridos, ideales para regalarte ese mimo que tanto te mereces.",
        "services.tagFacial": "Facial",
        "services.facialTitleHome": "Ritual Facial Renovador & Nutritivo Profundo",
        "services.facialDescHome": "Tratamiento facial integral de 60 minutos con limpieza profunda, exfoliación, desincrustante, extracción, principio activo concentrado, masaje facial y mascarilla geloide.",
        "services.tagNails": "Pedicura",
        "services.pedicuraTitleHome": "Pedicura Spa Completa",
        "services.pedicuraDescHome": "Ritual integral para el cuidado podal: baño podal, corte y limado de uñas, eliminación de durezas, exfoliación aromática, esmaltado y masaje relajante.",
        "services.tagLaser": "Depilación",
        "services.laserTitleHome": "Fotodepilación IPL / Láser",
        "services.laserDescHome": "Fotodepilación de alta precisión y suavidad para la eliminación duradera del vello en zonas faciales y corporales con tarifas y packs personalizados.",
        "services.learnMore": "Saber más",

        // Contact Section (Home)
        "contact.tag": "Reserva tu cita",
        "contact.title": "¿Hablamos?",
        "contact.desc": "Déjanos tus datos o escríbenos directamente por WhatsApp. Estaremos encantados de agendar tu próxima sesión de mimos.",
        "contact.formHeader": "Escríbenos",
        "contact.nameLabel": "Nombre Completo",
        "contact.namePlaceholder": "Ej. Sofía Martín",
        "contact.phoneLabel": "Teléfono de Contacto",
        "contact.phonePlaceholder": "Tu número de teléfono",
        "contact.serviceLabel": "Tratamiento de Interés",
        "contact.selectOption": "Selecciona una opción...",
        "contact.optionFacial": "Rituales Faciales",
        "contact.optionBody": "Masajes y Corporales (Maderoterapia)",
        "contact.optionNails": "Manicura y Pedicura",
        "contact.optionDepilation": "Depilación Cera / IPL",
        "contact.optionOther": "Otros Servicios / Consulta General",
        "contact.messageLabel": "Mensaje o preferencia horaria",
        "contact.messagePlaceholder": "Dinos qué día/hora te vendría mejor o resolver cualquier consulta...",
        "contact.sendBtn": "Enviar Solicitud",
        "contact.sendingBtn": "Enviando solicitud...",
        "contact.successToast": "¡Gracias {name}! Tu solicitud ha sido enviada con éxito. Te contactaremos pronto.",
        "contact.errorToast": "Ocurrió un error al enviar la solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.",
        "contact.networkErrorToast": "No se pudo enviar el mensaje. Comprueba tu conexión o contáctanos por teléfono.",
        "contact.infoTitle": "Contacto & Horarios",
        "contact.phoneTitle": "Móvil & WhatsApp:",

        // Treatments Page
        "treatments.pageTag": "Carta de Servicios en L'Eliana",
        "treatments.pageTitle": "Tratamientos Estéticos & Tarifas en L'Eliana",
        "treatments.pageDesc": "Ofrecemos soluciones personalizadas y rituales de estética en cabinas de máxima privacidad en L'Eliana. Pulsa sobre cada categoría para desplegar la descripción detallada de tratamientos y precios.",
        
        "treatments.filterAll": "Todos",
        "treatments.filterFacial": "Facial",
        "treatments.filterBody": "Bienestar & Corporal",
        "treatments.filterNails": "Manicura & Pedicura",
        "treatments.filterWax": "Depilación Cera",
        "treatments.filterIPL": "Depilación IPL",

        "treatments.groupFacial": "Tratamientos Faciales",
        "treatments.groupBody": "Tratamientos Corporales & Maderoterapia",
        "treatments.groupNails": "Manicura & Pedicura",
        "treatments.groupWax": "Depilación a la Cera",
        "treatments.groupIPL": "Fotodepilación IPL (Luz Pulsada)",

        "treatments.subManicure": "Manicura",
        "treatments.subPedicure": "Pedicura",
        "treatments.subWaxWomen": "Depilación Cera Mujer",
        "treatments.subWaxMen": "Depilación Cera Hombre",
        "treatments.subIPLWomen": "Zonas IPL Mujer (Por Sesión)",
        "treatments.subIPLWomenPacks": "Packs Combinados IPL Mujer",
        "treatments.subIPLMen": "Zonas IPL Hombre (Por Sesión)",
        "treatments.subIPLMenPacks": "Packs Combinados IPL Hombre",

        "treatments.badgeSession1": "1ª Sesión",
        "treatments.badgeSession2": "A partir de 2ª sesión",
        "treatments.fromPrice": "Desde {price}",
        "treatments.perNail": "{price} / uña",

        "t.facial1.name": "Ritual Facial Renovador & Nutritivo Profundo",
        "t.facial1.desc": "Tratamiento facial integral de 60 minutos: limpieza profunda, exfoliación, solución desincrustante, extracción (depilación opcional) y principio activo concentrado tras valoración estética. Incluye crema hidratante con masaje facial, mascarilla geloide oclusiva, masaje en zona cervical, pecho y brazos, protector solar y bálsamo labial.",

        "t.body1.name": "Valoración Inicial + Maderoterapia Corporal Integral",
        "t.body1.desc": "Diagnóstico estético personalizado seguido de una completa sesión de maderoterapia corporal en brazos, abdomen, espalda, glúteos y piernas para evaluar y activar el sistema circulatorio y linfático.",
        "t.body2.name": "Maderoterapia Corporal Reductora Focalizada",
        "t.body2.desc": "Tratamiento remodelante personalizado centrado en las zonas corporales clave detectadas en la valoración inicial. Diseñado para atenuar la celulitis, suavizar la piel de naranja, reducir cúmulos grasos y drenar toxinas. *(El precio varía según las partes corporales tratadas)*.",

        "t.mani1.name": "Manicura Natural Básica (Sin esmaltado)",
        "t.mani1.desc": "Limpieza y pulido de cutículas, limado y conformado de uñas con nutrición e hidratación.",
        "t.mani2.name": "Manicura Semipermanente (Sin refuerzo)",
        "t.mani2.desc": "Preparación de uña natural, acondicionamiento de cutículas y esmaltado semipermanente de alta duración.",
        "t.mani3.name": "Manicura Semipermanente con Refuerzo de Grafeno",
        "t.mani3.desc": "Manicura semipermanente avanzada con capa estructural de grafeno para aportar nivelado, flexibilidad y resistencia extrema a la uña.",
        "t.mani4.name": "Manicura Esculpida en Gel (Puesta Nueva) - Talla S",
        "t.mani4.desc": "Extensión y modelado estructural en gel de alta calidad para uñas cortas (Talla S).",
        "t.mani5.name": "Manicura Esculpida en Gel (Puesta Nueva) - Talla M",
        "t.mani5.desc": "Extensión y modelado estructural en gel de alta calidad para uñas de longitud media (Talla M).",
        "t.mani6.name": "Manicura Esculpida en Gel (Puesta Nueva) - Talla L",
        "t.mani6.desc": "Extensión y modelado estructural en gel de alta calidad para uñas de longitud larga (Talla L).",
        "t.mani7.name": "Suplemento: Reconstrucción de Uña con Poligel (Manos)",
        "t.mani7.desc": "Reparación estructural de uña dañada o rota en manos con poligel *(añadido a un servicio principal)*.",

        "t.pedi1.name": "Pedicura Exfoliante en Seco",
        "t.pedi1.desc": "Trabajo minucioso de cutículas, limado y conformado de uñas sin inmersión previa, finalizado con nutrición e hidratación profunda en uñas y pies.",
        "t.pedi2.name": "Pedicura Nutritiva con Remojo y Exfoliación (Sin esmaltar)",
        "t.pedi2.desc": "Baño relajante de pies, pulido de durezas, exfoliación profunda de arrastre de células muertas, trabajo de cutículas y uñas con nutrición e hidratación profunda en uñas y pies.",
        "t.pedi3.name": "Pedicura Spa Completa",
        "t.pedi3.desc": "Ritual integral para el cuidado podal: baño podal, corte y limado de uñas, eliminación de durezas, exfoliación aromática, esmaltado y masaje relajante.",
        "t.pedi4.name": "Extra / Suplemento: Retirado & Pedicura Básica Express",
        "t.pedi4.desc": "Retirado rápido de esmalte anterior y acondicionamiento básico express de uñas.",
        "t.pedi5.name": "Suplemento: Reconstrucción de Uña con Poligel (Pies)",
        "t.pedi5.desc": "Reconstrucción estética y nivelación de uña dañada en pies mediante poligel *(añadido a un servicio principal)*.",

        "t.waxW1.name": "Diseño de Cejas (Cera + Pinzas)",
        "t.waxW2.name": "Labio Superior",
        "t.waxW3.name": "Nariz",
        "t.waxW4.name": "Axilas",
        "t.waxW5.name": "Brazos",
        "t.waxW6.name": "Ingles",
        "t.waxW7.name": "Ingles Completa",
        "t.waxW8.name": "Medias Piernas",
        "t.waxW9.name": "Piernas Enteras",

        "t.waxM1.name": "Axilas",
        "t.waxM2.name": "Pecho o Lumbares",
        "t.waxM3.name": "Abdomen",
        "t.waxM4.name": "Espalda y Hombros",
        "t.waxM5.name": "Medias Piernas",
        "t.waxM6.name": "Piernas Enteras",

        "t.iplW1.name": "Labio",
        "t.iplW2.name": "Mentón",
        "t.iplW3.name": "Línea Alba",
        "t.iplW4.name": "Axilas",
        "t.iplW5.name": "Ingles",
        "t.iplW6.name": "Pubis / Intraglúteos",
        "t.iplW7.name": "Brazos",
        "t.iplW8.name": "Espalda",
        "t.iplW9.name": "Muslos",
        "t.iplW10.name": "Glúteos + Intraglúteos",
        "t.iplW11.name": "Medias Piernas",
        "t.iplW12.name": "Piernas Enteras",

        "t.iplWP1.name": "Pack Axilas + Ingles + Piernas Enteras",
        "t.iplWP1.desc": "Tratamiento de fotodepilación combinada en axilas, ingles y piernas enteras.",
        "t.iplWP2.name": "Pack Axilas + Ingles + Brazos",
        "t.iplWP2.desc": "Fotodepilación rápida y efectiva en axilas, ingles y brazos completos.",
        "t.iplWP3.name": "Pack Brazos + Piernas Enteras",
        "t.iplWP3.desc": "Sesión combinada para la eliminación progresiva del vello en extremidades superiores e inferiores.",
        "t.iplWP4.name": "Pack Cuerpo Entero Mujer",
        "t.iplWP4.desc": "Tratamiento integral de fotodepilación corporal en todas las zonas requeridas.",

        "t.iplM1.name": "Axilas",
        "t.iplM2.name": "Pecho",
        "t.iplM3.name": "Abdomen",
        "t.iplM4.name": "Brazos",
        "t.iplM5.name": "Espalda",
        "t.iplM6.name": "Medias Piernas",
        "t.iplM7.name": "Piernas Enteras",

        "t.iplMP1.name": "Pack Pecho + Abdomen + Brazos",
        "t.iplMP1.desc": "Tratamiento masculino completo de torso superior y brazos.",
        "t.iplMP2.name": "Pack Pecho + Espalda + Brazos",
        "t.iplMP2.desc": "Fotodepilación masculina integral para el área superior del torso, espalda y brazos.",
        "t.iplMP3.name": "Pack Pecho + Abdomen + Espalda + Brazos",
        "t.iplMP3.desc": "Tratamiento integral combinado de torso completo, espalda y brazos.",
        "t.iplMP4.name": "Pack Cuerpo Entero Hombre",
        "t.iplMP4.desc": "Combinación integral de todas las zonas masculinas anteriores (axilas, pecho, abdomen, espalda, brazos y piernas).",

        "treatments.noteTitle": "¿Tienes dudas sobre algún tratamiento?",
        "treatments.noteDesc": "Si tienes cualquier duda acerca de un tratamiento o necesitas orientación para elegir el más adecuado, puedes contactar con nosotros sin compromiso.",
        "treatments.noteBtn": "Contactar con Nosotros",

        // Gallery Page
        "gallery.tag": "Instalaciones Privadas en L'Eliana",
        "gallery.title": "Galería & Instalaciones en L'Eliana",
        "gallery.desc": "Descubre el ambiente íntimo y sereno de nuestras cabinas individuales en L'Eliana, concebidas para garantizar tu máxima privacidad, confort y resultados de belleza excepcionales.",
        "gallery.filterAll": "Todos",
        "gallery.filterFacial": "Facial",
        "gallery.filterBody": "Bienestar & Masajes",
        "gallery.filterNails": "Manicura & Uñas",
        "gallery.filterCenter": "El Centro",

        "gallery.card1Title": "Zona de Espera & Recepción",
        "gallery.card1Category": "El Centro",
        "gallery.card2Title": "Pedicura Spa Completa",
        "gallery.card2Category": "Manicura & Pedicura",
        "gallery.card3Title": "Fotodepilación IPL / Láser",
        "gallery.card3Category": "Depilación & Corporal",
        "gallery.card4Title": "Ritual Facial Renovador",
        "gallery.card4Category": "Tratamiento Facial",

        "gallery.ctaSubtitle": "¿Te gustaría vivir la experiencia?",
        "gallery.ctaTitle": "Reserva tu momento de desconexión",
        "gallery.ctaDesc": "Te esperamos en nuestro centro en L'Eliana (Valencia) para brindarte una atención cuidada y 100% personalizada.",
        "gallery.ctaBtn": "Solicitar Cita Ahora"
    },

    va: {
        // Navigation & Header
        "nav.home": "Inici",
        "nav.treatments": "Tractaments",
        "nav.gallery": "Galeria",
        "nav.appointment": "Cita",
        "nav.contact": "Contacte i Reserves",
        "header.mode": "Mode",
        "header.modeDark": "Mode Fosc",
        "header.modeLight": "Mode Clar",

        // Footer
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

        // Hero Section (Home)
        "hero.subtitle": "Centre d'Estètica a L'Eliana",
        "hero.h1": "Centre d'Estètica a L'Eliana",
        "hero.lead": "El teu santuari d'estètica i benestar a L'Eliana concebut per a la teua <strong>màxima privacitat, confort i desconnexió absoluta</strong>. Gaudeix d'una atenció 100% exclusiva en cabines individuals a porta tancada, combinant alta cosmètica amb tècniques de massatge úniques.",
        "hero.btnTreatments": "Veure Tractaments",
        "hero.btnBook": "Reservar Cita",

        // Privacy Section (Home)
        "privacy.tag": "La Teua Privacitat És La Nostra Prioritat",
        "privacy.title": "Màxima Privacitat, Intimitat i Confort",
        "privacy.desc": "Un centre d'estètica a L'Eliana concebut per a ser un refugi íntim: reservat, pacífic i dissenyat per a la teua relaxació plena sense interrupcions.",
        "privacy.p1Title": "Cabines Privades Individuals",
        "privacy.p1Desc": "Tractaments a porta tancada amb total confidencialitat. Garantim la teua intimitat absoluta i zero interrupcions mentre cuidem de tu.",
        "privacy.p2Title": "Ambient de Calma i Relax",
        "privacy.p2Desc": "Un espai silenciós i acollidor a L'Eliana amb música suau i aromateràpia on l'estrés quotidià s'atura.",
        "privacy.p3Title": "Atenció Exclusiva 1 a 1",
        "privacy.p3Desc": "Sense aglomeracions ni presses. Cada cita està programada amplament per a dedicar-te el 100% de la nostra atenció en exclusiva.",
        "privacy.p4Title": "Alta Cosmètica Prèmium",
        "privacy.p4Desc": "Marques d'alta gamma respectuoses amb la teua pell i el planeta, combinant tecnologia d'avantguarda i mans expertes.",

        // About Section (Home)
        "about.subtitle": "Llum de Lluna",
        "about.title": "Un refugi d'harmonia i privacitat creat per a tu a L'Eliana",
        "about.p1": "La nostra filosofia neix del respecte profund pel teu cos, la teua intimitat i el teu benestar. Concebem Llum de Lluna com un santuari privat d'estètica a L'Eliana on no existeixen els sorolls ni les presses de l'exterior.",
        "about.p2": "En cada sessió et rebem en un entorn individual a porta tancada, garantint que la teua privacitat siga absoluta. Treballem exclusivament amb marques cosmètiques d'alta gamma, combinant tècniques avançades per a aconseguir resultats visibles en un clima de tranquil·litat inigualable.",
        "about.btn": "Reservar el teu moment de relax",

        // Star Services Section (Home)
        "services.featuredTag": "Serveis Estrella",
        "services.featuredTitle": "Experiències Destacades",
        "services.featuredDesc": "Haver dissenyat una selecció dels nostres tractaments més estimats, ideals per a regalar-te eixa cura que tant et mereixes.",
        "services.tagFacial": "Facial",
        "services.facialTitleHome": "Ritual Facial Renovador i Nutritiu Profund",
        "services.facialDescHome": "Tractament facial integral de 60 minuts amb neteja profunda, exfoliació, desincrustant, extracció, principi actiu concentrat, massatge facial i mascareta geloide.",
        "services.tagNails": "Pedicura",
        "services.pedicuraTitleHome": "Pedicura Spa Completa",
        "services.pedicuraDescHome": "Ritual integral per a la cura podal: bany podal, tall i llimat d'ungles, eliminació de dureses, exfoliació aromàtica, esmaltat i massatge relaxant.",
        "services.tagLaser": "Depilació",
        "services.laserTitleHome": "Fotodepilació IPL / Làser",
        "services.laserDescHome": "Fotodepilació d'alta precisió i suavitat per a l'eliminació duradora del pèl en zones facials i corporals amb tarifes i packs personalitzats.",
        "services.learnMore": "Saber més",

        // Contact Section (Home)
        "contact.tag": "Reserva la teua cita",
        "contact.title": "Parlem?",
        "contact.desc": "Deixa'ns les teues dades o escriu-nos directament per WhatsApp. Estarem encantats d'agendar la teua pròxima sessió de mims.",
        "contact.formHeader": "Escriu-nos",
        "contact.nameLabel": "Nom Complet",
        "contact.namePlaceholder": "Ex. Sofia Martín",
        "contact.phoneLabel": "Telèfon de Contacte",
        "contact.phonePlaceholder": "El teu número de telèfon",
        "contact.serviceLabel": "Tractament d'Interés",
        "contact.selectOption": "Selecciona una opció...",
        "contact.optionFacial": "Rituals Facials",
        "contact.optionBody": "Massatges i Corporals (Maderoteràpia)",
        "contact.optionNails": "Manicura i Pedicura",
        "contact.optionDepilation": "Depilació Cera / IPL",
        "contact.optionOther": "Altres Serveis / Consulta General",
        "contact.messageLabel": "Missatge o preferència d'horari",
        "contact.messagePlaceholder": "Diga'ns quin dia/hora et vindria millor o qualsevol consulta...",
        "contact.sendBtn": "Enviar Sol·licitud",
        "contact.sendingBtn": "Enviant sol·licitud...",
        "contact.successToast": "Gràcies {name}! La teua sol·licitud ha sigut enviada amb èxit. Et contactarem prompte.",
        "contact.errorToast": "Hi ha hagut un error en enviar la sol·licitud. Intenta-ho de nou o escriu-nos per WhatsApp.",
        "contact.networkErrorToast": "No s'ha pogut enviar el missatge. Comprova la teua connexió o contacta per telèfon.",
        "contact.infoTitle": "Contacte i Horaris",
        "contact.phoneTitle": "Mòbil i WhatsApp:",

        // Treatments Page
        "treatments.pageTag": "Carta de Serveis a L'Eliana",
        "treatments.pageTitle": "Tractaments Estètics i Tarifes a L'Eliana",
        "treatments.pageDesc": "Oferim solucions personalitzades i rituals d'estètica en cabines de màxima privacitat a L'Eliana. Prem sobre cada categoria per a desplegar la descripció detallada de tractaments i preus.",
        
        "treatments.filterAll": "Tots",
        "treatments.filterFacial": "Facial",
        "treatments.filterBody": "Benestar i Corporal",
        "treatments.filterNails": "Manicura i Pedicura",
        "treatments.filterWax": "Depilació Cera",
        "treatments.filterIPL": "Depilació IPL",

        "treatments.groupFacial": "Tractaments Facials",
        "treatments.groupBody": "Tractaments Corporals i Maderoteràpia",
        "treatments.groupNails": "Manicura i Pedicura",
        "treatments.groupWax": "Depilació a la Cera",
        "treatments.groupIPL": "Fotodepilació IPL (Llum Pulsada)",

        "treatments.subManicure": "Manicura",
        "treatments.subPedicure": "Pedicura",
        "treatments.subWaxWomen": "Depilació Cera Dona",
        "treatments.subWaxMen": "Depilació Cera Home",
        "treatments.subIPLWomen": "Zones IPL Dona (Per Sessió)",
        "treatments.subIPLWomenPacks": "Packs Combinats IPL Dona",
        "treatments.subIPLMen": "Zones IPL Home (Per Sessió)",
        "treatments.subIPLMenPacks": "Packs Combinats IPL Home",

        "treatments.badgeSession1": "1a Sessió",
        "treatments.badgeSession2": "A partir de 2a sessió",
        "treatments.fromPrice": "Des de {price}",
        "treatments.perNail": "{price} / ungla",

        "t.facial1.name": "Ritual Facial Renovador i Nutritiu Profund",
        "t.facial1.desc": "Tractament facial integral de 60 minuts: neteja profunda, exfoliació, solució desincrustant, extracció (depilació opcional) i principi actiu concentrat després de valoració estètica. Inclou crema hidratant amb massatge facial, mascareta geloide oclusiva, massatge en zona cervical, pit i braços, protector solar i bàlsam labial.",

        "t.body1.name": "Valoració Inicial + Maderoteràpia Corporal Integral",
        "t.body1.desc": "Diagnòstic estètic personalitzat seguit d'una completa sessió de maderoteràpia corporal en braços, abdomen, esquena, glútis i cames per a avaluar i activar el sistema circulatori i limfàtic.",
        "t.body2.name": "Maderoteràpia Corporal Reductores Focalitzada",
        "t.body2.desc": "Tractament remodelant personalitzat centrat en les zones corporals clau detectades en la valoració inicial. Dissenyat per a atenuar la cel·lulitis, suavitzar la pell de taronja, reduir cúmuls grassos i drenar toxines. *(El preu varia segons les parts corporals tractades)*.",

        "t.mani1.name": "Manicura Natural Bàsica (Sense esmaltat)",
        "t.mani1.desc": "Neteja i poliment de cutícules, llimat i conformat d'ungles amb nutrició i hidratació.",
        "t.mani2.name": "Manicura Semipermanent (Sense reforç)",
        "t.mani2.desc": "Preparació d'ungla natural, acondicionament de cutícules i esmaltat semipermanent d'alta durada.",
        "t.mani3.name": "Manicura Semipermanent amb Reforç de Grafè",
        "t.mani3.desc": "Manicura semipermanent avançada amb capa estructural de grafè per a aportar nivellat, flexibilitat i resistència extrema a l'ungla.",
        "t.mani4.name": "Manicura Esculpida en Gel (Nova Posa) - Talla S",
        "t.mani4.desc": "Extensió i modelat estructural en gel d'alta qualitat per a ungles curtes (Talla S).",
        "t.mani5.name": "Manicura Esculpida en Gel (Nova Posa) - Talla M",
        "t.mani5.desc": "Extensió i modelat estructural en gel d'alta qualitat per a ungles de longitud mitjana (Talla M).",
        "t.mani6.name": "Manicura Esculpida en Gel (Nova Posa) - Talla L",
        "t.mani6.desc": "Extensió i modelat estructural en gel d'alta qualitat per a ungles de longitud llarga (Talla L).",
        "t.mani7.name": "Suplement: Reconstrucció d'Ungla amb Poligel (Mans)",
        "t.mani7.desc": "Reparació estructural d'ungla danyada o trencada en mans amb poligel *(afegit a un servei principal)*.",

        "t.pedi1.name": "Pedicura Exfoliant en Sec",
        "t.pedi1.desc": "Treball minuciós de cutícules, llimat i conformat d'ungles sense immersió prèvia, finalitzat amb nutrició i hidratació profunda en ungles i peus.",
        "t.pedi2.name": "Pedicura Nutritiva amb Remull i Exfoliació (Sense esmaltar)",
        "t.pedi2.desc": "Bany relaxant de peus, poliment de dureses, exfoliació profunda d'arrossegament de cèl·lules meutes, treball de cutícules i ungles amb nutrició i hidratació profunda.",
        "t.pedi3.name": "Pedicura Spa Completa",
        "t.pedi3.desc": "Ritual integral per a la cura podal: bany podal, tall i llimat d'ungles, eliminació de dureses, exfoliació aromàtica, esmaltat i massatge relaxant.",
        "t.pedi4.name": "Extra / Suplement: Retirat i Pedicura Bàsica Express",
        "t.pedi4.desc": "Retirat ràpid d'esmalt anterior i acondicionament bàsic express d'ungles.",
        "t.pedi5.name": "Suplement: Reconstrucció d'Ungla amb Poligel (Peus)",
        "t.pedi5.desc": "Reconstrucció estètica i nivellat d'ungla danyada en peus mitjançant poligel *(afegit a un servei principal)*.",

        "t.waxW1.name": "Disseny de Celles (Cera + Pinces)",
        "t.waxW2.name": "Labi Superior",
        "t.waxW3.name": "Nas",
        "t.waxW4.name": "Aixelles",
        "t.waxW5.name": "Braços",
        "t.waxW6.name": "Angles",
        "t.waxW7.name": "Angles Completa",
        "t.waxW8.name": "Mitges Cames",
        "t.waxW9.name": "Cames Senceres",

        "t.waxM1.name": "Aixelles",
        "t.waxM2.name": "Pit o Lombars",
        "t.waxM3.name": "Abdomen",
        "t.waxM4.name": "Esquena i Umerals",
        "t.waxM5.name": "Mitges Cames",
        "t.waxM6.name": "Cames Senceres",

        "t.iplW1.name": "Labi",
        "t.iplW2.name": "Mentó",
        "t.iplW3.name": "Línia Alba",
        "t.iplW4.name": "Aixelles",
        "t.iplW5.name": "Angles",
        "t.iplW6.name": "Pubis / Intraglútis",
        "t.iplW7.name": "Braços",
        "t.iplW8.name": "Esquena",
        "t.iplW9.name": "Cuixes",
        "t.iplW10.name": "Glútis + Intraglútis",
        "t.iplW11.name": "Mitges Cames",
        "t.iplW12.name": "Cames Senceres",

        "t.iplWP1.name": "Pack Aixelles + Angles + Cames Senceres",
        "t.iplWP1.desc": "Tractament de fotodepilació combinada en aixelles, angles i cames senceres.",
        "t.iplWP2.name": "Pack Aixelles + Angles + Braços",
        "t.iplWP2.desc": "Fotodepilació ràpida i efectiva en aixelles, angles i braços complets.",
        "t.iplWP3.name": "Pack Braços + Cames Senceres",
        "t.iplWP3.desc": "Sessió combinada per a l'eliminació progressiva del pèl en extremitats superiors i inferiors.",
        "t.iplWP4.name": "Pack Cos Sencer Dona",
        "t.iplWP4.desc": "Tractament integral de fotodepilació corporal en totes les zones requerides.",

        "t.iplM1.name": "Aixelles",
        "t.iplM2.name": "Pit",
        "t.iplM3.name": "Abdomen",
        "t.iplM4.name": "Braços",
        "t.iplM5.name": "Esquena",
        "t.iplM6.name": "Mitges Cames",
        "t.iplM7.name": "Cames Senceres",

        "t.iplMP1.name": "Pack Pit + Abdomen + Braços",
        "t.iplMP1.desc": "Tractament masculí complet de tors superior i braços.",
        "t.iplMP2.name": "Pack Pit + Esquena + Braços",
        "t.iplMP2.desc": "Fotodepilació masculina integral per a l'àrea superior del tors, esquena i braços.",
        "t.iplMP3.name": "Pack Pit + Abdomen + Esquena + Braços",
        "t.iplMP3.desc": "Tractament integral combinat de tors complet, esquena i braços.",
        "t.iplMP4.name": "Pack Cos Sencer Home",
        "t.iplMP4.desc": "Combinació integral de totes les zones masculines anteriors (aixelles, pit, abdomen, esquena, braços i cames).",

        "treatments.noteTitle": "Tens dubtes sobre algun tractament?",
        "treatments.noteDesc": "Si tens qualsevol dubte sobre un tractament o necessites orientació per a triar el més adequat, pots contactar amb nosaltres sense compromís.",
        "treatments.noteBtn": "Contactar amb Nosaltres",

        // Gallery Page
        "gallery.tag": "Instal·lacions Privades a L'Eliana",
        "gallery.title": "Galeria i Instal·lacions a L'Eliana",
        "gallery.desc": "Descobreix l'ambient íntim i serè de les nostres cabines individuals a L'Eliana, concebudes per a garantir la teua màxima privacitat, confort i resultats de bellesa excepcionals.",
        "gallery.filterAll": "Tots",
        "gallery.filterFacial": "Facial",
        "gallery.filterBody": "Benestar i Massatges",
        "gallery.filterNails": "Manicura i Ungles",
        "gallery.filterCenter": "El Centre",

        "gallery.card1Title": "Zona d'Espera i Recepció",
        "gallery.card1Category": "El Centre",
        "gallery.card2Title": "Pedicura Spa Completa",
        "gallery.card2Category": "Manicura i Pedicura",
        "gallery.card3Title": "Fotodepilació IPL / Làser",
        "gallery.card3Category": "Depilació i Corporal",
        "gallery.card4Title": "Ritual Facial Renovador",
        "gallery.card4Category": "Tractament Facial",

        "gallery.ctaSubtitle": "T'agradaria viure l'experiència?",
        "gallery.ctaTitle": "Reserva el teu moment de desconnexió",
        "gallery.ctaDesc": "Et esperem al nostre centre a L'Eliana (València) per a oferir-te una atenció cuidada i 100% personalitzada.",
        "gallery.ctaBtn": "Sol·licitar Cita Ara"
    },

    en: {
        // Navigation & Header
        "nav.home": "Home",
        "nav.treatments": "Treatments",
        "nav.gallery": "Gallery",
        "nav.appointment": "Book Now",
        "nav.contact": "Contact & Bookings",
        "header.mode": "Theme",
        "header.modeDark": "Dark Mode",
        "header.modeLight": "Light Mode",

        // Footer
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

        // Hero Section (Home)
        "hero.subtitle": "Aesthetics Center in L'Eliana",
        "hero.h1": "Aesthetics Center in L'Eliana",
        "hero.lead": "Your sanctuary of beauty and wellness in L'Eliana designed for your <strong>maximum privacy, comfort, and ultimate relaxation</strong>. Enjoy 100% exclusive care in private individual treatment rooms, combining high-end cosmetics with signature massage techniques.",
        "hero.btnTreatments": "Explore Treatments",
        "hero.btnBook": "Book an Appointment",

        // Privacy Section (Home)
        "privacy.tag": "Your Privacy Is Our Priority",
        "privacy.title": "Maximum Privacy, Intimacy & Comfort",
        "privacy.desc": "An aesthetic boutique center in L'Eliana crafted to be an intimate sanctuary: peaceful, private, and tailored for your total relaxation without interruptions.",
        "privacy.p1Title": "Private Individual Rooms",
        "privacy.p1Desc": "Treatments behind closed doors with total confidentiality. We guarantee complete privacy and zero interruptions while caring for you.",
        "privacy.p2Title": "Calm & Relaxing Ambience",
        "privacy.p2Desc": "A quiet and cozy space in L'Eliana with soft music and aromatherapy where daily stress stops.",
        "privacy.p3Title": "Exclusive 1-on-1 Attention",
        "privacy.p3Desc": "No crowds, no rushing. Every appointment is generously scheduled to give you 100% of our undivided attention.",
        "privacy.p4Title": "High-End Premium Cosmetics",
        "privacy.p4Desc": "Top-tier skincare brands respectful of your skin and the planet, combining state-of-the-art technology and expert hands.",

        // About Section (Home)
        "about.subtitle": "Llum de Lluna",
        "about.title": "A sanctuary of harmony and privacy created for you in L'Eliana",
        "about.p1": "Our philosophy stems from deep respect for your body, privacy, and well-being. We conceived Llum de Lluna as a private aesthetic sanctuary in L'Eliana where outside noise and haste do not exist.",
        "about.p2": "In every session, we welcome you in a private room behind closed doors, guaranteeing your absolute privacy. We work exclusively with high-end cosmetic brands, combining advanced techniques to deliver visible results in unmatched tranquility.",
        "about.btn": "Book your relaxation time",

        // Star Services Section (Home)
        "services.featuredTag": "Featured Services",
        "services.featuredTitle": "Signature Experiences",
        "services.featuredDesc": "We have designed a selection of our most loved treatments, ideal for giving yourself that well-deserved care.",
        "services.tagFacial": "Facial",
        "services.facialTitleHome": "Deep Renewal & Nourishing Facial Ritual",
        "services.facialDescHome": "Comprehensive 60-minute facial treatment: deep cleansing, exfoliation, desincrustation, extractions, concentrated active ingredient, facial massage, and gel mask.",
        "services.tagNails": "Pedicure",
        "services.pedicuraTitleHome": "Full Spa Pedicure",
        "services.pedicuraDescHome": "Comprehensive foot care ritual: foot bath, nail trimming and filing, callus removal, aromatic scrub, polish, and relaxing massage.",
        "services.tagLaser": "Hair Removal",
        "services.laserTitleHome": "IPL / Laser Hair Removal",
        "services.laserDescHome": "High-precision gentle hair removal for long-lasting smoothness on facial and body areas with personalized rates and packages.",
        "services.learnMore": "Learn more",

        // Contact Section (Home)
        "contact.tag": "Book Your Appointment",
        "contact.title": "Contact Us",
        "contact.desc": "Schedule your session by phone, WhatsApp, or by submitting the contact form below.",
        "contact.formHeader": "Write to Us",
        "contact.nameLabel": "Full Name",
        "contact.namePlaceholder": "E.g. Sofia Martin",
        "contact.phoneLabel": "Phone Number",
        "contact.phonePlaceholder": "Your phone number",
        "contact.serviceLabel": "Treatment of Interest",
        "contact.selectOption": "Select an option...",
        "contact.optionFacial": "Facial Rituals",
        "contact.optionBody": "Massages & Body (Wood Therapy)",
        "contact.optionNails": "Manicure & Pedicure",
        "contact.optionDepilation": "Wax / IPL Hair Removal",
        "contact.optionOther": "Other Services / General Inquiry",
        "contact.messageLabel": "Message or Preferred Schedule",
        "contact.messagePlaceholder": "Tell us which day/time suits you best or ask any questions...",
        "contact.sendBtn": "Submit Request",
        "contact.sendingBtn": "Sending request...",
        "contact.successToast": "Thank you {name}! Your request has been sent successfully. We will contact you soon.",
        "contact.errorToast": "An error occurred while sending the request. Please try again or reach us via WhatsApp.",
        "contact.networkErrorToast": "Unable to send message. Check your connection or contact us by phone.",
        "contact.infoTitle": "Contact & Opening Hours",
        "contact.phoneTitle": "Mobile & WhatsApp:",

        // Treatments Page
        "treatments.pageTag": "Service Menu in L'Eliana",
        "treatments.pageTitle": "Aesthetics Treatments & Rates in L'Eliana",
        "treatments.pageDesc": "We offer personalized solutions and aesthetic rituals in private rooms in L'Eliana. Click on each category to view detailed treatment descriptions and prices.",
        
        "treatments.filterAll": "All",
        "treatments.filterFacial": "Facial",
        "treatments.filterBody": "Wellness & Body",
        "treatments.filterNails": "Manicure & Pedicure",
        "treatments.filterWax": "Waxing",
        "treatments.filterIPL": "IPL Hair Removal",

        "treatments.groupFacial": "Facial Treatments",
        "treatments.groupBody": "Body Treatments & Wood Therapy",
        "treatments.groupNails": "Manicure & Pedicure",
        "treatments.groupWax": "Waxing",
        "treatments.groupIPL": "IPL Hair Removal (Intense Pulsed Light)",

        "treatments.subManicure": "Manicure",
        "treatments.subPedicure": "Pedicure",
        "treatments.subWaxWomen": "Women's Waxing",
        "treatments.subWaxMen": "Men's Waxing",
        "treatments.subIPLWomen": "Women's IPL Areas (Per Session)",
        "treatments.subIPLWomenPacks": "Women's IPL Combo Packs",
        "treatments.subIPLMen": "Men's IPL Areas (Per Session)",
        "treatments.subIPLMenPacks": "Men's IPL Combo Packs",

        "treatments.badgeSession1": "1st Session",
        "treatments.badgeSession2": "From 2nd Session",
        "treatments.fromPrice": "From {price}",
        "treatments.perNail": "{price} / nail",

        "t.facial1.name": "Deep Renewal & Nourishing Facial Ritual",
        "t.facial1.desc": "Comprehensive 60-minute facial treatment: deep cleansing, exfoliation, desincrustation solution, extraction (optional hair removal) and concentrated active ingredient after aesthetic assessment. Includes hydrating cream with facial massage, occlusive gel mask, cervical, chest and arm massage, sunscreen and lip balm.",

        "t.body1.name": "Initial Assessment + Full Body Wood Therapy",
        "t.body1.desc": "Personalized aesthetic diagnosis followed by a complete body wood therapy session on arms, abdomen, back, buttocks, and legs to evaluate and activate the circulatory and lymphatic system.",
        "t.body2.name": "Targeted Sculpting Body Wood Therapy",
        "t.body2.desc": "Customized remodeling treatment focused on key body areas identified in the initial assessment. Designed to reduce cellulite, smooth orange-peel skin, reduce localized fat deposits, and drain toxins. *(Price varies based on treated body parts)*.",

        "t.mani1.name": "Basic Natural Manicure (No Polish)",
        "t.mani1.desc": "Cleansing and polishing of cuticles, nail shaping and filing with deep nourishment and hydration.",
        "t.mani2.name": "Gel Polish Manicure (Without Reinforcement)",
        "t.mani2.desc": "Natural nail preparation, cuticle conditioning, and long-lasting gel polish.",
        "t.mani3.name": "Gel Polish Manicure with Graphene Reinforcement",
        "t.mani3.desc": "Advanced gel manicure with a structural graphene layer for extreme leveling, flexibility, and nail strength.",
        "t.mani4.name": "Sculpted Gel Manicure (Full Set) - Size S",
        "t.mani4.desc": "High-quality structural gel extension and modeling for short nails (Size S).",
        "t.mani5.name": "Sculpted Gel Manicure (Full Set) - Size M",
        "t.mani5.desc": "High-quality structural gel extension and modeling for medium-length nails (Size M).",
        "t.mani6.name": "Sculpted Gel Manicure (Full Set) - Size L",
        "t.mani6.desc": "High-quality structural gel extension and modeling for long nails (Size L).",
        "t.mani7.name": "Supplement: Polygel Nail Repair (Hands)",
        "t.mani7.desc": "Structural repair of damaged or broken hand nail with polygel *(add-on to a primary service)*.",

        "t.pedi1.name": "Dry Exfoliating Pedicure",
        "t.pedi1.desc": "Meticulous cuticle care, filing, and nail shaping without soak, finished with deep nourishment and hydration on nails and feet.",
        "t.pedi2.name": "Nourishing Soak & Scrub Pedicure (No Polish)",
        "t.pedi2.desc": "Relaxing foot soak, callus filing, deep dead cell exfoliation, cuticle and nail work with deep foot and nail nourishment.",
        "t.pedi3.name": "Full Spa Pedicure",
        "t.pedi3.desc": "Comprehensive foot care ritual: foot soak, nail trimming and filing, callus removal, aromatic scrub, polish, and relaxing massage.",
        "t.pedi4.name": "Extra / Supplement: Removal & Express Basic Pedicure",
        "t.pedi4.desc": "Quick removal of previous polish and basic express nail conditioning.",
        "t.pedi5.name": "Supplement: Polygel Nail Repair (Feet)",
        "t.pedi5.desc": "Aesthetic reconstruction and leveling of damaged toe nail using polygel *(add-on to a primary service)*.",

        "t.waxW1.name": "Eyebrow Design (Wax + Tweezers)",
        "t.waxW2.name": "Upper Lip",
        "t.waxW3.name": "Nose",
        "t.waxW4.name": "Underarms",
        "t.waxW5.name": "Arms",
        "t.waxW6.name": "Bikini Line",
        "t.waxW7.name": "Full Bikini",
        "t.waxW8.name": "Half Legs",
        "t.waxW9.name": "Full Legs",

        "t.waxM1.name": "Underarms",
        "t.waxM2.name": "Chest or Lower Back",
        "t.waxM3.name": "Abdomen",
        "t.waxM4.name": "Back & Shoulders",
        "t.waxM5.name": "Half Legs",
        "t.waxM6.name": "Full Legs",

        "t.iplW1.name": "Upper Lip",
        "t.iplW2.name": "Chin",
        "t.iplW3.name": "Linea Alba",
        "t.iplW4.name": "Underarms",
        "t.iplW5.name": "Bikini Line",
        "t.iplW6.name": "Pubis / Inner Glutes",
        "t.iplW7.name": "Arms",
        "t.iplW8.name": "Back",
        "t.iplW9.name": "Thighs",
        "t.iplW10.name": "Glutes + Inner Glutes",
        "t.iplW11.name": "Half Legs",
        "t.iplW12.name": "Full Legs",

        "t.iplWP1.name": "Underarms + Bikini + Full Legs Pack",
        "t.iplWP1.desc": "Combined IPL hair removal treatment on underarms, bikini line, and full legs.",
        "t.iplWP2.name": "Underarms + Bikini + Arms Pack",
        "t.iplWP2.desc": "Fast and effective IPL hair removal on underarms, bikini line, and full arms.",
        "t.iplWP3.name": "Arms + Full Legs Pack",
        "t.iplWP3.desc": "Combined session for progressive hair reduction on upper and lower limbs.",
        "t.iplWP4.name": "Women's Full Body Pack",
        "t.iplWP4.desc": "Comprehensive body IPL treatment on all requested areas.",

        "t.iplM1.name": "Underarms",
        "t.iplM2.name": "Chest",
        "t.iplM3.name": "Abdomen",
        "t.iplM4.name": "Arms",
        "t.iplM5.name": "Back",
        "t.iplM6.name": "Half Legs",
        "t.iplM7.name": "Full Legs",

        "t.iplMP1.name": "Chest + Abdomen + Arms Pack",
        "t.iplMP1.desc": "Complete male upper torso and arms treatment.",
        "t.iplMP2.name": "Chest + Back + Arms Pack",
        "t.iplMP2.desc": "Full male IPL hair removal for upper torso, back, and arms.",
        "t.iplMP3.name": "Chest + Abdomen + Back + Arms Pack",
        "t.iplMP3.desc": "Comprehensive combined treatment for full torso, back, and arms.",
        "t.iplMP4.name": "Men's Full Body Pack",
        "t.iplMP4.desc": "Complete combination of all male areas above (underarms, chest, abdomen, back, arms, and legs).",

        "treatments.noteTitle": "Do you have questions about any treatment?",
        "treatments.noteDesc": "If you have any questions regarding a treatment or need guidance to choose the most suitable one, feel free to contact us without obligation.",
        "treatments.noteBtn": "Contact Us",

        // Gallery Page
        "gallery.tag": "Private Facilities in L'Eliana",
        "gallery.title": "Gallery & Facilities in L'Eliana",
        "gallery.desc": "Discover the intimate and serene ambience of our private individual treatment rooms in L'Eliana, created for your comfort and exceptional results.",
        "gallery.filterAll": "All",
        "gallery.filterFacial": "Facial",
        "gallery.filterBody": "Wellness & Massages",
        "gallery.filterNails": "Manicure & Nails",
        "gallery.filterCenter": "The Center",

        "gallery.card1Title": "Waiting Area & Reception",
        "gallery.card1Category": "The Center",
        "gallery.card2Title": "Full Spa Pedicure",
        "gallery.card2Category": "Manicure & Pedicure",
        "gallery.card3Title": "IPL / Laser Hair Removal",
        "gallery.card3Category": "Hair Removal & Body",
        "gallery.card4Title": "Deep Renewal Facial Ritual",
        "gallery.card4Category": "Facial Treatment",

        "gallery.ctaSubtitle": "Would you like to experience it?",
        "gallery.ctaTitle": "Book your moment of relaxation",
        "gallery.ctaDesc": "We look forward to welcoming you at our center in L'Eliana (Valencia) to provide tailored and 100% personalized care.",
        "gallery.ctaBtn": "Book Appointment Now"
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

    get(key, lang = this.currentLang, params = {}) {
        let translation = translations[lang]?.[key] || translations['es']?.[key] || key;
        if (params && typeof params === 'object') {
            Object.keys(params).forEach(k => {
                translation = translation.replace(new RegExp(`\\{${k}\\}`, 'g'), params[k]);
            });
        }
        return translation;
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
                if (translation.includes('<') && translation.includes('>')) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.get(key, lang);
            if (translation) {
                el.setAttribute('placeholder', translation);
            }
        });

        // Update title attributes
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = this.get(key, lang);
            if (translation) {
                el.setAttribute('title', translation);
            }
        });

        // Update aria-label attributes
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const translation = this.get(key, lang);
            if (translation) {
                el.setAttribute('aria-label', translation);
            }
        });

        // Update UI controls
        this.updateUIControls();

        // Dispatch custom event if other modules need to react to language change
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
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

        // Header and Footer option buttons
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
