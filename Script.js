/* =========================================
   1. MENU MOBILE (ABRIR E FECHAR)
   ========================================= */
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');

// Só executa se os elementos existirem na página
if (mobileBtn && navMenu) {
    const icon = mobileBtn.querySelector('i');

    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Troca o ícone de bars (três traços) para times (X)
        if (icon) {
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Fecha o menu automaticamente ao clicar em qualquer link (melhor UX no celular)
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

/* =========================================
   2. ANIMAÇÕES (SCROLL REVEAL)
   ========================================= */
// Inicializamos o ScrollReveal uma única vez com as configurações padrão
const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    reset: false // 'false' para animar apenas uma vez ao carregar
});

// Aplicando as animações em ordem
sr.reveal('.hero-text', { origin: 'left', delay: 200 });
sr.reveal('.hero-image-container', { origin: 'bottom', delay: 400 });
sr.reveal('.pill-title', { origin: 'top', delay: 100 });
sr.reveal('.card-minimal', { interval: 150 }); // Aparecem um por um
sr.reveal('.about-text', { origin: 'left' });
sr.reveal('.about-image-wrapper', { origin: 'right' });
sr.reveal('.testi-card', { interval: 200 });
sr.reveal('.footer-cta', { origin: 'bottom' });