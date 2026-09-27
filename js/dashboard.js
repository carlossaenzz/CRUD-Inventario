//* Lógica del dashboard

//* Protección del dashboard
// Verifica que exista una sesión activa antes de permitir el acceso al dashboard.
// Si no existe una sesión, redirige al usuario al formulario de inicio de sesión.
// Obtiene la pagina del dashboard por su ID
const dashboardPage = document.getElementById("dashboardPage");

// Si estamos en la pagina del dashboard ejecuta esta lógica
if (dashboardPage) {

    // Obtiene la sesión activa almacenada
    const sesion = obtenerSesion();

    // Si no existe una sesión, impide el acceso al dashboard
    if (!sesion) {
        window.location.href = "../login.html";
    }
}