// Protección del dashboard
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

// Menú lateral responsive
// Obtiene los elementos de la pagina por su ID
const menuButton = document.getElementById("menuButton");
const menuCloseButton = document.getElementById("menuCloseButton");
const sidebar = document.querySelector(".dashboard__sidebar");

// Verifica que los elementos existan antes de agregar los eventos
if (menuButton && menuCloseButton && sidebar) {
    // Abre la barra lateral
    // Agrega temporalmente el modificador BEM --open para mostrar la barra lateral
    // Esta clase no está fija en el HTML porque representa el estado abierto del menú
    menuButton.addEventListener("click", function () {
        sidebar.classList.add("dashboard__sidebar--open");
    });

    // Cierra la barra lateral
    // Elimina el modificador --open para volver a ocultar la barra lateral
    menuCloseButton.addEventListener("click", function () {
        sidebar.classList.remove("dashboard__sidebar--open");
    });
}