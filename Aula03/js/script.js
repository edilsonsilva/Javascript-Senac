var nome_aluno = prompt("digite o nome do aluno")
var n1 = parseFloat(prompt("digite a primeira nota"))
var n2 = parseFloat(prompt("digite a segunda nota"))
var n3 = parseFloat(prompt("digite a terceira nota"))
var n4 = parseFloat(prompt("digite a quarta nota"))

var med = (n1 + n2 + n3 + n4) / 4


let rs = "";

if (med >= 6) {
    rs = "Aprovado"
}
else if (med <= 4) {
    rs = "Reprovado"
}
else {
    rs = "Recuperação"
}

document.getElementById("resultado").innerHTML = "<h2>Aluno: " + nome_aluno + "</h2>" +
    "<p>Primeira nota:" + n1 + "</p>" +
    "<p>Segunda nota:" + n2 + "</p>" +
    "<p>Terceira nota:" + n3 + "</p>" +
    "<p>Quarta nota:" + n4 + "</p>" +
    "<p>Média:" + med + "</p>" +
    "<p>Resultado: <strong>" + rs + "</strong></p>"