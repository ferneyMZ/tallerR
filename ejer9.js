function sumaPares(array){
    let suma=0;
    array.forEach(num => {
        if (num%2===0){
            suma+=num;
        }
    });
    return suma;
}
let numeros= [3,4,8,2,7,5,6];
console.log(sumaPares(numeros));