document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para os links do menu que apontam para a mesma página
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// FUNÇÃO PARA TROCAR AS ABAS DA PROGRAMAÇÃO
function openTab(event, tabId) {
    // Esconde todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Tira a cor azul de todos os botões
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostra o conteúdo clicado e pinta o botão de azul
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}