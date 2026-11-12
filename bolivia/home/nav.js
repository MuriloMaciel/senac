const lista = document.getElementById("lista");
const cabecalho = document.getElementById("cabecalho");
const bandeira = document.getElementById("bandeira");
const liMobile = document.getElementById("containerListaMobile");
const bandeiraMobile = document.getElementById("bandeiraMobile");

// 1. Controla o que aparece de acordo com a largura da tela
function ajustarMenuPorTela() {
    const larguraViewport = window.innerWidth;

    if (larguraViewport >= 768) {
        bandeira.style.display = "";
        lista.style.display = "";
        cabecalho.style.justifyContent = "";
        cabecalho.style.flexDirection = "";


        if (liMobile) liMobile.style.display = "none";
    } else {
        bandeira.style.display = "block";
        cabecalho.style.flexDirection = "column";
        cabecalho.style.justifyContent = "center";
        lista.style.display = "none";
    }
}


bandeira.addEventListener("click", function () {

    bandeira.classList.toggle("girar");
    if (bandeiraMobile) {
        bandeiraMobile.classList.toggle("girar");
    }


    if (liMobile.style.display === "none" || liMobile.style.display === "") {
        liMobile.style.display = "block";
    } else {
        liMobile.style.display = "none";
    }
});

ajustarMenuPorTela();
window.addEventListener("resize", ajustarMenuPorTela);
