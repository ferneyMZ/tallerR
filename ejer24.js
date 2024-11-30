
 let cuenta = 0;


 let boton = document.getElementById('Boton');
let contadorDiv = document.getElementById('contador');

 function aumentarContador() {
     cuenta++; 
     contadorDiv.textContent = cuenta; 
 }


 boton.addEventListener('click', aumentarContador);