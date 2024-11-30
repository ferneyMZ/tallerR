function validateEmail(email) {
   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(email); 
}


document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let emailInput = document.getElementById('emailInput').value.trim(); 
    let errorMessage = document.getElementById('error-message'); 

    if (validateEmail(emailInput)) {
        errorMessage.textContent = ''; 
        alert('Email válido!'); 
    } else {
        errorMessage.textContent = 'Por favor, ingresa una dirección de correo electrónico válida.'; 
    }
});