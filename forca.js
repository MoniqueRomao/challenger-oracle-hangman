var jogando = false;
var erros = 0;
var palavra;
var palavraForca = [];
var letrasCertas = [];

function inicia () {
    if(usadas.length == palavras.length){
        alert("Todas as palavras foram usadas");  //chama as listas declaradas em palavraScreta.js
        return location.reload(true);  // se forem iguais a página é recarregada
    } else{
        jogando = true;
        palavra = definePalavra();
        mostraPalavra()
        console.log(palavra);
    }
    
    
};

function verificaTecla(l){
    if (jogando){
        document.getElementById("tecla-" + l).disabled = true; //trava letras clicadas
        mudandoCorTecla("tecla-" + l);
        comparaPalavra(l);
        mostraPalavra();
    }
}

function mudandoCorTecla(tecla){
    if(erros < 6){
        document.getElementById(tecla).style.background = "#831d1c"; //tecla na cor marsala
    }
}

function comparaPalavra(l) {
    if(palavra.includes(l)) { //verifica acerto
        for (var i = 0; i < palavra.length; i++){
            if(palavra[i] == l){
                palavraForca[i] = l; // usa a lista e índice para atribuir a letra ao HTML
                letrasCertas.push(l);
            }
        }
    } 
    if (!palavra.includes(l)) { //verifica erro
        erros++;
        erroDesenha();
    }
    if (palavra.length == letrasCertas.length){ //verifica se o jogadador venceu
        venceu();
    }
}
function mostraPalavra(){
    const palavraTela = document.querySelector("#palavra-secreta"); //desenha os traços usando o HTML
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
    switch(erros){ //se baseia no valor da var de parâmetro para exibir as imagens 
        case 1: 
            document.getElementById("imagem").style.background = "url('./img/forca_cabeca.png')";
            break;
        case 2: 
            document.getElementById("imagem").style.background = "url('./img/forca_tronco.png')";
            break;
        case 3: 
            document.getElementById("imagem").style.background = "url('./img/forca_bracoDireito.png')";
            break;
        case 4: 
            document.getElementById("imagem").style.background = "url('./img/forca_bracoEsquerdo.png')";
            break;
        case 5: 
            document.getElementById("imagem").style.background = "url('./img/forca_pernaDireita.png')";
            break;
        case 6: 
            document.getElementById("imagem").style.background = "url('./img/forca_pernaEsquerda.png')";
            break;
    }
}

function perdeu(){

    for (var i = 0; i < palavra.length; i++){
        var l = palavra[i];
    };
    letrasCertas = [];
    erros = 0;
    jogando = false;
    alert("Game Over");
}

function venceu(){
    letrasCertas = [];
    erros = 0;
    jogando = false;
    alert("Você venceu!");
}

function adicionaPalavra(){
    var adiciona = document.querySelector("#input-nova-palavra").value;
    palavras.push(adiciona.toUpperCase());
}