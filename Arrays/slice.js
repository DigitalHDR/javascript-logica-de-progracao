//? O método slice() retorna uma cópia de parte de um
//? array a partir de um subarray criado entre as posições
//? início e fim (fim não é necessário) de um array
//? original. O Array original não é modificado.

//? Valor de retorno
//? Um novo array contendo os elementos extraídos.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Retorna uma parte de um array existente |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga']
var citricos = frutas.slice(1, 3)
console.log(citricos)
//! (2) ['Laranja', 'Limao']