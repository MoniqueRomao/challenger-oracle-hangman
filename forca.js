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


function desenhaPoste() {
    ctx.beginPath();
    ctx.moveTo(30, 690);
    ctx.lineTo(30, 250);
    ctx.lineTo(200, 250);
    ctx.lineTo(200, 310);
    ctx.stroke();
    ctx.closePath();
}
function desenhaCabeca(){
    ctx.beginPath();
    ctx.arc(200, 350, 40, 355, Math.PI/2, true);
    ctx.stroke();
    ctx.closePath();
}
function desenhaTronco(){
    ctx.beginPath()
    ctx.moveTo(200, 391);
    ctx.lineTo(200, 535);
    ctx.stroke();
    ctx.closePath();
}
function desenhaPernaDireita(){
    ctx.beginPath();
    ctx.moveTo(200, 535);
    ctx.lineTo(155, 610);
    ctx.stroke();
    ctx.closePath();
}
function desenhaPernaEsquerda(){
    ctx.beginPath();
    ctx.moveTo(200, 535);
    ctx.lineTo(245, 610);
    ctx.stroke();
    ctx.closePath();
}
function desenhaBracoDireito(){
    ctx.beginPath();
    ctx.moveTo(200, 401);
    ctx.lineTo(155, 476);
    ctx.stroke();
}
function desenhaBracoEsquerdo(){
    ctx.beginPath();
    ctx.moveTo(200, 401);
    ctx.lineTo(245, 476);
    ctx.stroke();
}