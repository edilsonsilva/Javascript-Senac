function somaArray(array) {
    let rs = 0
    for (let i = 0; i <= array.length - 1; i++) {
        rs += array[i]
    }
    return rs
}
[5, 6, 7, 1, 2]

function mediaArray(array) {
    let rs = 0
    for (let i = 0; i <= array.length - 1; i++) {
        rs += array[i]
    }
    return rs / array.length
}

function media2(array) {
    return somaArray(array) / array.length;
}