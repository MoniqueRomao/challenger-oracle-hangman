var quadro = document.querySelector("#forca");
var btnInicia = document.querySelector("#iniciar-jogo");
var jogando = false;
var tecla;
var erros = 0;
var palavra;
var letrasErradas = [];
var letrasCertas = [];

function inicia () {
    if(usadas.length == palavras.length){
        alert("Todas as palavras foram usadas");
        location.reload(true);
    } else{
        jogando = true;
        desenhaPoste();
        var x1 = 100;
        var x2 = 160;
        palavra = definePalavra();
        console.log(palavra);
        console.log(usadas);
        for(var i = 0; i < palavra.length; i++){
            desenhaLinha(x1, x2);
            x1 += 100;
            x2 += 100;
        }
    }
    
    
};
function verificaTecla(){
    if (jogando){
        var char = event.keyCode;
        if (char >= 65 && char <= 90){
            tecla = String.fromCharCode(char);
            console.log(tecla)
            comparaPalavra();
        }
    
    } else {
        alert("Inicie um novo jogo");
    }
    
}
function comparaPalavra() {
    var l = tecla;
    if(palavra.includes(l)) {
        for (var i = 0; i < palavra.length; i++){
            if(palavra[i] == l){
                letraCorreta(l, i);
            }
        }
        letrasCertas.push(l);
    } 
    if (!palavra.includes(l) && !letrasErradas.includes(l)) {
        erros++;
        letraIncorreta(l, erros);
        letrasErradas.push(l);
        erroDesenha(erros);
    }
    if (palavra.length == letrasCertas.length){
        venceu();
    }
}

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
        perdeu();
    }

}

function perdeu(){
    letrasErradas = [];
    letrasCertas = [];
    erros = 0;
    jogando = false;
    alert("Game Over");

}

function venceu(){
    letrasErradas = [];
    letrasCertas = [];
    erros = 0;
    jogando = false;
    alert("Você venceu!");
}