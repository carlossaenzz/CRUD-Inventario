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

        // Convierte los valores numéricos por que los inputs devuelven texto
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

        // Obtiene los productos almacenados
        const productos = obtenerProductos();

        // Agrega el nuevo producto al arreglo
        productos.push(producto);

        // Guarda el arreglo completo
        guardarProductos(productos);

        // Limpia el formulario después de registro
        productForm.reset()

        // Cierra el modal despuesde guardar
        productModal.close();
    });
}