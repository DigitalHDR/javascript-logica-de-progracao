//? O método values() retorna um novo objeto de
//? Array Iterator que contém os valores para cada índice no array.

// var arr = ['w', 'y', 'k', 'o', 'p']
// var eArr = arr.values()
// console.log(eArr)
// //! Array Iterator {}

// for (let letter of eArr) {
//   console.log(letter)
//   //! w,y,k,o,p
// }

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Iteração alternativa |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var arr = ['w', 'y', 'k', 'o', 'p']
var eArr = arr.values()
console.log(eArr.next().value) //! w
console.log(eArr.next().value) //! y
console.log(eArr.next().value) //! k
console.log(eArr.next().value) //! o
console.log(eArr.next().value) //! p
