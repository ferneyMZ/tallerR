let temporizador; 


function iniciarCuentaRegresiva(segundos) {
    let tiempoRestante = segundos;

    
    temporizador = setInterval(() => {
        if (tiempoRestante >= 0) {
            document.getElementById('temporizador').textContent = `Tiempo restante: ${tiempoRestante} segundos`;
            tiempoRestante--;
        } else {
            clearInterval(temporizador); 
            document.getElementById('temporizador').textContent = "¡Tiempo agotado!";
        }
    }, 1000);
}

document.getElementById('iniciar').addEventListener('click', () => {
    let segundos = parseInt(document.getElementById('segundosInput').value);
    if (isNaN(segundos) || segundos <= 0) {
        alert("Por favor, ingresa un número válido de segundos.");
        return;
    }
    iniciarCuentaRegresiva(segundos); 
});