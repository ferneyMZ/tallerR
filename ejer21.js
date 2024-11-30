
let boton = document.getElementById('miBoton');
let parrafo = document.getElementById('miParrafo');


function cambiarTexto() {
    parrafo.textContent = "PASION DE UIN PUEBLO";
}


boton.addEventListener('click', cambiarTexto);