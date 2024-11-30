let palabras = ['manzana', 'banana', 'manzana', 'naranja', 'manzana'];
let palabraBuscada = 'manzana';

let contarPalabra = (array, palabra) => {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === palabra) {
            contador++;
        }
    }
    return contador;
};

console.log(contarPalabra(palabras, palabraBuscada));