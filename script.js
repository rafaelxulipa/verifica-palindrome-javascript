//Utilizando funções reverse e split do javascript
function verificaPalavra() {
  var valorElemento = document.getElementById("palavra");
  var valor = valorElemento.value;
  let reversed = valor.split("").reverse().join("");
  if (valor == reversed) {
    //console.log("É palíndromo");
    var elementoValor = document.getElementById("resultado");
    var valorVerificado = "A palavra é palíndrome.";
    elementoValor.innerHTML = valorVerificado;
  } else {
    //console.log("Não é palídromo");
    var elementoValor = document.getElementById("resultado");
    var valorVerificado = "A palavra não é palíndrome.";
    elementoValor.innerHTML = valorVerificado;
  }
}

// console.log(verificaPalavra("reviver"));

// console.log(verificaPalavra("luzazul"));

//Utilizando uma verificação recursiva

// function verificaPalavra() {
//   var valorElemento = document.getElementById("palavra");
//   var valor = valorElemento.value;
//   let arrayString = [...valor];
//   let numDeLetras = valor.length - 1;
//   //let palidrome = true;

//   for (let i = numDeLetras, j = 0; i >= 0; i--, j++) {
//     let primeiraString = arrayString[j];
//     let ultimaString = arrayString[i];

//     if (ultimaString !== primeiraString) {
//       var elementoValor = document.getElementById("resultado");
//       var valorVerificado = "A palavra não é palíndrome.";
//       elementoValor.innerHTML = valorVerificado;
//     } else {
//       var elementoValor = document.getElementById("resultado");
//       var valorVerificado = "A palavra é palíndrome.";
//       elementoValor.innerHTML = valorVerificado;
//     }
//   }
// }