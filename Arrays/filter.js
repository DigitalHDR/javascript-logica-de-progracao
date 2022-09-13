//? O método filter() cria um novo array com todos
//? os elementos que passaram no teste implementado
//? pela função fornecida.

// function isBigEnough(value) {
//   return value >= 10
// }

// var filtered = [12, 5, 8, 10, 130, 44].filter(isBigEnough)
// console.log(filtered)
//! (4) [12, 10, 130, 44]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | + |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function maior(valor, indice, array) {
//   return valor >= 10
// }

// let resultado = numeros.filter(maior)
// console.log(resultado)
//! (6) [10, 11, 12, 13, 14, 15]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Forma reduzida |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// let resultado = numeros.filter(function (valor) {
//   return valor >= 10
// })
// console.log(resultado)
//! (6) [10, 11, 12, 13, 14, 15]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Forma reduzida mais ainda |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let letras = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// let resultado = letras.filter(valor => valor >= 10)
// console.log(resultado)
