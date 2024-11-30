
 let boton = document.getElementById('Boton');
 let contenido = document.getElementById('Contenido');


 function mostrarOcultar() {
     if (contenido.style.display === 'none' || contenido.style.display === '') {
         contenido.style.display = 'block'; 
         boton.textContent = 'Ocultar Contenido'; 
     } else {
         contenido.style.display = 'none'; 
         boton.textContent = 'Mostrar Contenido';   
     }
 }

      
 boton.addEventListener('click', mostrarOcultar);