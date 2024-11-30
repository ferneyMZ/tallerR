function generarNumerosAleatorios(cantidad) {
    let numerosAleatorios = [];
    
    for (let i = 0; i < cantidad; i++) {

       let numero = Math.floor(Math.random() * 100) + 1;
        numerosAleatorios.push(numero); 
    }
    
    return numerosAleatorios;
}


let cantidadDeNumeros = 20; 
let arrayNumerosAleatorios = generarNumerosAleatorios(cantidadDeNumeros);
console.log(arrayNumerosAleatorios);