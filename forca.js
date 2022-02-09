var jogando = false;
var tecla;
var erros = 0;
var palavra;
var letrasErradas = [];
var letrasCertas = [];

function inicia () {
    if(usadas.length == palavras.length){
        alert("Todas as palavras foram usadas");
        return location.reload(true);
    } else{
        jogando = true;
        desenhaPoste();
        var x1 = 100;
        var x2 = 160;
        palavra = definePalavra();

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
            comparaPalavra();
        }
    }
}

function comparaPalavra() {
    var l = tecla;
    if(palavra.includes(l)) {
        for (var i = 0; i < palavra.length; i++){
            if(palavra[i] == l){
                exibePalavra(l, i);
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

    for (var i = 0; i < palavra.length; i++){
        var l = palavra[i];
        exibePalavra(l, i);
    };
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

function adicionaPalavra(){
    var adiciona = document.querySelector("#input-nova-palavra").value;
    palavras.push(adiciona.toUpperCase());
}