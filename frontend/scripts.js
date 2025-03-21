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

    // Actualizar la cantidad de productos en el carrito
    function actualizarCantidadCarrito() {
        const cantidadElement = document.getElementById('cantidad-productos-nav');
        if (cantidadElement) {
            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            cantidadElement.textContent = carrito.length;
        } else {
            console.error('Element with id "cantidad-productos-nav" not found');
        }
    }

    // Función para agregar un producto al carrito
    window.agregarProductoAlCarrito = function(nombre, descripcion) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push({ nombre, descripcion });
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCantidadCarrito();
        alert('Producto agregado al carrito');
    }

    // Inicialmente, muestra la sección de inicio
    showSection('inicio');
    actualizarCantidadCarrito();
});

    // Inicialmente, muestra la sección de inicio
    showSection('inicio');
    actualizarCantidadCarrito();
});
