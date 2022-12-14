//? Transforma o array em string json
//? O método JSON.stringify() converte valores em javascript
//? para uma String  JSON. Esses valores podem ser substituidos
//? especificando a função replacer, ou incluindo somente
//? as propriedades específicas, quando o array
//? do replacer for especificado.

console.log(JSON.stringify({ x: 5, y: 6 }))
// {"x":5,"y":6}

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]))
// [3,"false",false]

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] }))
// {"x":[10,null,null,null]}

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)))
// "2006-01-02T15:04:05.000Z"

