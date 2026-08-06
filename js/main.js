/* js/main.js - Llum de Lluna */
document.addEventListener('DOMContentLoaded', async () => {

    // 0. Carga modular de componentes (Header y Footer)
    const loadComponent = async (selector, file) => {
        const elem = document.querySelector(selector);
        if (elem) {
            try {
                const res = await fetch(file);
                if (res.ok) {
                    const html = await res.text();
                    elem.outerHTML = html;
                }
            } catch (err) {
                console.warn(`No se pudo cargar de forma externa ${file}, usando HTML estático.`, err);
            }
        }
    };

    await Promise.all([
        loadComponent('#header-placeholder', 'header.html'),
        loadComponent('#footer-placeholder', 'footer.html')
    ]);

    // 1. Menú Móvil (Hamburger Menu)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Cerrar menú al hacer click en un enlace
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    // Identificar la página actual
    const currentPath = window.location.pathname;
    let page = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if (!page) page = 'index.html';
    const isHomePage = (page === 'index.html');

    // 2. Cabecera Fija con Scroll (Sticky Header)
    const header = document.getElementById('header');
    
    if (header) {
        if (isHomePage) {
            header.classList.add('auto-hide');
        }

        const handleScroll = () => {
            const threshold = isHomePage ? 120 : 20;
            if (window.scrollY > threshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    // 3. Marcar enlace activo según la página actual
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href === page || (page === 'index.html' && href.startsWith('index.html')))) {
            link.classList.add('active');
        }
    });

    // 4. Sistema de Notificaciones Toast
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    window.showToast = (message, isSuccess = true) => {
        const toast = document.createElement('div');
        toast.className = `toast ${isSuccess ? 'toast-success' : ''}`;
        toast.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>${message}</span>
        `;
        toastContainer.appendChild(toast);

        // Disparar animación
        setTimeout(() => toast.classList.add('show'), 10);

        // Desaparecer después de 4 segundos
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    };

    // 5. Manejo del Formulario de Contacto en Inicio
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const clientName = nameInput ? nameInput.value.trim() : '';
            
            showToast(`¡Gracias ${clientName ? clientName : ''}! Hemos recibido tu solicitud de cita. Te contactaremos pronto.`, true);
            contactForm.reset();
        });
    }

    // 7. Sistema de Dark Mode (Persistente con localStorage)
    const initThemeToggle = () => {
        const themeToggle = document.getElementById('themeToggle');
        const themeToggleText = document.getElementById('themeToggleText');
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const applyTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            if (themeToggleText) {
                themeToggleText.textContent = theme === 'dark' ? 'Modo Oscuro' : 'Modo Claro';
            }
        };

        const initialTheme = savedTheme === 'dark' || (!savedTheme && systemPrefersDark) ? 'dark' : 'light';
        applyTheme(initialTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }
    };

    initThemeToggle();

    // 8. Lógica del Botón Volver Arriba (Scroll to Top)
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
