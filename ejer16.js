function elementosComunes(array1, array2) {
    let comunes = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !comunes.includes(array1[i])) {
            comunes.push(array1[i]);
        }
    }
    return comunes;
}


const arrayA = [1, 2, 3, 4];
const arrayB = [3, 4, 5, 6];
console.log(elementosComunes(arrayA, arrayB));