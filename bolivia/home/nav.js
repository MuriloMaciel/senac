
const lista = document.getElementById("lista")
const cabecalho = document.getElementById("cabecalho")

// 1. Controla o que aparece de acordo com a largura da tela
function ajustarMenuPorTela() {
    const larguraViewport = window.innerWidth;
    
    let bandeira = document.getElementById("bandeira")
    

    if (larguraViewport >= 768) {
        // Telas grandes: esconde o ícone do menu e mostra os links
 
         lista.style.display = "";
         cabecalho.style.justifyContent = "";
         cabecalho.style.flexDirection = "";
         
    } else {
        cabecalho.style.flexDirection = "column";
        cabecalho.style.justifyContent = "center";
        lista.style.display = "none";

        function bandeiraMenu(){
            bandeira.style.size = "500px";
        }
        }
}

ajustarMenuPorTela();
window.addEventListener("resize", ajustarMenuPorTela);

