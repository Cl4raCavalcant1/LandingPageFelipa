/* =========================================
   1. MENU MOBILE (ABRIR E FECHAR)
   ========================================= */
// Usamos getElementById para garantir que o script encontre os botões corrigidos no HTML
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');

// Só executa a lógica se os elementos existirem na página para evitar erros no console
if (mobileBtn && navMenu) {
    const icon = mobileBtn.querySelector('i');

    mobileBtn.addEventListener('click', () => {
        // Abre ou fecha a classe 'active' que configuramos no CSS
        navMenu.classList.toggle('active');
        
        // Troca o ícone de barras (fa-bars) pelo ícone de fechar (fa-times)
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

    // Fecha o menu automaticamente ao clicar em um link (melhor experiência no celular)
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
   2. HEADER MUDAR AO ROLAR (EFEITO GLASS)
   ========================================= */
const header = document.querySelector('.header');

// Adiciona uma sombra e fundo mais opaco quando o usuário rolar a página
window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});