var quadro = document.querySelector("#forca");
var btnInicia = document.querySelector("#iniciar-jogo");
var ctx = quadro.getContext("2d");
ctx.lineWidth = 2;

btnInicia.addEventListener("click", function() {
    desenhaPoste();
})


function erroDesenha(erro){
    if(erro == 1){
        desenhaCabeca();
    }
    if (erro == 2){
        desenhaTronco();
    }
    if (erro == 3){
        desenhaPernaDireita();
    }
    if (erro == 4){
        desenhaPernaEsquerda();
    }
    if (erro == 5){
        desenhaBracoDireito();
    }
    if (erro == 6){
        desenhaBracoEsquerdo();
    }

}


