// Definir un objeto con valores asociados a cada archivo HTML
const valoresPorArchivo = {
    "auriculares.html": "$50",
    "mem ram 8 gb.html": "$100",
    "mem ram 16 gb.html": "$150",
    "auriculares.html": "$50",
    "mem ram 8 gb.html": "$100",
    "mem ram 16 gb.html": "$150",
    "auriculares.html": "$50",
    "mem ram 8 gb.html": "$100",
    "mem ram 16 gb.html": "$150",
    "auriculares.html": "$50",
    "mem ram 8 gb.html": "$100",
    "mem ram 16 gb.html": "$150",
    "auriculares.html": "$50",
    "mem ram 8 gb.html": "$100",
    "mem ram 16 gb.html": "$150",
    "auriculares.html": "$50",
    "auriculares.html": "$50",
    "mem_ram_8gb.html": "$100",
    "mem_ram_16gb.html": "$150"
    // Agrega más archivos y valores según sea necesario
};

// Obtener el nombre del archivo actual
let nombreArchivo = window.location.pathname.split("/").pop();
console.log("Archivo cargado:", nombreArchivo); // Depuración

// Buscar el elemento h2 por su id y asignar el valor correspondiente
let titulo = document.getElementById("titulo");
if (titulo && valoresPorArchivo[nombreArchivo]) {
    titulo.textContent = valoresPorArchivo[nombreArchivo];
} else {
    console.error("No se encontró un valor para el archivo:", nombreArchivo);
}