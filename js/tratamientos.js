/* js/tratamientos.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Acordeón para Tratamientos (Categorías Principales)
    const accordions = document.querySelectorAll('.treatment-group-header');

    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const group = header.parentElement;
            group.classList.toggle('open');
        });
    });

    // 1.1 Lógica del Acordeón para Subcategorías (Sub-grupos)
    const subAccordions = document.querySelectorAll('.treatment-subheading');

    subAccordions.forEach(subHeader => {
        subHeader.addEventListener('click', (e) => {
            e.stopPropagation();
            const subgroup = subHeader.parentElement;
            subgroup.classList.toggle('open');
        });
    });

    // 2. Filtros de Categorías de Tratamientos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const treatmentGroups = document.querySelectorAll('.treatment-group');
    const container = document.querySelector('.treatments-accordion-container');

    function applyFilter(filterValue) {
        // Quitar clase active de todos los botones y agregar al actual
        filterButtons.forEach(b => {
            if (b.getAttribute('data-filter') === filterValue) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        if (filterValue === 'all') {
            if (container) container.classList.remove('single-category-filtered');
            treatmentGroups.forEach(group => {
                group.style.display = '';
            });
        } else {
            if (container) container.classList.add('single-category-filtered');
            treatmentGroups.forEach(group => {
                const category = group.getAttribute('data-category');
                if (category === filterValue) {
                    group.style.display = '';
                    group.classList.add('open');
                } else {
                    group.style.display = 'none';
                    group.classList.remove('open');
                }
            });
        }
    }

    if (filterButtons.length > 0 && treatmentGroups.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');
                applyFilter(filterValue);
            });
        });

        // 3. Detección de Categoría mediante URL Query Parameter o Hash (#facial, #hairspa, #corporal, etc.)
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category') || window.location.hash.replace('#', '');

        if (categoryParam && document.querySelector(`.filter-btn[data-filter="${categoryParam}"]`)) {
            applyFilter(categoryParam);
            setTimeout(() => {
                const targetElement = document.getElementById(categoryParam) || document.querySelector(`.treatment-group[data-category="${categoryParam}"]`);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 150);
        }
    }
});
