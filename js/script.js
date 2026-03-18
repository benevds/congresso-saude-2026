// =====================================================================
// 1. FUNÇÃO DE ABAS DA PROGRAMAÇÃO (TABELA)
// O que faz: Esconde todas as tabelas e mostra apenas a do dia clicado.
// Onde é usado: Na página de programação (programacao.html).
// =====================================================================
function openTab(event, tabId) {
    // Esconde todos os conteúdos de tabelas
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Tira a cor azul de todos os botões de dia
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostra a tabela que foi clicada e pinta o botão dela de azul
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}


// =====================================================================
// 2. EVENTOS QUE CARREGAM JUNTO COM A PÁGINA
// O que faz: Agrupa scripts que precisam que o HTML já esteja carregado.
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------------
    // A) ROLAGEM SUAVE (SMOOTH SCROLL)
    // O que faz: Quando clica em um link com "#" (ex: #datas), a página 
    // desliza suavemente até a seção em vez de pular direto de forma seca.
    // -----------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Só executa se o href tiver um nome depois do #
            if (targetId !== "#") {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // (Bônus) Fecha o menu do celular automaticamente 
                    // depois que você clica em um link
                    const navLinks = document.querySelector('.nav-links');
                    const mobileMenu = document.querySelector('#mobile-menu');
                    if(navLinks && mobileMenu) {
                        navLinks.classList.remove('active');
                        mobileMenu.classList.remove('is-active');
                    }
                }
            }
        });
    });

    // -----------------------------------------------------------------
    // B) LÓGICA DO MENU HAMBÚRGUER (CELULAR)
    // O que faz: Abre e fecha a lista de links quando clica nas 3 barrinhas.
    // Onde é usado: Em todas as páginas quando abertas na tela do celular.
    // -----------------------------------------------------------------
    const mobileMenu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Só roda o código se as barrinhas existirem na página
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });
    }
});