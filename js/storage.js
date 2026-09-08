// *Lógica de almacenamiento en localStorage
// Definimos la clave para almacenar los usuarios en localStorage
// Clave con la que identificaremos nuestra información en el almacenamiento local del navegador
const USERS_KEY = 'crudInventario_usuarios';

// Clave utilizada para almacenar el usuario actualmente logueado
const SESSION_KEY = 'crudInventario_sesion';

// function que obtiene todos los ususarios almacenados en localStorage
function obtenerUsuarios() {
    const usuariosGuardados = localStorage.getItem(USERS_KEY);

    // si existen datos guardados, los convierte nuevamente a un arreglo de javascript
    if (usuariosGuardados) {
        return JSON.parse(usuariosGuardados);
    }

    // si no existen datos, retorna un arreglo vacío
    return [];

}

// function que guarda un arreglo de usuarios en localStorage
function guardarUsuario(usuarios) {
    // convertimos el arreglo de usuarios a un string JSON para poder almacenarlo en localStorage
    const usuariosJSON = JSON.stringify(usuarios);

    // guardamos el arreglo de usuarios en localStorage bajo la clave definida
    localStorage.setItem(USERS_KEY, usuariosJSON);
}

// Function que guarda la sesión del usuario logueado en localStorage
function guardarSesion(sesion) {
    // Convertimos el objeto sesion a un string JSON para poder almacenarlo en localStorage
    const sesionJSON = JSON.stringify(sesion);
    // Guardamos la sesión en localStorage bajo la clave definida
    localStorage.setItem(SESSION_KEY, sesionJSON);
}

// Function que obtiene la sesión activa almacenada en localStorage
function obtenerSesion() {
    // Obtiene la sesión alamacenada como texto JSON desde localStorage usando la clave definida
    const sesionGuardada = localStorage.getItem(SESSION_KEY);
    // Si no existe niguna sesión guardada, retorna null
    if (!sesionGuardada) {
        return null;
    }
    // Convierte el texto JSON nuevamente en un objeto de JavaScript y lo retorna
    return JSON.parse(sesionGuardada);
}