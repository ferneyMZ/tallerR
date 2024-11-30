function filtrarMayores(array, numero) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numero) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}


let numeros = [1, 5, 10, 15, 20];
let resultado = filtrarMayores(numeros, 10);
console.log(resultado);