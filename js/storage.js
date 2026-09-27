//* Lógica de almacenamiento en localStorage
// Definimos la clave que utilizaremos para guardar y buscar el dato en localStorage
const USERS_KEY = 'crudInventario_usuarios';
const SESSION_KEY = 'crudInventario_sesion';

// Obtiene los ususarios guardados en localStorage
function obtenerUsuarios() {
    const usuariosGuardados = localStorage.getItem(USERS_KEY); // Obtine el valor guardado con la misma clave

    // si existen datos guardados, los convierte nuevamente a un arreglo de javascript
    if (usuariosGuardados) {
        return JSON.parse(usuariosGuardados);
    }

    // si no existen datos, retorna un arreglo vacío
    return [];

}

// Guarda un lista(arreglo) de usuarios en localStorage
function guardarUsuario(usuarios) {
    // convierte el arreglo de usuarios a un string JSON para poder almacenarlo en localStorage
    const usuariosJSON = JSON.stringify(usuarios);

    // guarda el arreglo de usuarios en localStorage bajo la clave definida
    localStorage.setItem(USERS_KEY, usuariosJSON);
}

// Function que guarda la sesión del usuario logueado en localStorage
function guardarSesion(sesion) {
    // Convierte el objeto sesion a un string JSON para poder almacenarlo en localStorage
    const sesionJSON = JSON.stringify(sesion);
    // Guarda la sesión en localStorage bajo la clave definida
    localStorage.setItem(SESSION_KEY, sesionJSON);
}

// Obtiene la sesión activa guardada en localStorage
function obtenerSesion() {
    // Obtiene la sesión guardada como texto JSON desde localStorage usando la clave definida
    const sesionGuardada = localStorage.getItem(SESSION_KEY);
    // Si no existe ninguna sesión guardada, retorna null
    if (!sesionGuardada) {
        return null;
    }
    // Convierte el texto JSON nuevamente en un objeto de JavaScript y lo retorna
    return JSON.parse(sesionGuardada);
}

// Elimina la sesión activa guardada en localStorage.
function eliminarSesion() {
    localStorage.removeItem(SESSION_KEY); // Elimina únicamente la información de la sesión actual
}