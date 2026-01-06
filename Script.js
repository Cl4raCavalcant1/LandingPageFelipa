/* =========================================
   MENU MOBILE (CORRIGIDO)
   ========================================= */
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');

if (mobileBtn && navMenu) {
    const icon = mobileBtn.querySelector('i');

    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Troca Bars por X
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha ao clicar em qualquer link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

/* =========================================
   ANIMAÇÕES
   ========================================= */
const sr = ScrollReveal({ distance: '40px', duration: 1000, delay: 200, reset: false });
sr.reveal('.hero-text', { origin: 'left' });
sr.reveal('.hero-img', { delay: 400 });
sr.reveal('.testi-card', { interval: 200 });