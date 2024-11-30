function ordenarNum(arr){
    let n = arr.length;
    for (let i=0;i<n-1;i++){
        for (let j=0;j<n-i-1;j++){
            if (arr[j]>arr[j+1]){
                let tem=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= tem;
            }
        }
    }
    return arr;
}
let numeros =[37,73,55,77,33,90,66];
console.log(ordenarNum(numeros));