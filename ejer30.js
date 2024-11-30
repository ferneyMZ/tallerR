
let seguimiento = document.getElementById('seguimiento');


document.addEventListener('mousemove', (event) => {
   
    seguimiento.style.left = `${event.pageX}px`;
    seguimiento.style.top = `${event.pageY}px`;
});