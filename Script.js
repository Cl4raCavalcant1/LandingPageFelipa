const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');

if (mobileBtn && navMenu) {
    const icon = mobileBtn.querySelector('i');
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            icon.classList.replace('fa-times', 'fa-bars');
        });
    });
}

// FAQ ACORDEÃO
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active');
    });
});

// ANIMAÇÕES
ScrollReveal().reveal('.hero-text', { origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.hero-img', { delay: 200 });
ScrollReveal().reveal('.card-minimal', { interval: 150 });
ScrollReveal().reveal('.testi-card', { interval: 200 });