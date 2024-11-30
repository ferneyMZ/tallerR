function invertir(palabra){
    let ressul='';
    for(let i=palabra.length-1;i>=0;i--){
        ressul+=palabra[i];
    }
    return ressul;
}
console.log(invertir('alcolirykoz'));