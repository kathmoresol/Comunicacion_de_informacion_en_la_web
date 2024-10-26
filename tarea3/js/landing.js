document.getElementById('form-asistencia').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("¡Gracias por confirmar tu asistencia!");
  });
  

  // Función para desplazarse al inicio de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // Función para desplazarse al final de la página
  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
  
