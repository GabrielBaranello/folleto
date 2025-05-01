// Definir un objeto con valores asociados a cada archivo HTML
const valoresPorArchivo = {
    "auriculares.html": "$50",
    "cables.html": "$50",
    "fuente.html": "$100",
    "mem_ram_8_gb.html": "$100",
    "mem_ram_16_gb.html": "$150",
    "mem ram 16 gb.html": "$150",
    "mem_rom.html": "$100",
    "monitor.html": "$50",
    "mouse_corriente.html": "$150",
    "mouse_gamer_rgb.html": "$50",
    "parlantes.html": "$100",
    "placa_madre.html": "$150",
    "prosesador.html": "$50",
    "taclas.html": "$100",
    "tira_led_rgb.html": "$150",
    "ventilador_rgb": "$50",
    "ventilador": "$50"
    // Agrega más archivos y valores según sea necesario
};

let nombreArchivo = window.location.pathname.split("/").pop();
console.log("Archivo cargado:", nombreArchivo);

let titulo = document.getElementById("titulo");
if (titulo && valoresPorArchivo[nombreArchivo]) {
    titulo.textContent = valoresPorArchivo[nombreArchivo];
} else {
    console.error("No se encontró un valor para el archivo:", nombreArchivo);
}