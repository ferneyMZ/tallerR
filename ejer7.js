function esPalindromo(palabra) {
    palabra = palabra.replace(/\s+/g, '').toLowerCase();
    
    function verificar(inicio, fin) {
        if (inicio >= fin) return 'es palidromo';
        if (palabra[inicio] !== palabra[fin]) return 'no es palindromo';
        return verificar(inicio + 1, fin - 1);
    }
    
    return verificar(0, palabra.length - 1);
}


console.log(esPalindromo("reconocer")); 
console.log(esPalindromo("programar"));  