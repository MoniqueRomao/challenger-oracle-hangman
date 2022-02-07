var quadro = document.querySelector("#forca");
var ctx = quadro.getContext("2d");
ctx.lineWidth = 2;


function desenhaLinha(x1, x2) {
    //incrementar + 100
    ctx.moveTo(x1, 750); // x1=100
    ctx.lineTo(x2, 750); // x2=160
    ctx.stroke();
}

function letraCorreta(l, x1) {
    //x1 = (100+15)*indice da letra
    ctx.font = "50px Verdana";
    ctx.fillText(l, x1, 750, 50);
}
function letraIncorreta(l, erros){
    x = 300 + (100 * erros);
    ctx.font = "50px Verdana";
    ctx.fillStyle = "red";
    ctx.fillText(l, x, 400, 50);
}