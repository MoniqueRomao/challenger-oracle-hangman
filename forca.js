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
        erroDesenha();
    }
    if (palavra.length == letrasCertas.length){
        venceu();
    }
}

function erroDesenha(){
    switch(erros){
        case 1: 
            document.getElementById("imagem").style.background = "url('./img/forca_cabeca.png')";
            break;
        case 2: 
            document.getElementById("imagem").style.background = "url('./img/forca_tronco.png')";
            break;
        case 3: 
            document.getElementsById("imagem").style.background = "url('./img/forca_bracoDireito.png')";
            break;
        case 4: 
            document.getElementsById("imagem").style.background = "url('./img/forca_bracoEsquerdo.png')";
            break;
        case 5: 
            document.getElementsById("imagem").style.background = "url('./img/forca_pernaDireita.png')";
            break;
        case 6: 
            document.getElementById("imagem").style.background = "url('./img/forca_pernaEsquerda.png')";
            break;
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