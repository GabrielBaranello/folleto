// Configuración de URLs
const buttonsConfig = [
    { id: 'principal', url: 'https://gabrielbaranello.github.io/folleto/pagina%20principal.html'},
    { id: 'mem_ram_8_gb', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20ram%208%20gb.html' },
    { id: 'mem_ram_16_gb', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20ram%2016%20gb' },
    { id: 'auriculares', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/auriculares.html' },
    { id: 'mem_rom', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'mouse_corriente', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mouse%20corriente.html' },
    { id: 'mouse_gamer_rgb', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mouse%20gamer%20rgb.html' },
    { id: 'teclas', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/teclas.html' }/*,
    { id: 'mem_rom', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'mem_rom', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },
    { id: 'mem_rom', url: 'https://gabrielbaranello.github.io/folleto/archibos%20del%20sistema/justo%20antes%20de%20comprar/mem%20rom.html' },*/
];

// Asignar eventos a cada botón
buttonsConfig.forEach(config => {
    document.getElementById(config.id).addEventListener('click', () => {
        window.location.href = config.url;
    });
});
