// *Lógica de registro y autenticación de usuarios
// Buscamos el formulario de registro por su ID
const registerForm = document.getElementById('registerForm');

// If evita errores si el formulario no existe en la página
// Si existe el formulario, agregamos un listener para el evento submit
if (registerForm) {
    // Formulario de registro, escucha el evento submit y cuando ocurra ejecuta esta función
    registerForm.addEventListener("submit", function (event) {
        // Prevenimos el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const username = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validamos que las contraseñas coincidan
        if (password !== confirmPassword) {
            console.error("Las contraseñas no coinciden.");
            return;
        }

        // Obtenemos los usuarios que ya existen en localStorage usando la función definida en storage.js
        const usuarios = obtenerUsuarios();

        // Verificamos si el correo electrónico ya está registrado
        const emailExistente = usuarios.find(function (usuario) {
            return usuario.email.toLowerCase() === email.toLowerCase();
        });

        // Si el correo electrónico ya existe, mostramos un mensaje de error y detenemos el proceso
        if (emailExistente) {
            console.error("El correo electrónico ya está registrado.");
            return;
        }

        // Verificamos si el nombre de usuario ya está registrado
        const usernameExistente = usuarios.find(function (usuario) {
            return usuario.username.toLowerCase() === username.toLowerCase();
        });

        // Si el nombre de usuario ya está registrado, mostramos un mensaje de error y detenemos el proceso
        if (usernameExistente) {
            console.error("El nombre de usuario ya está registrado.");
            return;
        }

        // Creamos objeto usuario con los datos del formulario y lo guardamos en localStorage
        // Si todo está bien, creamos un nuevo objeto de usuario con los datos proporcionados
        const usuario = {
            id: Date.now(),
            nombre: nombre,
            email: email,
            username: username,
            password: password,
            rol: "administrador",
            fechaRegistro: new Date().toISOString()
        };

        // Agregamos el nuevo usuario al arreglo de usuarios existente
        usuarios.push(usuario);

        // Guardamos el arreglo actualizado de usuarios en localStorage usando la función definida en storage.js
        guardarUsuario(usuarios);


        console.log("Usuario creado correctamente.")
        console.log("Nombre:", usuario.nombre);
        console.log("Correo:", usuario.email);
        console.log("Username:", usuario.username);

        registerForm.reset(); // Limpiamos el formulario después de registrar al usuario

    });
}
