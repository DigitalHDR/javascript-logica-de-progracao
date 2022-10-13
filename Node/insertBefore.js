var span = document.createElement('span') //? Cria um novo elemento <span> vazio

var sp2 = document.getElementById('elementoFilho')

var divPai = sp2.parentNode

// Insere o novo elemento no DOM antes de sp2
divPai.insertBefore(span, sp2)
