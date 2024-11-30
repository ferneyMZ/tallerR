let agregarBtn = document.getElementById('agregarBtn');
let tareaInput = document.getElementById('tareaInput');
let listaTareas = document.getElementById('listaTareas');


function agregarTarea() {
    let tareaTexto = tareaInput.value.trim(); /

    if (tareaTexto === '') {
        alert('Por favor, ingresa una tarea válida.');
        return; 
    }

    let li = document.createElement('li'); 
    li.textContent = tareaTexto; 

   
    let completarBtn = document.createElement('button');
    completarBtn.textContent = '✔️';
    completarBtn.onclick = () => {
        li.classList.toggle('completada'); 
    };

    
let eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = '❌';
    eliminarBtn.onclick = () => {
        listaTareas.removeChild(li); 
    };

    li.appendChild(completarBtn); 
    li.appendChild(eliminarBtn); 
    listaTareas.appendChild(li); 

    tareaInput.value = ''; 


agregarBtn.addEventListener('click', agregarTarea);


tareaInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        agregarTarea();
    }
})