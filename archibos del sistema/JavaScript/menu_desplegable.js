const dropdown = document.getElementById('dropdown');
const image = document.getElementById('image');

dropdown.addEventListener('change', (event) => {
    // Cambiar la imagen según la selección
    const selectedValue = event.target.value;
    image.src = selectedValue; // Cambia la ruta de la imagen
});