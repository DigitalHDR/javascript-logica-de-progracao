//? O método forEach() executa uma dada função
//? em cada elemento de um array.

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element)
}
;[2, 5, 9].forEach(logArrayElements)
//! a[0] = 2
//! a[1] = 5
//! a[2] = 9

//parecido como o map()