// buscamos el formulario de registro por su ID
const registerForm = document.getElementById('registerForm');

// if evita errores si el formulario no existe en la página
// si existe el formulario, agregamos un listener para el evento submit
if (registerForm) {
    // formulario de registro, escucha el evento submit y cuando ocurra ejecuta esta función
    registerForm.addEventListener("submit", function (event) {
        // prevenimos el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        console.log("Nombre:", nombre);
        console.log("Correo:", email);
        console.log("Username:", username);
        console.log("Las contraseñas coinciden:", password === confirmPassword);
    });
}
