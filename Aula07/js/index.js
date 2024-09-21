let somaDoisValores = function (x, y) {
    alert("Foi feita a soma de " + x + " e " + y + " igual " + (x + y))
}

let raiz = function (valor) {
    alert(`A raiz quadrada de ${valor} é ${Math.sqrt(valor)}`)
}

let potencia = (base, exp) => {
    let rs = Math.pow(base, exp)
    alert(`O resultado é ${rs}`)
}