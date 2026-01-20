// MENU MOBILE
const toggleBtn = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Troca o ícone de Barras para X
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// FAQ (PERGUNTAS FREQUENTES)
const faqButtons = document.querySelectorAll('.faq-btn');

faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
    });
});

// ANIMAÇÃO DE ROLAGEM (ScrollReveal)
ScrollReveal().reveal('.hero-text', { origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.hero-img', { origin: 'bottom', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.card', { interval: 100, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.title', { origin: 'top', distance: '20px', duration: 800 });