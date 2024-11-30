let personas = [
    { nombre: "Dardo", edad: 52 },
    { nombre: "Pedro", edad: 22 },
    { nombre: "Ana", edad: 89 },
    { nombre: "Alicia", edad: 55 },
    { nombre: "Carlos", edad: 21 },
    { nombre: "Capitanich", edad: 49 },
    { nombre: "Carla", edad: 66 },
    { nombre: "Altina", edad: 90 }
];

function generarTabla(data) {
    let tabla = '<table>';
    tabla += '<tr><th>Nombre</th><th>Edad</th></tr>'; 

    
    data.forEach(persona => {
        tabla += `<tr><td>${persona.nombre}</td><td>${persona.edad}</td></tr>`;
    });

    tabla += '</table>'; 
    document.getElementById('tablaContainer').innerHTML = tabla; 
}

generarTabla(personas);