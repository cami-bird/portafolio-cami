document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Validación de campos
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var asunto = document.getElementById('asunto').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    // Verificar si los campos están vacíos
    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Verificar si el correo electrónico es válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduzca un correo electrónico válido.');
        return;
    }

    alert('Formulario enviado correctamente.');
});