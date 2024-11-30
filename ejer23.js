
let boton = document.getElementById('Boton');
let lista = document.getElementById('Lista');
let input = document.getElementById('Input');


function añadirElemento() {
    let texto = input.value.trim(); 

    if (texto) { 
        let nuevoElemento = document.createElement('li'); 
        nuevoElemento.textContent = texto; 
        lista.appendChild(nuevoElemento); 
        input.value = ''; 
    } else {
        alert("Por favor, escribe algo."); 
    }
}

boton.addEventListener('click', añadirElemento);