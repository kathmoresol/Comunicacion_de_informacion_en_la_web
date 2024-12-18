document.addEventListener('DOMContentLoaded', () => {
    // Testimonios
    const testimonios = [
        { nombre: 'Carolina Morera', foto: 'imagenes/avatar1.jpg', comentario: 'Compre una suerter fue increible la calidad' },
        { nombre: 'Maria Solano', foto: 'imagenes/avatar2.jpg', comentario: 'Decidí llevar un collar de oro para mi madre fue increible su reaccion.' },
        { nombre: 'Michelle Cruz', foto: 'imagenes/avatar3.jpg', comentario: 'Estoy enamorado de todos los productos que puedo conseguir aqui' },
        { nombre: 'Tifanny Zepeda', foto: 'imagenes/avatar4.jpg', comentario: 'Entré de casualidad a esta boutique y fue lo mejor que me ha pasado' },
        { nombre: 'Betsy Campos', foto: 'imagenes/avatar10.jpg', comentario: 'Estoy emocionada de poder encontrar todo en un mismo lugar' },
        { nombre: 'Yuliana Calderon', foto: 'imagenes/avatar11.jpg', comentario: 'Recién me gradue y me compre un anillo para mi y fue de calidad.' }
    ];

    const testimoniosContainer = document.querySelector('.owl-carousel');

    // Añadir testimonios
    testimonios.forEach(testimonio => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
            <img src="${testimonio.foto}" alt="${testimonio.nombre}">
            <h3>${testimonio.nombre}</h3>
            <p>${testimonio.comentario}</p>
        `;
        testimoniosContainer.appendChild(item);
    });

    // Inicialización de Owl Carousel para testimonios
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Inicialización de contadores
    $('.number').each(function() {
        const $this = $(this);
        const countTo = $this.attr('data-number');
        $({ countNum: $this.text() }).animate(
            { countNum: countTo },
            {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            }
        );
    });
});
