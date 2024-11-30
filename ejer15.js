function encontrarDuplicados(array) {
    let contador = {};
    let duplicados = [];

    for (let elemento of array) {
        contador[elemento] = (contador[elemento] || 0) + 1;
    }

    for (let [elemento, cantidad] of Object.entries(contador)) {
        if (cantidad > 1) {
            duplicados.push(elemento);
        }
    }

    return duplicados;
}

const arrayEjemplo = [7, 2, 3, 6, 4, 3, 7];
console.log(encontrarDuplicados(arrayEjemplo)); 