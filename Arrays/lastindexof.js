//? O método lastIndexOf() retorna o ultimo índice que
//? um certo elemento pode ser encontrado no array,
//? ou -1 se o elemento não estiver presente. O array
//? é pesquisado de trás para frente, começando pelo fromIndex.

// var array = [2, 5, 9, 2]
// var result = array.lastIndexOf(2)
// console.log(result)
// //! 3

// array.lastIndexOf(7)
// //! -1

// array.lastIndexOf(2, 3)
// //! 3

// array.lastIndexOf(2, 2)
// //! 0

// array.lastIndexOf(2, -2)
// //! 0

// array.lastIndexOf(2, -1)
// //! 3

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  | Encontrando todas as ocorrências de um elemento |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var indices = []
// var array = ['a', 'b', 'a', 'c', 'a', 'd']
// var element = 'a'
// var idx = array.lastIndexOf(element)
// while (idx != -1) {
//   indices.push(idx)
//   idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1
// }

// console.log(indices)
// //! (3) [4, 2, 0]