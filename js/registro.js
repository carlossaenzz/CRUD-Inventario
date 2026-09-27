// * Lógica de registro y autenticación de usuarios
// Obtiene el formulario de registro por su ID
const registerForm = document.getElementById('registerForm');

// Ejecuta la lógica de registro solo si el formulario de registro existe en la página
// Si existe el formulario, agregamos un listener para el evento submit
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {

        // Evita que el formulario se envíe y recargue la página
        event.preventDefault();

        // Obtiene los datos ingresados en el formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const username = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Valida que las contraseñas coincidan antes de continuar
        if (password !== confirmPassword) {
            console.error("Las contraseñas no coinciden.");
            return;
        }

        // Obtiene los usuarios que ya existen en localStorage usando la función definida en storage.js
        const usuarios = obtenerUsuarios();

        // Verifica si el correo electrónico ya está registrado
        const emailExistente = usuarios.find(function (usuario) {
            return usuario.email.toLowerCase() === email.toLowerCase();
        });

        // Evita registrar dos cuentas con el mismo correo 
        if (emailExistente) {
            console.error("El correo electrónico ya está registrado.");
            return;
        }

        // Verifica si el nombre de usuario ya está registrado
        const usernameExistente = usuarios.find(function (usuario) {
            return usuario.username.toLowerCase() === username.toLowerCase();
        });

        // Evita registrar dos cuentas con el mismo nombre de usuario
        if (usernameExistente) {
            console.error("El nombre de usuario ya está registrado.");
            return;
        }

        // Crea el usuario después de pasar las validaciones
        const usuario = {
            id: Date.now(),
            nombre: nombre,
            email: email,
            username: username,
            password: password,
            rol: "administrador",
            fechaRegistro: new Date().toISOString()
        };

        // Agrega el nuevo usuario a la lista(String) existente
        usuarios.push(usuario);

        // Guarda la lista(String) actualizada en localStorage usando la función definida en storage.js
        guardarUsuario(usuarios);

        console.log("Usuario creado correctamente.")
        console.log("Nombre:", usuario.nombre);
        console.log("Correo:", usuario.email);
        console.log("Username:", usuario.username);

        registerForm.reset(); // Limpia el formulario después de registrar al usuario

    });
}