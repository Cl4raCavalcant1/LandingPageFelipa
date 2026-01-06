/* =========================================
   1. MENU MOBILE (ABRIR E FECHAR)
   ========================================= */
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('.nav');

if(mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Troca o ícone de barras para X (opcional, visual)
        const icon = mobileMenuIcon.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuIcon.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

/* =========================================
   2. HEADER MUDAR AO ROLAR (GLASSMORPHISM)
   ========================================= */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// 1. MENU MOBILE (Abrir e Fechar)
const mobileBtn = document.querySelector('.mobile-menu-icon');
const nav = document.querySelector('.nav');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    nav.classList.toggle('active'); // Mostra ou esconde o menu
  });
}

// Fechar o menu automaticamente ao clicar em um link (melhor experiência no celular)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// 2. EFEITO NO HEADER AO ROLAR (Fica branco com sombra)
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});