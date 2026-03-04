// Menu hambuguer

const botao = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.cabecalho-menu-direita');

botao.addEventListener('click', () => {
    menu.classList.toggle('menu-aberto');
});