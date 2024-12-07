(function () {
    emailjs.init("dRfoJXhDlWOE6MBjR");
  })();
  
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const serviceID = 'service_03137d1';
    const templateID = 'template_zb0otns';
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Tu mensaje ha sido enviado con éxito.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }, (err) => {
        Swal.fire({
          title: 'Error',
          text: `No se pudo enviar el mensaje: ${err.text}`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
  });