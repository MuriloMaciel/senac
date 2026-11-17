let indiceAtual = 0;
let intervaloAutoplay;

function mudarSlide(direcao) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  indiceAtual += direcao;

  if (indiceAtual >= totalItems) {
    indiceAtual = 0;
  } else if (indiceAtual < 0) {
    indiceAtual = totalItems - 1;
  }

  const inner = document.getElementById('carouselInner');
  inner.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

// 1. Inicia a troca automática a cada 3 segundos (3000 milissegundos)
function iniciarAutoplay() {
  intervaloAutoplay = setInterval(() => {
    mudarSlide(1);
  }, 3000);
}

// 2. Pausa quando o usuário passa o mouse em cima (opcional, melhora a experiência)
const carrossel = document.querySelector('.carousel');
carrossel.addEventListener('mouseenter', () => clearInterval(intervaloAutoplay));
carrossel.addEventListener('mouseleave', iniciarAutoplay);

// Dá o play inicial
iniciarAutoplay();