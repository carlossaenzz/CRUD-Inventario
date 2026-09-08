// *Lógica de registro y autenticación de usuarios
// Buscamos el formulario de registro por su ID
const registerForm = document.getElementById('registerForm');

// -----------------------
// Registro de usuarios
// -----------------------
// Ejecutamos la logica de registro solo si el formulario de registro existe en la página
// If evita errores si el formulario no existe en la página
// Si existe el formulario, agregamos un listener para el evento submit
if (registerForm) {
    // Formulario de registro, escucha el evento submit y cuando ocurra ejecuta esta función
    registerForm.addEventListener("submit", function (event) {
        // Evitamos que el formulario se envíe y recargue la página
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

// ------------------
// Inicio de sesión
// ------------------
// Buscamos el formulario de login por su ID
const loginForm = document.getElementById('loginForm');

// Ejecutamos el código solo si el formulario de login existe en la página
if (loginForm) {
    // Formulario de login, escucha el evento submit y cuando ocurra ejecuta esta función
    loginForm.addEventListener("submit", function (event) {
        // Evita que el formulario se envíe y recargue la página
        event.preventDefault();

        // Obtenemos los datos ingresados por el usuario en los campos de usuario y contraseña
        const username = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value.trim();

        // Obtenemos todos los usuarios registrados desde localStorage usando la función definida en storage.js
        const usuarios = obtenerUsuarios();

        // Buscamos un usuario que coincida con el nombre de usuario y la contraseña ingresados
        const usuarioEncontrado = usuarios.find(function (usuario) {
            return usuario.username.toLowerCase() === username.toLowerCase() && usuario.password === password
        });

        // Si no se encuentra un usuario que coincida, mostramos un mensaje de error y detenemos el proceso
        if (!usuarioEncontrado) {
            // Si no se encuentra un usuario que coincida, mostramos un mensaje de error
            console.error("Usuario o contraseña incorrectos.");
            return;
        }

        // Si se encuentra un usuario que coincida, creamos un objeto de sesión con la información del usuario logueado
        const sesion = {
            usuarioId: usuarioEncontrado.id,
            username: usuarioEncontrado.username,
            fechaInicio: new Date().toISOString()
        };

        // Guardamos la sesión del usuario logueado en localStorage usando la función definida en storage.js
        guardarSesion(sesion);

        // Si se encuentra un usuario que coincida, mostramos un mensaje de éxito y redirigimos a la página principal
        console.log("Inicio de sesión exitoso. Bienvenido, " + usuarioEncontrado.nombre + "!");

        // Redirige al dashboard después de inicar sesión
        window.location.href = "./pages/dashboard.html";

    });
}

// ---------------------------
// Protección del dashboard
// ---------------------------
// Verifica que exista una sesión activa antes de permitir el acceso al dashboard.
// Si no existe una sesión, redirige al usuario al formulario de inicio de sesión.
// buscamos la pagina del dashboard por su ID
const dashboardPage = document.getElementById("dashboardPage");

// Si estamos en la pagina del dashboard ejecuta esta lógica
if (dashboardPage) {
    // Obtiene la sesión activa almacenada
    const sesion = obtenerSesion();
    // Si no existe una esión, impide el acceso al dashboard
    if (!sesion) {
        window.location.href = "../index.html";
    }
}
