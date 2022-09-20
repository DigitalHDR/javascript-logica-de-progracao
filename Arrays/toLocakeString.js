//? O método toLocaleString() retorna uma representaçao
//? de elementos de um array. Os elementos são convertidos
//? para Strings utilizando seus respectivos métodos
//? toLocaleString e essas cadeias são separadas por
//? uma sequência específica de localidade (separados por virgula ",")

//? Os elementos de um array são convertidos para strings
//? usando seus respectivos métodos toLocaleString:

//? >>>>> Object: Object.prototype.toLocaleString()
//? >>>>> Number: Number.prototype.toLocaleString()
//? >>>>> Date: Date.prototype.toLocaleString()

var numero = 1337
var data = new Date()
var meuArray = [numero, data, 'foo']

var resultado = meuArray.toLocaleString()

console.log(resultado)
//! 1.337,         19/09/2022 13:59:15,        foo

