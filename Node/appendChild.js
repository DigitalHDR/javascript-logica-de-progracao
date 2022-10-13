//? Resumo sempre envia pro final (parecido com insertBefore)

var p = document.createElement('p')
p.innerHTML = 'versa'

document.getElementById('nissan').appendChild(p)
//! dentro do id nissan, é enviado a var p com o texto versa
//! que é o elemento que criamos em cima
