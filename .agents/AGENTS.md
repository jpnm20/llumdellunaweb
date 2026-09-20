# Reglas de Generación de Contenido y Publicaciones para Llum de Lluna

## 📸 Reglas Permanentes para Publicaciones de Instagram

1. **Ubicación de Archivos**:
   - Todas las páginas web generadoras de publicaciones para Instagram deben crearse y almacenarse obligatoriamente dentro del directorio `instagram-posts/<nombre-post>.html`.
   - Cada nueva publicación se debe registrar e incorporar al índice/catálogo general en `instagram-posts/index.html`.
   - Queda prohibido dejar archivos de publicaciones en la raíz del sitio web (`/`).

2. **Identidad Visual y Paleta Oficial**:
   - **Fondo Principal**: Malva `#C9B3B9` sólido (color de marca extraído del isotipo `logo IG 1.png`).
   - **Tipografía**: Títulos en `Cormorant Garamond` (Blanco `#FFFFFF`) y subtítulos/cuerpo en `Montserrat` (Acentos en Beige `#E3DCD1` y Verde Salvia `#8B9986`).
   - **Logotipo Integrado**: Utilizar `images/logo IG 1.png` sin sombras ni relieves (`filter: none`).

3. **Formato y Exportación HD**:
   - **Formato Vertical**: Relación de aspecto 4:5 oficial para publicaciones de Instagram (Portrait).
   - **Resolución de Exportación**: Salida nativa exacta de **1080px × 1350px** (usando `html2canvas` a escala 2.25x sobre visor de 480px × 600px).

4. **Funcionalidades Estándar Obligatorias**:
   - **Visor Interactivo**: Navegación entre diapositivas con botones previa/siguiente e indicadores de punto (`dots`).
   - **Descarga en 1-Clic**: Botones para `Descargar Diapositiva Actual (PNG HD)`, `Descargar Vídeo MP4 (Paso Activo)`, `Descargar Todos los Vídeos (Archivos MP4 HD)` y `Descargar Carrusel Completo (Imágenes PNG HD)` configurados a 1080x1350px.
   - **Panel de Copy Trilingüe & Hashtags**: Caja lateral con el texto optimizado redactado en **Castellano, Valenciano e Inglés (en ese orden exacto)** y botón de 1-clic `Copiar Texto de Publicación`.
   - **Centrado Simétrico**: Contenidos maquetados con `margin: auto 0` para una distribución equilibrada sin huecos excesivos.
   - **Mapas Limpios**: Usar gráficos vectoriales o imágenes estáticas sin barras de Google ni popups de estrellas o comentarios.

---

## 🎥 Reglas Especiales para Carruseles de Instagram con Vídeos de Pasos

1. **Estructura Estándar del Carrusel de Vídeo**:
   - **Diapositiva 1 (Portada)**: Imagen fotográfica de alta calidad con degradado sutil (`linear-gradient(180deg, rgba(20,14,16,0.48)...)`), el título del tratamiento en `Cormorant Garamond` color `#E3DCD1`, e imagen auto-orientada y encuadrada (hacia arriba/derecha en 85% 15% o según la composición).
   - **Diapositivas Intermedias (Vídeos de Pasos)**:
     - Cabecera superior en tono Lila/Malva (`#C9B3B9`) con el logo `images/logo IG 1.png` a la izquierda y el **nombre exclusivo del paso** a la derecha (sin prefijos numéricos estilo "PASO 01 / 08").
     - Contenedor de vídeo a pantalla completa inferior con esquinas redondeadas (`border-radius: 14px`, `margin: 10px 12px 14px`).
     - Banda inferior translúcida sobre el vídeo con la descripción concisa del paso en **1 sola línea**.
   - **Diapositiva Final (Reserva & Promoción)**:
     - Titular principal en `Cormorant Garamond` (ej: *"Regálale a tu piel este momento"*).
     - Tarjeta de oferta translúcida (`.promo-offer-card`) con etiqueta destacada en Beige (`.promo-badge-tag`), título en beige/blanco, subtítulo explicativo y **letra pequeña (disclaimer) a 0.60rem en cursiva** especificando condiciones, pago por adelantado y año correspondiente.
     - Píldora de ubicación (`📍 L'Eliana, Valencia`) y contacto de WhatsApp.

2. **Gestión de Vídeo y Rendimiento del Navegador (Sin Sobrecarga)**:
   - **Prohibido `autoplay` masivo en HTML**: No incluir el atributo `autoplay` en las etiquetas `<video>` del HTML inicial ni `preload="auto"` en todas a la vez para evitar agotar los descodificadores hardware del navegador.
   - **Modo de Carga**: Usar `preload="metadata"` por defecto y precargar dinámicamente solo la diapositiva siguiente en JS.
   - **Reproducción Exclusiva de Diapositiva Activa**: Controlar por JavaScript (`playActiveVideo`) la reproducción de la diapositiva activa y pausar inmediatamente (`pause()` + `currentTime = 0`) las diapositivas inactivas.
   - **Interacción Táctil/Clic**: Incluir listener de clic sobre el contenedor del vídeo para permitir reproducir/pausar manualmente.

3. **Encuadre Centrado en la Clienta (Sin Zoom Excesivo)**:
   - Para vídeos de pasos donde la facialista aparezca en la parte superior, aplicar `object-position: center 35%` (o valor sutil equivalente) sin escalado forzado (`transform: none`) para ocultar el rostro de la especialista y centrar la toma de manera natural en la clienta.

4. **Botones de Exportación Obligatorios**:
   - `Descargar Diapositiva Actual (PNG HD 1080x1350)`
   - `Descargar Vídeo MP4 (Paso Activo)`
   - `Descargar Todos los Vídeos (Archivos MP4 HD)` (descarga secuencial en bucle de todos los MP4 del carrusel)
   - `Descargar Carrusel Completo (Imágenes PNG HD)` (exportación en bucle con html2canvas a escala 2.25x)

5. **Panel de Copy Trilingüe**:
   - Incluir en la caja lateral los textos completos para Instagram en **Castellano, Valenciano e Inglés (en ese orden exacto)**, detallando la secuencia numerada de pasos, emoticonos, bloque de promoción con condiciones e indicando año, y hashtags de marca.

