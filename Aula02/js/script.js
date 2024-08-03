
// Criamos a variável cor para guardar a cor
// que o usuário irá digitar. Usamos, também o 
// comando chamado prompt que abre uma caixa de 
// mensagem para o usuário digitar a cor
cor = prompt("Digite uma cor para o fundo em inglês")

// A cor digitada pelo usuário ficou na variável
// cor e será usada para alterar a cor de fundo
// do body do nosso documento.
document.body.style.backgroundColor = cor
