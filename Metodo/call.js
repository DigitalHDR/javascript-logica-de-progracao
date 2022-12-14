//? Introdução
//? O método call() invoca uma função com um dado valor this
//? e argumentos passados individualmente.

// Nota: Apesar de a sintaxe desta função ser quase idêntica
// à de apply(), a principal diferença é que call() aceita
// uma lista de argumentos, enquanto apply() aceita um
// único array de argumentos.

//? Sintaxe
// fun.call(thisArg[, arg1[, arg2[, ...]]])

//? Parâmetros
//? thisArg
// O valor de this proveu a chamada para fun. Note que this pode
// não ser o valor atual visto pelo método: se esse método é uma
// função em non-strict mode (en-US) code, null e undefined serão
// reescritos com o objeto global, e valores primitivos serão encaixados.

//? arg1, arg2, ...
// Argumentos para o objeto.

