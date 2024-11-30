let numero= [1, 2, 2, 3, 4, 5, 5];
let num = {};
let unico= numero.filter(dato=> {
    if (!num[dato]) {
       num[dato] = true; 
        return true;       
    }
    return false;          
});
console.log(unico)