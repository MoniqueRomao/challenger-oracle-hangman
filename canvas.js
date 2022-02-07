var quadro = document.querySelector("#forca");
var btnInicia = document.querySelector("#iniciar-jogo");
var ctx = quadro.getContext("2d");
ctx.lineWidth = 2;


function desenhaTraco(x1, x2) {
    ctx.beginPath(); //incrementar + 100
    ctx.moveTo(x, 750); // x1=100
    ctx.lineTo(x, 750); // x2=160
    ctx.stroke();
    ctx.closePath();
}

