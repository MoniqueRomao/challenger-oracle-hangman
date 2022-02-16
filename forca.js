var jogando = false;
var erros;
var palavra;
var palavraForca = [];
var letrasCertas = [];
var teclasUsadas = [];

function inicia () {
    erros = 0;
    palavraForca = [];
    teclasPressionadas();
    if(usadas.length == palavras.length){
        alert("Todas as palavras foram usadas");  //chama as listas declaradas em palavraScreta.js
        return location.reload();  //se forem iguais a página é recarregada
    } else{
        jogando = true;
        palavra = definePalavra();
        mostraPalavra()
        erroDesenha();
    }
    
    
};

function verificaTecla(l){
    if (jogando){
        teclasUsadas.push(l);
        document.getElementById("tecla-" + l).disabled = true; //trava letras clicadas
        mudandoCorTecla("tecla-" + l);
        comparaPalavra(l);
        mostraPalavra();
    } else {
        alert("Você não iniciou o jogo");
    }
};

function mudandoCorTecla(tecla){
    if(erros < 6){
        document.getElementById(tecla).style.background = "#831d1c"; //tecla na cor marsala
    }
};

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
};

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
};

function erroDesenha(){
    switch(erros){ //se baseia no valor da var de parâmetro para exibir as imagens 
        case 0: 
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
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
            perdeu();
            break;
    }
};

function teclasPressionadas(){ //reseta o teclado
    for(var i = 0; i < teclasUsadas.length; i++){
        var t = teclasUsadas[i];
        var tecla = "tecla-" + t;
        document.getElementById(tecla).style.background = "#556b2f";
        document.getElementById(tecla).disabled = false;

    }
    teclasUsadas = [];
};

function perdeu(){
    letrasCertas = [];
    jogando = false;
    alert("Não foi desta vez, a palavra era " + palavra);

};

function venceu(){
    letrasCertas = [];
    jogando = false;
    alert("Você venceu!");
};

function adicionaPalavra(){
    var adiciona = document.querySelector("#input-nova-palavra").value;
    palavras.push(adiciona.toUpperCase());
};