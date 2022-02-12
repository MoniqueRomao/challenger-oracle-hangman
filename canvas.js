var quadro = document.querySelector("#forca");
var ctx = quadro.getContext("2d");
ctx.lineWidth = 5;

function desenhaLinha(x1, x2) {
    ctx.beginPath();
    ctx.moveTo(x1, 750); 
    ctx.lineTo(x2, 750); 
    ctx.stroke();
    ctx.closePath();
}
function exibePalavra(l, i) {
    ctx.beginPath();
    var x = 115 + (100 * i)
    ctx.font = "50px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText(l, x, 750, 50);
    ctx.closePath();
}
function letraIncorreta(l, erros){
    x = 300 + (100 * erros);
    ctx.font = "50px Verdana";
    ctx.fillStyle = "red";
    ctx.fillText(l, x, 400, 50);
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