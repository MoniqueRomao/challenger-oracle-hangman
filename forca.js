var jogando = false;
var erros = 0;
var palavra;
var palavraForca = [];

function inicia () {
    if(usadas.length == palavras.length){
        alert("Todas as palavras foram usadas");
        return location.reload(true);
    } else{
        jogando = true;
        palavra = definePalavra();
        mostraPalavra();
        console.log(palavra);
    }
    
    
};

function verificaTecla(l){
    if (jogando){
        mudandoCorTecla("tecla-" + l);
        
    }
}

function mudandoCorTecla(tecla){
    if(erros < 6){
        document.getElementById(tecla).style.background = "#831d1c";
    }
}

function comparaPalavra() {
    var l = tecla;
    if(palavra.includes(l)) {
        for (var i = 0; i < palavra.length; i++){
            if(palavra[i] == l){
                mostra;
            }
        }
        letrasCertas.push(l);
    } 
    if (!palavra.includes(l) && !letrasErradas.includes(l)) {
        erros++;
        erroDesenha();
    }
    if (palavra.length == letrasCertas.length){
        venceu();
    }
}
function mostraPalavra(){
    const palavraTela = document.querySelector("#palavra-secreta");
    palavraTela.innerHTML = "";

    for(var i = 0; i < palavra.length; i++){
        if (palavraForca[i] == undefined){
            palavraForca[i] = "&nbsp;"; // ascii html da tecla espaço
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letra'>"+ palavraForca[i] +"</div>";
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letra'>"+ palavraForca[i] +"</div>";
        }
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