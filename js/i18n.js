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
        "treatments.filterHairSpa": "Hair Spa",
        "treatments.filterBody": "Corporal",
        "treatments.filterNails": "Manicura & Pedicura",
        "treatments.filterWax": "Depilación Cera",
        "treatments.filterIPL": "Depilación IPL",

        "treatments.groupFacial": "Facial",
        "treatments.groupHairSpa": "Hair Spa",
        "treatments.groupBody": "Corporal",
        "treatments.groupNails": "Manicura y pedicura",
        "treatments.groupWax": "Depilación con cera caliente",
        "treatments.groupIPL": "Fotodepilación IPL (Luz Pulsada)",

        "treatments.subRituals": "Rituales",
        "treatments.subTreatments": "Tratamientos",
        "treatments.subDermapen": "Dermapen",
        "treatments.subCapillaryTreatments": "Tratamientos capilares",
        "treatments.subCapillaryRituals": "Rituales capilares",
        "treatments.subBodyWood": "Maderoterapia corporal",
        "treatments.subFacialCapillaryCombo": "Combinación con spa capilar",
        "treatments.subManicure": "Manicura",
        "treatments.subPedicure": "Pedicura",
        "treatments.subWaxWomen": "Depilación mujer",
        "treatments.subWaxMen": "Depilación hombre",
        "treatments.subIPLWomen": "Zonas IPL Mujer (Por Sesión)",
        "treatments.subIPLWomenPacks": "Packs Combinados IPL Mujer",
        "treatments.subIPLMen": "Zonas IPL Hombre (Por Sesión)",
        "treatments.subIPLMenPacks": "Packs Combinados IPL Hombre",

        "treatments.recTitle": "Recomendaciones generales Pre y Post-sesión",
        "treatments.comingSoon": "Próximamente",
        "treatments.newTreatmentsComingSoon": "Nuevos tratamientos próximamente",
        "treatments.notifyAvailable": "Avísame cuando esté disponible",

        "treatments.badgeSession1": "1ª Sesión",
        "treatments.badgeSession2": "A partir de 2ª sesión",
        "treatments.fromPrice": "Desde {price}",
        "treatments.perNail": "{price} / uña",

        // 1. Limpiezas faciales
        "t.facial.pre": "Acudir a cara lavada, sin productos ni tratamientos aplicados. Recomendación, acudir con el cabello no recién lavado.",
        "t.facial.post": "Hidratarse correctamente la piel y usar protección solar.",

        "t.facial1.name": "Ritual Facial Renovador",
        "t.facial1.desc": "Tratamiento facial integral de 60 minutos: limpieza profunda, exfoliación, solución desincrustante, extracción (depilación opcional) y principio activo concentrado tras valoración estética. Incluye crema hidratante con masaje facial, mascarilla geloide oclusiva, masaje en zona cervical, pecho y brazos, protector solar y bálsamo labial.",
        "t.facial1.pre": "Evitar usar acidos exfoliantes las semanas previas, recomendación no tener recien lavado el cabello.",
        "t.facial1.post": "Aplicar protector solar diario SPF 50+ y una buena limpieza e hidratación los días posteriores para alargar el efecto.",

        "t.facial2.name": "Ritual Facial Mantenimiento",
        "t.facial2.desc": "Tratamiento facial integral de 60 minutos: limpieza profunda, exfoliación y principio activo concentrado tras valoración estética. Incluye crema hidratante con masaje facial, mascarilla geloide oclusiva, masaje en zona cervical, pecho y brazos, protector solar y bálsamo labial.",
        "t.facial2.pre": "Evitar usar acidos exfoliantes las semanas previas, recomendación no tener recien lavado el cabello.",
        "t.facial2.post": "Aplicar protector solar diario SPF 50+ y una buena limpieza e hidratación los días posteriores para alargar el efecto.",

        "t.facialSupp1.name": "Suplemento Diseño de Cejas",
        "t.facialSupp2.name": "Suplemento Depilación de Bigote",

        "t.facialVitC.name": "Tratamiento Vitamina C",
        "t.facialVitC.desc": "Tratamiento facial integral de 60 minutos: limpieza profunda, exfoliación, solución desincrustante, extracción (depilación opcional) y principio activo concentrado tras valoración estética. Incluye crema hidratante con masaje facial, mascarilla geloide oclusiva, masaje en zona cervical, pecho y brazos, protector solar y bálsamo labial.",
        "t.facialVitC.pre": "Evitar el uso de retinoides o ácidos exfoliantes 48 horas antes de la sesión.",
        "t.facialVitC.post": "Aplicar protector solar diario SPF 50+ y evitar la exposición solar directa prolongada.",

        "t.facialHydra.name": "Tratamiento Hidratacion profunda",
        "t.facialHydra.desc": "Tratamiento facial integral de 60 minutos: limpieza profunda, exfoliación, solución desincrustante, extracción (depilación opcional) y principio activo concentrado tras valoración estética. Incluye crema hidratante con masaje facial, mascarilla geloide oclusiva, masaje en zona cervical, pecho y brazos, protector solar y bálsamo labial.",
        "t.facialHydra.pre": "Acudir con la piel limpia y suspender el uso de exfoliantes agresivos el día anterior.",
        "t.facialHydra.post": "Mantener una buena hidratación bebiendo agua y aplicar la crema hidratante de confianza.",

        "t.facialSpots.name": "Tratamiento reductor de manchas",
        "t.facialSpots.desc": "Tratamiento facial integral de 60 minutos: limpieza profunda, exfoliación, solución desincrustante, extracción (depilación opcional) y principio activo concentrado tras valoración estética. Incluye crema hidratante con masaje facial, mascarilla geloide oclusiva, masaje en zona cervical, pecho y brazos, protector solar y bálsamo labial.",
        "t.facialSpots.pre": "Evitar el bronceado y el uso de autobronceadores durante las dos semanas previas.",
        "t.facialSpots.post": "Usar protección solar fotoprotectora estricta e hidratar la zona a diario.",

        "t.facialAntiage.name": "Tratamiento antiedad",
        "t.facialAntiage.desc": "Tratamiento facial integral de 60 minutos: limpieza profunda, exfoliación, solución desincrustante, extracción (depilación opcional) y principio activo concentrado tras valoración estética. Incluye crema hidratante con masaje facial, mascarilla geloide oclusiva, masaje en zona cervical, pecho y brazos, protector solar y bálsamo labial.",
        "t.facialAntiage.pre": "No realizar depilaciones faciales agresivas ni peelings químicos en la misma semana.",
        "t.facialAntiage.post": "Evitar maquillar la piel durante las primeras 12 horas y utilizar productos reafirmantes.",

        "t.facialRefresh.name": "Tratamiento refrescante",
        "t.facialRefresh.desc": "Tratamiento facial integral de 60 minutos: limpieza profunda, exfoliación, solución desincrustante, extracción (depilación opcional) y principio activo concentrado tras valoración estética. Incluye crema hidratante con masaje facial, mascarilla geloide oclusiva, masaje en zona cervical, pecho y brazos, protector solar y bálsamo labial.",
        "t.facialRefresh.pre": "Evitar tomar el sol el mismo día del tratamiento.",
        "t.facialRefresh.post": "Evitar saunas, baños calientes y ejercicio intenso durante las 24 horas posteriores.",

        "t.dermapen.name": "Dermapen (Microneedling Facial)",
        "t.dermapen.desc": "Tratamiento de inducción de colágeno mediante microagujas para atenuar marcas, poros dilatados y líneas de expresión. *(Valoración previa recomendada)*.",

        "t.facialHairCombo.name": "Ritual Facial + Spa Capilar",
        "t.facialHairCombo.desc": "Tratamiento integral que combina el cuidado facial profundo con una relajante experiencia de spa capilar.",

        // 2. Hair Spa
        "t.hairOily.name": "Ritual Capilar para Cabello Graso",
        "t.hairOily.desc": "Tratamiento capilar intensivo para purificar, equilibrar y controlar el exceso de grasa en el cuero cabelludo.",
        "t.hairOily.pre": "No aplicar aceites ni mascarillas pesadas en el cuero cabelludo antes de la cita.",
        "t.hairOily.post": "Utilizar champú purificante equilibrante y evitar lavar el cabello con agua muy caliente.",

        "t.hairDry.name": "Ritual Capilar para Cabello Seco",
        "t.hairDry.desc": "Tratamiento capilar intensivo para aportar una hidratación profunda y devolver la flexibilidad y suavidad al cabello seco.",
        "t.hairDry.pre": "Desenredar suavemente el cabello previo a la sesión.",
        "t.hairDry.post": "Usar sérum nutritivo en puntas y limitar el uso de planchas o secadores a alta temperatura.",

        "t.hairDamaged.name": "Ritual Capilar para Cabello Dañado",
        "t.hairDamaged.desc": "Tratamiento capilar intensivo para reparar la fibra capilar y devolver la vitalidad y el brillo al cabello dañado.",
        "t.hairDamaged.pre": "Evitar tratamientos químicos (tintes, decoloraciones) en los 3 días previos.",
        "t.hairDamaged.post": "Aplicar mascarilla reparadora una vez por semana y proteger del calor extremo.",

        "t.hairLoss.name": "Tratamiento Capilar para Caída",
        "t.hairLoss.desc": "Tratamiento capilar intensivo diseñado para fortalecer el folículo, estimular el crecimiento y frenar la caída del cabello.",
        "t.hairLoss.pre": "Acudir con el cuero cabelludo limpio, sin lacas ni fijadores, y cepillado suave antes de la cita.",
        "t.hairLoss.post": "Combinar con masajes capilares suaves y evitar recogidos o peinados muy tirantes.",

        "t.hairDandruff.name": "Tratamiento Capilar para Caspa/Descamación",
        "t.hairDandruff.desc": "Tratamiento capilar intensivo para calmar el cuero cabelludo, eliminar la descamación y prevenir la reaparición de la caspa.",
        "t.hairDandruff.pre": "No rascar ni rascado agresivo del cuero cabelludo antes del servicio, ni champús especificos para no sobrecargar el cuero cabelludo.",
        "t.hairDandruff.post": "Usar champú específico calmante y evitar el secado con aire excesivamente caliente pegado a la raíz.",

        // 3. Corporales & Maderoterapia
        "t.body1.name": "Valoración Inicial + Maderoterapia Corporal Integral",
        "t.body1.desc": "Diagnóstico estético personalizado seguido de una completa sesión de maderoterapia corporal en brazos, abdomen, espalda, glúteos y piernas para evaluar y activar el sistema circulatorio y linfático.",
        "t.body2.name": "Maderoterapia Corporal Reductora Focalizada",
        "t.body2.desc": "Tratamiento remodelante personalizado centrado en las zonas corporales clave detectadas en la valoración inicial. Diseñado para atenuar la celulitis, suavizar la piel de naranja, reducir cúmulos grasos y drenar toxinas. *(El precio varía según las partes corporales tratadas)*.",
        "t.body.pre": "Mantener la piel hidratada diariamente, beber suficiente agua antes de la cita y no aplicar cremas pesadas ni aceites justo antes de la sesión.",
        "t.body.post": "Incrementar el consumo de agua para favorecer el drenaje linfático, evitar el consumo excesivo de sal y realizar actividad física moderada.",

        // 4. Manicura y pedicura
        "t.mani1.name": "Manicura Natural Básica (Sin esmaltado)",
        "t.mani1.desc": "Limpieza y pulido de cutículas, limado y conformado de uñas con nutrición e hidratación.",
        "t.mani2.name": "Manicura Semipermanente (Sin refuerzo)",
        "t.mani2.desc": "Preparación de uña natural, acondicionamiento de cutículas y esmaltado semipermanente de alta duración.",
        "t.mani3.name": "Manicura Semipermanente con Refuerzo de Grafeno",
        "t.mani3.desc": "Manicura semipermanente avanzada con capa estructural de grafeno para aportar nivelado, flexibilidad y resistencia extrema a la uña.",
        "t.mani4.name": "Manicura Esculpida en Gel (Puesta Nueva) - Talla S",
        "t.mani4.desc": "Extensión y modelado estructural en gel de alta calidad.",
        "t.mani5.name": "Manicura Esculpida en Gel (Puesta Nueva) - Talla M",
        "t.mani5.desc": "Extensión y modelado estructural en gel de alta calidad.",
        "t.mani6.name": "Manicura Esculpida en Gel (Puesta Nueva) - Talla L",
        "t.mani6.desc": "Extensión y modelado estructural en gel de alta calidad.",
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

        "t.nails.pre": "No cortar excesivamente ni arrancar las cutículas en días previos y acudir con las uñas limpias sin productos químicos agresivos.",
        "t.nails.post": "Aplicar aceite de cutículas diariamente, usar guantes para tareas domésticas o de limpieza e hidratar las manos y pies periódicamente.",

        // 5. Depilacion con cera caliente
        "t.waxW1.name": "Diseño de Cejas (Cera + Pinzas)",
        "t.waxW2.name": "Depilación de Labio Superior",
        "t.waxW3.name": "Depilación de Nariz",
        "t.waxW4.name": "Depilación de Axilas",
        "t.waxW5.name": "Depilación de Brazos",
        "t.waxW6.name": "Depilación de Ingles",
        "t.waxW7.name": "Depilación de Ingles Completa",
        "t.waxW8.name": "Depilación de Medias Piernas",
        "t.waxW9.name": "Depilación de Piernas Enteras",

        "t.waxM1.name": "Depilación de Axilas",
        "t.waxM2.name": "Depilación de Pecho o Lumbares",
        "t.waxM3.name": "Depilación de Abdomen",
        "t.waxM4.name": "Depilación de Espalda y Hombros",
        "t.waxM5.name": "Depilación de Medias Piernas",
        "t.waxM6.name": "Depilación de Piernas Enteras",

        "t.wax.pre": "Exfoliar la piel suavemente 24-48 horas antes para prevenir pelos encarnados y no aplicar cremas o lociones el día del servicio.",
        "t.wax.post": "Evitar la exposición solar, saunas, piscinas con cloro y el uso de ropa muy ajustada durante las primeras 24 horas.",

        // 6. Fotodepilación IPL
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

        "t.ipl.pre": "Rasurar la zona a tratar con cuchilla 24 horas antes, no arrancar el vello de raíz (cera o pinzas) durante el tratamiento y evitar la exposición solar directa. Si es zona que vaya cubierta por ropa, venir con ropa cómoda.",
        "t.ipl.post": "Aplicar gel de aloe vera para calmar la piel, usar protección solar alta en zonas expuestas y evitar baños calientes o sudoración excesiva las primeras 24-48 horas.",

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
        "treatments.filterHairSpa": "Hair Spa",
        "treatments.filterBody": "Corporal",
        "treatments.filterNails": "Manicura i Pedicura",
        "treatments.filterWax": "Depilació Cera",
        "treatments.filterIPL": "Depilació IPL",

        "treatments.groupFacial": "Facial",
        "treatments.groupHairSpa": "Hair Spa",
        "treatments.groupBody": "Corporal",
        "treatments.groupNails": "Manicura i pedicura",
        "treatments.groupWax": "Depilació amb cera calenta",
        "treatments.groupIPL": "Fotodepilació IPL (Llum Pulsada)",

        "treatments.subRituals": "Rituals",
        "treatments.subTreatments": "Tractaments",
        "treatments.subDermapen": "Dermapen",
        "treatments.subCapillaryTreatments": "Tractaments capil·lars",
        "treatments.subCapillaryRituals": "Rituals capil·lars",
        "treatments.subBodyWood": "Maderoteràpia corporal",
        "treatments.subFacialCapillaryCombo": "Combinació amb spa capil·lar",
        "treatments.subManicure": "Manicura",
        "treatments.subPedicure": "Pedicura",
        "treatments.subWaxWomen": "Depilació dona",
        "treatments.subWaxMen": "Depilació home",
        "treatments.subIPLWomen": "Zones IPL Dona (Per Sessió)",
        "treatments.subIPLWomenPacks": "Packs Combinats IPL Dona",
        "treatments.subIPLMen": "Zones IPL Home (Per Sessió)",
        "treatments.subIPLMenPacks": "Packs Combinats IPL Home",

        "treatments.recTitle": "Recomanacions generals Pre i Post-sessió",
        "treatments.comingSoon": "Pròximament",
        "treatments.newTreatmentsComingSoon": "Nous tractaments pròximament",
        "treatments.notifyAvailable": "Avisa'm quan estiga disponible",

        "treatments.badgeSession1": "1a Sessió",
        "treatments.badgeSession2": "A partir de 2a sessió",
        "treatments.fromPrice": "Des de {price}",
        "treatments.perNail": "{price} / ungla",

        // 1. Netejes facials
        "t.facial.pre": "Anar amb la cara lavada, sense productes ni tractaments aplicats. Recomanació: anar amb el cabell no acabat de llavar.",
        "t.facial.post": "Hidratar-se correctament la pell i utilitzar protecció solar.",

        "t.facial1.name": "Ritual Facial Renovador",
        "t.facial1.desc": "Tractament facial integral de 60 minuts: neteja profunda, exfoliació, solució desincrustant, extracció (depilació opcional) i principi actiu concentrat després de valoració estètica. Inclou crema hidratant amb massatge facial, mascareta geloide oclusiva, massatge en zona cervical, pit i braços, protector solar i bàlsam labial.",
        "t.facial1.pre": "Evitar usar àcids exfoliants les setmanes prèvies, recomanació no tindre recent lavat el cabell.",
        "t.facial1.post": "Aplicar protector solar diari SPF 50+ i una bona neteja i hidratació els dies posteriors per a allargar l'efecte.",

        "t.facial2.name": "Ritual Facial Manteniment",
        "t.facial2.desc": "Tractament facial integral de 60 minuts: neteja profunda, exfoliació i principi actiu concentrat després de valoració estètica. Inclou crema hidratante amb massatge facial, mascareta geloide oclusiva, massatge en zona cervical, pit i braços, protector solar i bàlsam labial.",
        "t.facial2.pre": "Evitar usar àcids exfoliants les setmanes prèvies, recomanació no tindre recent lavat el cabell.",
        "t.facial2.post": "Aplicar protector solar diari SPF 50+ i una bona neteja i hidratació els dies posteriors per a allargar l'efecte.",

        "t.facialSupp1.name": "Suplement Disseny de Celles",
        "t.facialSupp2.name": "Suplement Depilació de Bigot",

        "t.facialVitC.name": "Tractament Vitamina C",
        "t.facialVitC.desc": "Tractament facial integral de 60 minuts: neteja profunda, exfoliació, solució desincrustant, extracció (depilació opcional) i principi actiu concentrat després de valoració estètica. Inclou crema hidratant amb massatge facial, mascareta geloide oclusiva, massatge en zona cervical, pit i braços, protector solar i bàlsam labial.",
        "t.facialVitC.pre": "Evitar l'ús de retinoides o àcids exfoliants 48 hores abans de la sessió.",
        "t.facialVitC.post": "Aplicar protector solar diari SPF 50+ i evitar l'exposició solar directa prolongada.",

        "t.facialHydra.name": "Tractament Hidratació profunda",
        "t.facialHydra.desc": "Tractament facial integral de 60 minuts: neteja profunda, exfoliació, solució desincrustant, extracció (depilació opcional) i principi actiu concentrat després de valoració estètica. Inclou crema hidratant amb massatge facial, mascareta geloide oclusiva, massatge en zona cervical, pit i braços, protector solar i bàlsam labial.",
        "t.facialHydra.pre": "Acudir amb la pell neta i suspendre l'ús d'exfoliants agressius el dia anterior.",
        "t.facialHydra.post": "Mantindre una bona hidratació bevent aigua i aplicar la crema hidratant de confiança.",

        "t.facialSpots.name": "Tractament reductor de taques",
        "t.facialSpots.desc": "Tractament facial integral de 60 minuts: neteja profunda, exfoliació, solució desincrustant, extracció (depilació opcional) i principi actiu concentrat després de valoració estètica. Inclou crema hidratant amb massatge facial, mascareta geloide oclusiva, massatge en zona cervical, pit i braços, protector solar i bàlsam labial.",
        "t.facialSpots.pre": "Evitar el bronzejat i l'ús d'autobronzejadors durant les dues setmanes prèvies.",
        "t.facialSpots.post": "Usar protecció solar fotoprotectora estricta i hidratar la zona a diari.",

        "t.facialAntiage.name": "Tractament antiedat",
        "t.facialAntiage.desc": "Tractament facial integral de 60 minuts: neteja profunda, exfoliació, solució desincrustant, extracció (depilació opcional) i principi actiu concentrat després de valoració estètica. Inclou crema hidratant amb massatge facial, mascareta geloide oclusiva, massatge en zona cervical, pit i braços, protector solar i bàlsam labial.",
        "t.facialAntiage.pre": "No realitzar depilacions facials agressives ni peelings químics en la mateixa setmana.",
        "t.facialAntiage.post": "Evitar maquillar la pell durant les primeres 12 hores i utilitzar productes reafirmants.",

        "t.facialRefresh.name": "Tractament refrescant",
        "t.facialRefresh.desc": "Tractament facial integral de 60 minuts: neteja profunda, exfoliació, solució desincrustant, extracció (depilació opcional) i principi actiu concentrat després de valoració estètica. Inclou crema hidratant amb massatge facial, mascareta geloide oclusiva, massatge en zona cervical, pit i braços, protector solar i bàlsam labial.",
        "t.facialRefresh.pre": "Evitar prendre el sol el mateix dia del tractament.",
        "t.facialRefresh.post": "Evitar saunes, banys calents i exercici intens durant les 24 hores posteriors.",

        "t.dermapen.name": "Dermapen (Microneedling Facial)",
        "t.dermapen.desc": "Tractament d'inducció de col·lagen mitjançant microagulles per a atenuar marques, porus dilatats i línies d'expressió. *(Valoració prèvia recomanada)*.",

        "t.facialHairCombo.name": "Ritual Facial + Spa Capil·lar",
        "t.facialHairCombo.desc": "Tractament integral que combina la cura facial profunda amb una relaxant experiència de spa capil·lar.",

        // 2. Hair Spa
        "t.hairOily.name": "Ritual Capil·lar per a Cabell Gràs",
        "t.hairOily.desc": "Tractament capil·lar intensiu per a purificar, equilibrar i controlar l'excés de greix en el cuir cabellut.",
        "t.hairOily.pre": "No aplicar olis ni mascaretes pesades en el cuir cabellut abans de la cita.",
        "t.hairOily.post": "Utilitzar xampú purificant equilibrant i evitar lavar el cabell amb aigua molt calenta.",

        "t.hairDry.name": "Ritual Capil·lar per a Cabell Sec",
        "t.hairDry.desc": "Tractament capil·lar intensiu per a aportar una hidratació profunda i retornar la flexibilitat i suavitat al cabell sec.",
        "t.hairDry.pre": "Desenredar suaument el cabell previ a la sessió.",
        "t.hairDry.post": "Usar sèrum nutritiu en puntes i limitar l'ús de planxes o secadors a alta temperatura.",

        "t.hairDamaged.name": "Ritual Capil·lar per a Cabell Danyat",
        "t.hairDamaged.desc": "Tractament capil·lar intensiu per a reparar la fibra capil·lar i retornar la vitalitat i la brillantor al cabell danyat.",
        "t.hairDamaged.pre": "Evitar tractaments químics (tints, decoloracions) en els 3 dies previs.",
        "t.hairDamaged.post": "Aplicar mascareta reparadora una vegada per setmana i protegir de la calor extrema.",

        "t.hairLoss.name": "Tractament Capil·lar per a Caiguda",
        "t.hairLoss.desc": "Tractament capil·lar intensiu dissenyat per a enfortir el fol·licle, estimular el creixement i frenar la caiguda del cabell.",
        "t.hairLoss.pre": "Acudir amb el cuir cabellut net, sense laques ni fixadors, i raspallat suau abans de la cita.",
        "t.hairLoss.post": "Combinar amb massatges capil·lars suaus i evitar recollits o pentinats molt tirants.",

        "t.hairDandruff.name": "Tractament Capil·lar per a Caspa/Descamació",
        "t.hairDandruff.desc": "Tractament capil·lar intensiu per a calmar el cuir cabellut, eliminar la descamació i previndre la reaparició de la caspa.",
        "t.hairDandruff.pre": "No rascar el cuir cabellut abans del servei ni utilitzar xampús específics per a no sobrecarregar el cuir cabellut.",
        "t.hairDandruff.post": "Usar xampú específic meula i evitar el assecat amb aire excessivament calent pegat a la arrel.",

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
        "treatments.filterHairSpa": "Hair Spa",
        "treatments.filterBody": "Body",
        "treatments.filterNails": "Manicure & Pedicure",
        "treatments.filterWax": "Waxing",
        "treatments.filterIPL": "IPL Hair Removal",

        "treatments.groupFacial": "Facial",
        "treatments.groupHairSpa": "Hair Spa",
        "treatments.groupBody": "Body",
        "treatments.groupNails": "Manicure & Pedicure",
        "treatments.groupWax": "Hot Waxing",
        "treatments.groupIPL": "IPL Hair Removal (Intense Pulsed Light)",

        "treatments.subRituals": "Rituals",
        "treatments.subTreatments": "Treatments",
        "treatments.subDermapen": "Dermapen",
        "treatments.subCapillaryTreatments": "Hair Treatments",
        "treatments.subCapillaryRituals": "Hair Rituals",
        "treatments.subBodyWood": "Body Wood Therapy",
        "treatments.subFacialCapillaryCombo": "Combination with Hair Spa",
        "treatments.subManicure": "Manicure",
        "treatments.subPedicure": "Pedicure",
        "treatments.subWaxWomen": "Women's Waxing",
        "treatments.subWaxMen": "Men's Waxing",
        "treatments.subIPLWomen": "Women's IPL Zones (Per Session)",
        "treatments.subIPLWomenPacks": "Women's Combined IPL Packs",
        "treatments.subIPLMen": "Men's IPL Zones (Per Session)",
        "treatments.subIPLMenPacks": "Men's Combined IPL Packs",

        "treatments.recTitle": "General Pre and Post-session Recommendations",
        "treatments.comingSoon": "Coming Soon",
        "treatments.newTreatmentsComingSoon": "New treatments coming soon",
        "treatments.notifyAvailable": "Notify me when available",

        "treatments.badgeSession1": "1st Session",
        "treatments.badgeSession2": "From 2nd session",
        "treatments.fromPrice": "From {price}",
        "treatments.perNail": "{price} / nail",

        // 1. Facial Cleansings
        "t.facial.pre": "Arrive with a clean face, without applied products or treatments. Recommendation: arrive with hair that has not been freshly washed.",
        "t.facial.post": "Properly hydrate your skin and use sunscreen.",

        "t.facial1.name": "Renovating Facial Ritual",
        "t.facial1.desc": "Comprehensive 60-minute facial treatment: deep cleansing, exfoliation, desincrustation solution, extraction (optional hair removal) and concentrated active ingredient after aesthetic assessment. Includes hydrating cream with facial massage, occlusive gel mask, cervical, chest and arm massage, sunscreen and lip balm.",
        "t.facial1.pre": "Avoid using exfoliating acids in the weeks prior; recommendation not to have freshly washed hair.",
        "t.facial1.post": "Apply daily SPF 50+ sunscreen and maintain good cleansing and hydration in the following days to extend the effect.",

        "t.facial2.name": "Maintenance Facial Ritual",
        "t.facial2.desc": "Comprehensive 60-minute facial treatment: deep cleansing, exfoliation, and concentrated active ingredient after aesthetic assessment. Includes hydrating cream with facial massage, occlusive gel mask, cervical, chest and arm massage, sunscreen and lip balm.",
        "t.facial2.pre": "Avoid using exfoliating acids in the weeks prior; recommendation not to have freshly washed hair.",
        "t.facial2.post": "Apply daily SPF 50+ sunscreen and maintain good cleansing and hydration in the following days to extend the effect.",

        "t.facialSupp1.name": "Eyebrow Design Supplement",
        "t.facialSupp2.name": "Upper Lip Waxing Supplement",

        "t.facialVitC.name": "Vitamin C Treatment",
        "t.facialVitC.desc": "Comprehensive 60-minute facial treatment: deep cleansing, exfoliation, desincrustation solution, extraction (optional hair removal) and concentrated active ingredient after aesthetic assessment. Includes hydrating cream with facial massage, occlusive gel mask, cervical, chest and arm massage, sunscreen and lip balm.",
        "t.facialVitC.pre": "Avoid using retinoids or exfoliating acids 48 hours before the session.",
        "t.facialVitC.post": "Apply daily SPF 50+ sunscreen and avoid prolonged direct sun exposure.",

        "t.facialHydra.name": "Deep Hydration Treatment",
        "t.facialHydra.desc": "Comprehensive 60-minute facial treatment: deep cleansing, exfoliation, desincrustation solution, extraction (optional hair removal) and concentrated active ingredient after aesthetic assessment. Includes hydrating cream with facial massage, occlusive gel mask, cervical, chest and arm massage, sunscreen and lip balm.",
        "t.facialHydra.pre": "Arrive with clean skin and discontinue aggressive exfoliants the day before.",
        "t.facialHydra.post": "Maintain proper hydration by drinking water and applying your trusted moisturizer.",

        "t.facialSpots.name": "Spot Reducing Treatment",
        "t.facialSpots.desc": "Comprehensive 60-minute facial treatment: deep cleansing, exfoliation, desincrustation solution, extraction (optional hair removal) and concentrated active ingredient after aesthetic assessment. Includes hydrating cream with facial massage, occlusive gel mask, cervical, chest and arm massage, sunscreen and lip balm.",
        "t.facialSpots.pre": "Avoid tanning and self-tanning products during the two weeks prior.",
        "t.facialSpots.post": "Use strict photoprotective sunscreen and hydrate the area daily.",

        "t.facialAntiage.name": "Anti-Aging Treatment",
        "t.facialAntiage.desc": "Comprehensive 60-minute facial treatment: deep cleansing, exfoliation, desincrustation solution, extraction (optional hair removal) and concentrated active ingredient after aesthetic assessment. Includes hydrating cream with facial massage, occlusive gel mask, cervical, chest and arm massage, sunscreen and lip balm.",
        "t.facialAntiage.pre": "Do not perform aggressive facial waxing or chemical peels in the same week.",
        "t.facialAntiage.post": "Avoid makeup for the first 12 hours and use firming products.",

        "t.facialRefresh.name": "Refreshing Treatment",
        "t.facialRefresh.desc": "Comprehensive 60-minute facial treatment: deep cleansing, exfoliation, desincrustation solution, extraction (optional hair removal) and concentrated active ingredient after aesthetic assessment. Includes hydrating cream with facial massage, occlusive gel mask, cervical, chest and arm massage, sunscreen and lip balm.",
        "t.facialRefresh.pre": "Avoid sunbathing on the day of treatment.",
        "t.facialRefresh.post": "Avoid saunas, hot baths, and intense exercise for 24 hours.",

        "t.dermapen.name": "Dermapen (Facial Microneedling)",
        "t.dermapen.desc": "Collagen induction treatment using microneedles to smooth marks, enlarged pores, and fine lines. *(Prior assessment recommended)*.",

        "t.facialHairCombo.name": "Facial Ritual + Hair Spa",
        "t.facialHairCombo.desc": "Comprehensive treatment combining deep facial care with a relaxing hair spa experience.",

        // 2. Hair Spa
        "t.hairOily.name": "Hair Spa Ritual for Oily Hair",
        "t.hairOily.desc": "Intensive hair treatment to purify, balance, and control excess sebum on the scalp.",
        "t.hairOily.pre": "Do not apply oils or heavy hair masks to the scalp before the appointment.",
        "t.hairOily.post": "Use a purifying balancing shampoo and avoid washing hair with very hot water.",

        "t.hairDry.name": "Hair Spa Ritual for Dry Hair",
        "t.hairDry.desc": "Intensive hair treatment to provide deep hydration and restore flexibility and softness to dry hair.",
        "t.hairDry.pre": "Gently detangle hair prior to the session.",
        "t.hairDry.post": "Use nourishing serum on ends and limit the use of flat irons or high-heat dryers.",

        "t.hairDamaged.name": "Hair Spa Ritual for Damaged Hair",
        "t.hairDamaged.desc": "Intensive hair treatment to repair hair fiber and restore vitality and shine to damaged hair.",
        "t.hairDamaged.pre": "Avoid chemical treatments (dyes, bleaching) in the 3 days prior.",
        "t.hairDamaged.post": "Apply a repairing mask once a week and protect from extreme heat.",

        "t.hairLoss.name": "Hair Loss Treatment",
        "t.hairLoss.desc": "Intensive hair treatment designed to strengthen the follicle, stimulate growth, and reduce hair loss.",
        "t.hairLoss.pre": "Arrive with a clean scalp, free of hairspray or gels, and gently brushed.",
        "t.hairLoss.post": "Combine with gentle scalp massages and avoid tight hairstyles.",

        "t.hairDandruff.name": "Dandruff/Flaking Hair Treatment",
        "t.hairDandruff.desc": "Intensive hair treatment to soothe the scalp, eliminate flaking, and prevent dandruff recurrence.",
        "t.hairDandruff.pre": "Do not scratch aggressively before the service, nor use harsh specific shampoos to avoid scalp overload.",
        "t.hairDandruff.post": "Use a gentle specific soothing shampoo and avoid blow-drying with hot air directly on the roots.",

        "t.body1.name": "Initial Assessment + Full Body Wood Therapy",
        "t.body1.desc": "Personalized aesthetic diagnosis followed by a complete body wood therapy session on arms, abdomen, back, buttocks, and legs to evaluate and activate the circulatory and lymphatic system.",
        "t.body2.name": "Targeted Sculpting Body Wood Therapy",
        "t.body2.desc": "Customized remodeling treatment focused on key body areas identified in the initial assessment. Designed to reduce cellulite, smooth orange-peel skin, reduce localized fat deposits, and drain toxins. *(Price varies based on treated body parts)*.",
        "t.body.pre": "Keep skin hydrated daily, drink plenty of water before appointment, and do not apply heavy creams/oils right before session.",
        "t.body.post": "Increase water consumption to support lymphatic drainage, avoid excessive salt, and engage in moderate physical activity.",

        "t.mani1.name": "Basic Natural Manicure (No Polish)",
        "t.mani1.desc": "Cleansing and polishing of cuticles, nail shaping and filing with deep nourishment and hydration.",
        "t.mani2.name": "Gel Polish Manicure (Without Reinforcement)",
        "t.mani2.desc": "Natural nail preparation, cuticle conditioning, and long-lasting gel polish.",
        "t.mani3.name": "Gel Polish Manicure with Graphene Reinforcement",
        "t.mani3.desc": "Advanced gel manicure with a structural graphene layer for extreme leveling, flexibility, and nail strength.",
        "t.mani4.name": "Sculpted Gel Manicure (Full Set) - Size S",
        "t.mani4.desc": "High-quality structural gel extension and modeling.",
        "t.mani5.name": "Sculpted Gel Manicure (Full Set) - Size M",
        "t.mani5.desc": "High-quality structural gel extension and modeling.",
        "t.mani6.name": "Sculpted Gel Manicure (Full Set) - Size L",
        "t.mani6.desc": "High-quality structural gel extension and modeling.",
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

        "t.nails.pre": "Do not excessively cut or pull cuticles in the days prior, and arrive with clean nails free of harsh chemicals.",
        "t.nails.post": "Apply cuticle oil daily, use gloves for household tasks, and hydrate hands and feet regularly.",

        "t.waxW1.name": "Eyebrow Design (Wax + Tweezers)",
        "t.waxW2.name": "Upper Lip Waxing",
        "t.waxW3.name": "Nose Waxing",
        "t.waxW4.name": "Underarms Waxing",
        "t.waxW5.name": "Arms Waxing",
        "t.waxW6.name": "Bikini Line Waxing",
        "t.waxW7.name": "Full Bikini Waxing",
        "t.waxW8.name": "Half Legs Waxing",
        "t.waxW9.name": "Full Legs Waxing",

        "t.waxM1.name": "Underarms Waxing",
        "t.waxM2.name": "Chest or Lower Back Waxing",
        "t.waxM3.name": "Abdomen Waxing",
        "t.waxM4.name": "Back & Shoulders Waxing",
        "t.waxM5.name": "Half Legs Waxing",
        "t.waxM6.name": "Full Legs Waxing",

        "t.wax.pre": "Gently exfoliate skin 24-48 hours before to prevent ingrown hairs, and do not apply lotions on the service day.",
        "t.wax.post": "Avoid sun exposure, saunas, chlorinated pools, and tight clothing during the first 24 hours.",

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

        "t.ipl.pre": "Shave the area with a razor 24 hours prior; do not pull hair from roots during treatment and avoid direct sun. Wear comfortable clothing.",
        "t.ipl.post": "Apply aloe vera gel to soothe skin, use high SPF on exposed areas, and avoid hot baths or excessive sweating for 24-48 hours.",

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
