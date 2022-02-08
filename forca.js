var quadro = document.querySelector("#forca");
var btnInicia = document.querySelector("#iniciar-jogo");

btnInicia.addEventListener("click", function() {
    var erros = 0;
    desenhaPoste();
    var x1 = 100;
    var x2 = 160;
    var palavra = definePalavra();
    console.log(palavra);
    console.log(usadas);
    for(var i = 0; i < palavra.length; i++){
        desenhaLinha(x1, x2);
        x1 += 100;
        x2 += 100;
    }
});



function erroDesenha(erros){
    if(erros == 1){
        desenhaCabeca();
    }
    if (erros == 2){
        desenhaTronco();
    }
    if (erros == 3){
        desenhaPernaDireita();
    }
    if (erros == 4){
        desenhaPernaEsquerda();
    }
    if (erros == 5){
        desenhaBracoDireito();
    }
    if (erros == 6){
        desenhaBracoEsquerdo();
    }

}


