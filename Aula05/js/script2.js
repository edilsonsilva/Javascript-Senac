function calculos() {

    let op = 0
    while (op != 9) {
        let n1 = prompt("Digite um número")
        let n2 = prompt("Digite outro número")
        op = prompt("Digite:\n1-Soma\n2-Subrair\n3-Multiplicar\n4-Dividir\n9-Sair")

        n1 = parseFloat(n1)
        n2 = parseFloat(n2)

        if (op == 1) {
            alert(n1 + n2)
        }
        else if (op == 2) {
            alert(n1 - n2)
        }
        else if (op == 3) {
            alert(n1 * n2)
        }
        else if (op == 4) {
            alert(n1 / n2)
        }
        else {
            break;
        }
    }




}

function anobissexto() {

    let anoi = prompt("Digite um ano inicial")
    let anof = prompt("Digite um ano final")
    while (anoi <= anof) {
        if (anoi % 4 == 0) {
            console.log(anoi)
        }
        anoi++
    }




}

function tabuada() {
    let n = prompt("Digite o valor da tabuada")
    let i = 1;
    while (i <= 10) {
        console.log(n + " x " + i + " = " + n * i)
        i++
    }

}