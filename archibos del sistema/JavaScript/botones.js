// Configuración de URLs
const buttonsConfig = [
    { id: 'formulario', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/formulario.html' },
    { id: 'trol', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/trol.html' },
    { id: 'principal', url: 'https://gabrielbaranello.github.io/folleto/pagina%20principal.html' },
    { id: 'mem_ram_8_gb', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20ram%208%20gb.html' },
    { id: 'mem_ram_16_gb', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20ram%2016%20gb' },
    { id: 'auriculares', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/auriculares.html' },
    { id: 'mem_rom', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'mouse_corriente', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mouse%20corriente.html' },
    { id: 'mouse_gamer_rgb', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mouse%20gamer%20rgb.html' },
    { id: 'teclas', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/teclas.html' },
    { id: 'ventilador', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'parlente', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'ventilador_rgb', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'tira_led_rgb', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'monitor', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'placa_madre', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'prosesador', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'fuente', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'cables', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' }
];

// Asignar eventos a cada botón
buttonsConfig.forEach(config => {
    const button = document.getElementById(config.id);
    if (button) {
        button.addEventListener('click', () => {
            window.location.href = config.url;
        });
    } else {
        console.error(`No se encontró el botón con id: ${config.id}`);
    }
});
