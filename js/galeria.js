/* js/galeria.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Filtros de Portfolio/Galería
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    let activeCards = Array.from(portfolioCards);

    if (filterButtons.length > 0 && portfolioCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Quitar active de botones
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                // Filtrar elementos
                portfolioCards.forEach(card => {
                    const categories = (card.getAttribute('data-category') || '').split(' ');
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.style.display = 'block';
                        // Pequeño delay para fade-in elegante
                        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.9)';
                        setTimeout(() => { card.style.display = 'none'; }, 300); // Coincide con transición CSS
                    }
                });

                // Actualizar lista de cards activas para la navegación del Lightbox
                setTimeout(() => {
                    activeCards = Array.from(portfolioCards).filter(card => card.style.display !== 'none');
                }, 310);
            });
        });
    }

    // 2. Lógica del Lightbox (Visualizador)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentIndex = 0;

    if (portfolioCards.length > 0) {
        // Voltear tarjeta (3D Card Flip) al hacer click/tap
        portfolioCards.forEach((card) => {
            card.addEventListener('click', () => {
                card.classList.toggle('is-flipped');
            });
        });
    }

    if (lightbox && lightboxImg) {
        const openLightbox = (card) => {
            const img = card.querySelector('.portfolio-img');
            const title = card.querySelector('.portfolio-overlay-title').innerText;
            const category = card.querySelector('.portfolio-overlay-category').innerText;

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.innerHTML = `<strong>${title}</strong> — ${category}`;
            
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
        };

        const closeLightbox = () => {
            lightbox.classList.remove('open');
            document.body.style.overflow = '';
        };

        const showNext = () => {
            if (activeCards.length <= 1) return;
            currentIndex = (currentIndex + 1) % activeCards.length;
            updateLightboxContent(activeCards[currentIndex]);
        };

        const showPrev = () => {
            if (activeCards.length <= 1) return;
            currentIndex = (currentIndex - 1 + activeCards.length) % activeCards.length;
            updateLightboxContent(activeCards[currentIndex]);
        };

        const updateLightboxContent = (card) => {
            const img = card.querySelector('.portfolio-img');
            const title = card.querySelector('.portfolio-overlay-title').innerText;
            const category = card.querySelector('.portfolio-overlay-category').innerText;

            // Transición suave al cambiar de imagen
            lightboxImg.style.opacity = '0';
            setTimeout(() => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxCaption.innerHTML = `<strong>${title}</strong> — ${category}`;
                lightboxImg.style.opacity = '1';
            }, 150);
        };

        // Event Listeners para controles del Lightbox
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxNext) lightboxNext.addEventListener('click', showNext);
        if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

        // Cerrar al hacer click fuera de la imagen
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Controles de teclado
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('open')) return;
            
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'ArrowLeft') {
                showPrev();
            }
        });
    }
});
