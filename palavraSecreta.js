var palavras = ["AXIOMA", "AZULEJO", "AMPULHETA", "BLITZ", "BACALHAU",
"BOTIJA", "CRESPO", "CRIPTA", "CANDELABRO", "DUPLEX",
"FANTOCHE", "FREEZER", "GRALHA", "GIRAR", "GNOSTICO", "INDIGNO", "INTRIGANTE",
"MARFIM", "NOVELO", "OXIMETRO", "PSIQUE", "QUARTZO", "QUEPE", "QUIZ",
"TONTO", "VALSA", "VAPORIZAR", "VERTIGINOSO", "XADREZ", "XILOFONE"];

var usadas = [];


function definePalavra () {

    var indice = verificaIndice();

    var palavra = palavras[indice];

    return palavra;

}
function verificaIndice() {
    var i = Math.round(Math.random()*(palavras.length - 1)); //sorteia palavra
    if (!usadas.includes(i)){ //verifica se já foi usada
        usadas.push(i); 
        return i;
    } else {
        verificaIndice(); // recall se já foi usada
    }
}