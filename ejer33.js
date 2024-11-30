let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Generar un número aleatorio entre 1 y 100
let intentos = 0; // Contador de intentos

document.getElementById('adivinarBtn').addEventListener('click', () => {
    let numeroUsuario = parseInt(document.getElementById('numeroInput').value);
    let resultadoDiv = document.getElementById('resultado');
    intentos++; // Incrementar el contador de intentos

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        resultadoDiv.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        return;
    }

    if (numeroUsuario === numeroAleatorio) {
        resultadoDiv.textContent = `¡Correcto! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`;
        document.getElementById('numeroInput').disabled = true; // Deshabilitar el input
        document.getElementById('adivinarBtn').disabled = true; // Deshabilitar el botón
    } else if (numeroUsuario < numeroAleatorio) {
        resultadoDiv.textContent = 'El número es mayor. Intenta nuevamente.';
    } else {
        resultadoDiv.textContent = 'El número es menor. Intenta nuevamente.';
    }
});