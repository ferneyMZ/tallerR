let numero=[3,5,8,7,1,9,];
let mayor= numero[0];

for(let i=1; i <numero.length;i++){
    if (numero[i]>mayor){
        mayor=numero[i];
    }
}
console.log(mayor);