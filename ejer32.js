function miMap(array, numero) {
    let resultado = []; 

   
    for (let i = 0; i < array.length; i++) {
       
        resultado.push(numero(array[i], i, array));
    }

    return resultado; 
}


let numeros = [1, 2, 3, 4, 5];
let cuadrados = miMap(numeros, num => num * num);

console.log(cuadrados); // [1, 4, 9, 16, 25]