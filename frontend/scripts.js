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
    document.getElementById('cantidad-productos').textContent = cantidadProductos;

    // Inicialmente, muestra la sección de inicio
    showSection('inicio');

    // Añade la función al objeto global para que pueda ser llamada desde el HTML
    window.showSection = showSection;
});
