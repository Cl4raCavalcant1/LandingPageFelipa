/* =========================================
   1. MENU MOBILE (ABRIR E FECHAR)
   ========================================= */
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('.nav');
const icon = mobileMenuIcon ? mobileMenuIcon.querySelector('i') : null;

if (mobileMenuIcon && navMenu) {
    mobileMenuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Troca o ícone de barras para X
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

/* =========================================
   2. HEADER MUDAR AO ROLAR
   ========================================= */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});