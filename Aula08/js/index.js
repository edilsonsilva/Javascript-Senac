function primeira(valor) {
    return new Promise((resolver, reject) => {
        if (valor < 50) {
            resolver("Deu tudo certo")
        }
        else {
            reject("Deu tudo errao")
        }
    })
}
let usar = primeira(100);
usar
    .then((rs) => console.log(rs))
    .catch((er) => console.error(er))

