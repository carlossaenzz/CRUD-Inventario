// *Lógica de almacenamiento en localStorage
// Definimos la clave para almacenar los usuarios en localStorage
// Clave con la que identificaremos nuestra información en el almacenamiento local del navegador
const USERS_KEY = 'crudInventario_usuarios';

// function que obtiene todos los ususarios almacenados en localStorage
function obtenerUsuarios() {
    const usuariosGuardados = localStorage.getItem(USERS_KEY);

    // si existen datos, los convierte nuevamente a un arreglo de javascript
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