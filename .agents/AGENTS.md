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
   - **Descarga en 1-Clic**: Botones para `Descargar Diapositiva Actual (PNG HD)` y `Descargar Carrusel Completo (Todas las Diapositivas HD)` configurados para guardar imágenes a 1080x1350px.
   - **Panel de Copy Trilingüe & Hashtags**: Caja lateral con el texto optimizado redactado en **Castellano, Valenciano e Inglés (en ese orden exacto)** y botón de 1-clic `Copiar Texto de Publicación`.
   - **Centrado Simétrico**: Contenidos maquetados con `margin: auto 0` para una distribución equilibrada sin huecos excesivos.
   - **Mapas Limpios**: Usar gráficos vectoriales o imágenes estáticas sin barras de Google ni popups de estrellas o comentarios.
