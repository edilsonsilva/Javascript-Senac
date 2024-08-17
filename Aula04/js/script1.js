for (let i = 1; i <= 5; i++) {
    document.getElementById("fotos").innerHTML += "<img src=img/foto" + i + ".jpg>"
}

for (let i = 1; i <= 5; i++) {
    document.getElementById("select_foto").innerHTML += "<option value=foto" + i + "> foto " + i + "</option>"
}

function abrirFoto() {
    let foto = document.getElementById("select_foto")
    //Vamos abrir uma nova guia no navegador
    //O primeiro parâmetro do comando window.open é a url
    //,ou seja, a página que será aberta. No nosso caso, passamos
    //o caminho da imagem para abrir. O segundo parâmetro é 
    //onde a imagem deve abrir. Escolhemos para abrir em uma 
    //guia chamada "exibir". Mas se você quiser, é possível
    //abrir na guia _blank. Assim o navegado irá abrir uma 
    //nova guia para cada página criada.
    window.open("img/" + foto.value + ".jpg", "exibir")
}