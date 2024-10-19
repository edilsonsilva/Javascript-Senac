//fazer referência aos controles do formulário
const nome = document.getElementById("txtnome")
const email = document.getElementById("txtemail")
const telefone = document.getElementById("txttelefone")
const endereco = document.getElementById("txtendereco")
const idade = document.getElementById("txtidade")
//fazer uma referência ao botão salvar
const btnsalvar = document.getElementById("salvar")

btnsalvar.onclick = () => {
    /*
    Para realizar o cadastro de um novo cliente, iremos
    usar o comando fetch(buscar) para localizar uma 
    url com o endpoint cadastrar. Passar como parâmetro
    o método post e dados do formulário para a api de 
    cadastro do cliente    
    */
    fetch("http://10.26.49.20:3000/cadastrar",
        {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                nome: nome.value,
                email: email.value,
                endereco: endereco.value,
                telefone: telefone.value,
                idade: idade.value
            })
        })
        .then((resposta) => resposta.json())
        .then((rs) => alert(rs.msg))
        .catch((error) => console.error(`Erro na api -> ${error}`))

}

const lista = document.getElementById("lista")
//quando o documento carregar, deve montar a lista de clientes
// na tela
document.body.onload = () => {
    fetch("http://10.26.49.20:3000/listar")
        .then((resposta) => resposta.json())
        .then((rs) => {
            let saida = ""
            rs.dados.map((cli) => {
                saida += `<div class="card" style="width: 18rem;">
                <img src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png" class="card-img-top tamanho" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${cli.nome}</h5>
                  <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">E-Mail: ${cli.email}</li>
                  <li class="list-group-item">Telefone: ${cli.telefone}</li>
                  <li class="list-group-item">End: ${cli.endereco}</li>
                  <li class="list-group-item">Idade: ${cli.idade}</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="btn btn-danger">Excluir</a>
                  <a href="#" class="btn btn-info">Atualizar</a>
                </div>
              </div>`
            })
            lista.innerHTML = saida
        })
        .catch((error) => console.error(`Erro na api -> ${error}`))
}