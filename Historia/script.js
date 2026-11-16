// Pegando os elementos do html

const lista = document.getElementById("lista");
const cabecalho = document.getElementById("cabecalho");
const bandeira = document.getElementById("bandeira");
const liMobile = document.getElementById("containerListaMobile");
let containerImg = document.getElementById("containerImg")


// Function para verificar o tamanho da tela
function ajustarMenuPorTela() {
    

    if (window.innerWidth >= 768) {
        lista.style.display = "";
        cabecalho.style.justifyContent = "";
        cabecalho.style.flexDirection = "";
        // removendo assim que a tela aumentar a class "girar" ao elemento bandeira
        bandeira.classList.remove("girar"); 

        containerImg.classList.remove("fundo")


        // Escondendo a lista mobile
        liMobile.style.display = "none";
    } else {
        cabecalho.style.flexDirection = "column";
        cabecalho.style.justifyContent = "center";
        lista.style.display = "none";
    }
}


// Adicionando um evento click na bandeira
bandeira.addEventListener("click", function () {
    
    // verificando novamente se o tamanho da pagina está menor que 768
    if (window.innerWidth < 768) {
        // Adicionando a class "girar" ao elemento bandeira
        bandeira.classList.toggle("girar");
        containerImg.classList.toggle("fundo");

        // se o elemento lista mobile for "none" enquanto estiver clicando ele transforma em "block"
        if (liMobile.style.display === "none") {
            liMobile.style.display = "block";
        } else {
            liMobile.style.display = "none";
        }
    }
});

ajustarMenuPorTela();
window.addEventListener("resize", ajustarMenuPorTela);