// FORMULARIO DE RESERVA

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {

    // Evita que la página se recargue
    evento.preventDefault();

    // Mostrar mensaje de confirmación
    alert("¡Reserva realizada con éxito! Nos pondremos en contacto contigo.");

    // Limpiar el formulario
    formulario.reset();

});