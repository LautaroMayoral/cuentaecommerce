document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar la sección seleccionada y ocultar las demás
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Actualiza la cantidad de productos en el carrito
    let cantidadProductos = 0; // Esta variable debe actualizarse según la lógica de tu carrito
    let carritoProductos = []; // Array para almacenar los productos en el carrito

    // Función para actualizar el contenido del carrito
    function actualizarCarrito() {
        const carritoElement = document.getElementById('carrito-productos');
        const cantidadElement = document.getElementById('cantidad-productos-nav');
        cantidadElement.textContent = cantidadProductos;

        carritoElement.innerHTML = ''; // Limpiar contenido previo

        if (cantidadProductos > 0) {
            carritoProductos.forEach(producto => {
                const productoElement = document.createElement('div');
                productoElement.classList.add('card', 'my-2');
                productoElement.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                    </div>
                `;
                carritoElement.appendChild(productoElement);
            });
        } else {
            carritoElement.innerHTML = '<p>No tienes productos en tu carrito.</p>';
        }
    }

    // Inicialmente, muestra la sección de inicio
    showSection('inicio');

    // Añade la función al objeto global para que pueda ser llamada desde el HTML
    window.showSection = showSection;

    // Actualizar la cantidad de productos en el carrito y el contenido del carrito
    actualizarCarrito();

    // Ejemplo: Añadir un producto al carrito (esto debe ser parte de la lógica de tu aplicación)
    function agregarProductoAlCarrito(producto) {
        carritoProductos.push(producto);
        cantidadProductos = carritoProductos.length;
        actualizarCarrito();
    }

    // Ejemplo de uso de la función agregarProductoAlCarrito
    agregarProductoAlCarrito({
        nombre: 'Producto 1: Camiseta Deportiva',
        descripcion: 'Descripción del producto 1'
    });
});
