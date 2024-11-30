let imagenes = [
    'images.jpeg',
    'spacio.jpeg',
    'mapa.jpg',
    'bus.jpg',
    'stock-vector.jpg'
];

let indiceActual = 0;

let imagenElement = document.getElementById('imagen');

document.getElementById('siguiente').addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length; // Aumentar índice y volver al inicio si es necesario
    imagenElement.src = imagenes[indiceActual]; // Cambiar la imagen
});

document.getElementById('anterior').addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length; // Disminuir índice y volver al final si es necesario
    imagenElement.src = imagenes[indiceActual]; // Cambiar la imagen
});
