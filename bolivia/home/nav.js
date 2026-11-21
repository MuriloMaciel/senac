// Pegando os elementos do HTML
const lista = document.getElementById("lista");
const cabecalho = document.getElementById("cabecalho");
const bandeira = document.getElementById("bandeira");
const liMobile = document.getElementById("containerListaMobile");
const containerImg = document.getElementById("containerImg");

const BREAKPOINT_MOBILE = 768;

function fecharMenuMobile() {
  if (bandeira) bandeira.classList.remove("girar");
  if (containerImg) containerImg.classList.remove("fundo");
  if (liMobile) liMobile.style.display = "none";
}

// Função para verificar o tamanho da tela
function ajustarMenuPorTela() {
  const isDesktop = window.innerWidth >= BREAKPOINT_MOBILE;

  if (isDesktop) {
    if (lista) lista.style.display = "";
    if (cabecalho) {
      cabecalho.style.justifyContent = "";
      cabecalho.style.flexDirection = "";
    }
    fecharMenuMobile();
  } else {
    if (cabecalho) {
      cabecalho.style.flexDirection = "column";
      cabecalho.style.justifyContent = "center";
    }
    if (lista) lista.style.display = "none";
    if (liMobile && !liMobile.style.display) {
      liMobile.style.display = "none";
    }
  }
}

// Evento de clique na bandeira (menu mobile)
if (bandeira) {
  bandeira.addEventListener("click", function () {
    if (window.innerWidth < BREAKPOINT_MOBILE) {
      bandeira.classList.toggle("girar");
      if (containerImg) containerImg.classList.toggle("fundo");

      if (liMobile) {
        const estaOculto =
          getComputedStyle(liMobile).display === "none";
        liMobile.style.display = estaOculto ? "flex" : "none";
      }
    }
  });
}

ajustarMenuPorTela();
window.addEventListener("resize", ajustarMenuPorTela);