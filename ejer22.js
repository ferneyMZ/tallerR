let input = document.getElementById('miInput');
let resultado = document.getElementById('resultado');


input.addEventListener('input', () => {
    resultado.textContent = input.value; 
});