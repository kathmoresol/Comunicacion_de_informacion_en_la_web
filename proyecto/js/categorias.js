document.getElementById('menuOpciones').addEventListener('change', function() {
    var galeriaAnillos = document.querySelector('.galeriaAnillos');
    var galeriaJoyeria = document.querySelector('.galeriaJoyeria');

    galeriaJoyeria.style.display = 'none';
    galeriaAnillos.style.display = 'none';

    var opcionSeleccionada = this.value;

    if (opcionSeleccionada === 'anillos') {
        galeriaRopa.style.display = 'block';
    } else if (opcionSeleccionada === 'joyeria') {
        galeriaJoyeria.style.display = 'block';
    }
});

