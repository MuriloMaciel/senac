const slides = document.querySelector('.slides')
const img1 = document.querySelector('.ativo')
const img2 = document.querySelector('.slide2')
const img3 = document.querySelector('.slide3')
const btnAnterior = document.querySelector('.anterior')
const btnProximo = document.querySelector ('.proxima')

const imagens = document.querySelectorAll('.slides img');
let atual = 0;

function mostrar(novo) {
    imagens[atual].classList.remove('ativo');
    atual = novo;
    imagens[atual].classList.add('ativo');
}

function proxima() {
    mostrar((atual + 1) % imagens.length);
}

function anterior() {
    mostrar((atual - 1 + imagens.length) % imagens.length);
}