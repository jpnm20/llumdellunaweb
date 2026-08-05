/* js/tratamientos.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Acordeón para Tratamientos
    const accordions = document.querySelectorAll('.treatment-group-header');
    
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const group = header.parentElement;
            
            // Opcional: Cerrar los otros acordeones cuando se abre uno (comportamiento clásico de acordeón)
            // Descomenta si prefieres que solo se abra uno a la vez:
            /*
            document.querySelectorAll('.treatment-group').forEach(otherGroup => {
                if (otherGroup !== group) {
                    otherGroup.classList.remove('open');
                }
            });
            */
            
            group.classList.toggle('open');
        });
    });

    // 2. Filtros de Categorías de Tratamientos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const treatmentGroups = document.querySelectorAll('.treatment-group');

    if (filterButtons.length > 0 && treatmentGroups.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Quitar clase active de todos los botones y agregar al actual
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                // Mostrar/Ocultar grupos según filtro
                treatmentGroups.forEach(group => {
                    const category = group.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        group.style.display = 'block';
                        // Abrir por defecto los filtrados para que se vean cómodamente
                        group.classList.add('open');
                    } else {
                        group.style.display = 'none';
                        group.classList.remove('open');
                    }
                });
            });
        });
        
        // Abrir el primer acordeón por defecto al cargar la página
        if (treatmentGroups[0]) {
            treatmentGroups[0].classList.add('open');
        }
    }
});
