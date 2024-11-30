function contarFrecuencia(str) {
    const frecuencia = {};
    [...str.toLowerCase()].forEach(letra => {
        frecuencia[letra] = (frecuencia[letra] || 0) + 1;
    });
    return frecuencia;
}


console.log(contarFrecuencia("aranjuez"));