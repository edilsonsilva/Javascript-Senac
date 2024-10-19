function infoFilme(dados) {
    let saida = ""
    saida += `<h2>${dados.title}</h2>`
    saida += `<p>${dados.overview}</p>`
    saida += `<p><strong>Lançamento: </strong>${dados.release_date}</p>`
    saida += `<p><strong>Média votos: </strong>${Math.round(dados.vote_average * 10)}%j</p>`

    document.getElementById("info").style.display = "flex"
    document.getElementById("poster").innerHTML = `<img src=https://image.tmdb.org/t/p/w500${dados.poster_path}>`
    document.getElementById("detalhe").innerHTML = saida
}


function carregarFilmes() {

    let lista = document.getElementById("lista")



    fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br&api_key=e8ee1b7136ab091a2fb872089bf3c840&page=1")
        .then((resposta) => resposta.json())
        .then((dados) => {
            console.log(dados.results)
            dados.results.map((f, i) => {
                // Vamos criar um elemento do tipo
                // div para cada filme mapeado
                let div_fm = document.createElement("div")
                // adicionar um atributo do tipo class para
                //formatar
                div_fm.setAttribute("class", "filme")

                div_fm.onclick = () => {
                    infoFilme(f);
                }


                // criar um elemento do tipo img para a 
                //capa do filme
                let img_capa = document.createElement("img")
                img_capa.src = `https://image.tmdb.org/t/p/w500${f.poster_path}`

                //criar o elemento do tipo p para a media de votos
                let p_votos = document.createElement("p")
                p_votos.setAttribute("class", "votos")
                p_votos.innerHTML = Math.round(f.vote_average * 10) + "%"

                let h2_titulo = document.createElement("h2")
                h2_titulo.innerHTML = f.title

                let p_lancamento = document.createElement("p")
                p_lancamento.setAttribute("class", "lancamento")
                p_lancamento.innerHTML = f.release_date

                // adicionar a imagem na div usando o comando
                // appendChild
                div_fm.appendChild(img_capa)
                div_fm.appendChild(p_votos)
                div_fm.appendChild(h2_titulo)
                div_fm.appendChild(p_lancamento)

                // Adicionar a div na lista
                lista.appendChild(div_fm)
            })
        })
        .catch(function (e) { console.error(e) })
}


// quando clicar no x(fechar) da 
//tela de informações do filme 
//o painel com as informações deve
//fechar. Vamos usar o comando 
//de css display none
document.getElementById("fechar").onclick = () => {
    document.getElementById("info").style.display = "none"
}