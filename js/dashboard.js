// Lógica del dashboard

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

// Modal de nuevo producto
// Obtiene los elementos necesarios para controlar el modal
const newProductButton = document.getElementById("newProductButton");
const productModal = document.getElementById("productModal");
const productModalClose = document.getElementById("productModalClose");
const cancelProductButton = document.getElementById("cancelProductButton");

// Verifica que los elementos exixtan antes de agregar los eventos
if (newProductButton && productModal && productModalClose && cancelProductButton) {
    // Abre el modal para registrar un nuevo producto
    newProductButton.addEventListener("click", function () {
        productModal.showModal();
    });
    // cierra el modal desde el botón x
    productModalClose.addEventListener("click", function () {
        productModal.close();
    });
    // Cierra el modal desde el botón cancelar
    cancelProductButton.addEventListener("click", function () {
        productModal.close();
    });
}

// Registro de productos
// Obtiene el formulario utilizado para registrar productos
const productForm = document.getElementById("productForm");

if (productForm) {

    // Captura los datos cuando se envía el formulario
    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtiene y limpia los valores ingresados por el usuario
        const nombre = document.getElementById("productName").value.trim();
        const codigo = document.getElementById("productCode").value.trim();
        const categoria = document.getElementById("productCategory").value.trim();

        // Convierte los valores numéricos proque los inputs devuelven texto
        const precio = Number(
            document.getElementById("productPrice").value
        );

        const cantidad = Number(
            document.getElementById("productQuantity").value
        );

        const stockMinimo = Number(
            document.getElementById("productMinStock").value
        );

        // Crea el objeto que representa al producto
        const producto = {
            id: Date.now(),
            codigo,
            nombre,
            categoria,
            precio,
            cantidad,
            stockMinimo,
            fechaCreacion: new Date().toISOString(),
            fechaActualizacion: new Date().toISOString()
        };
        console.log(producto);
        productForm.reset()

    });
}