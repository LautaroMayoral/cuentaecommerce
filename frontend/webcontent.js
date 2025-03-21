document.addEventListener("DOMContentLoaded", function() {
    console.log('Web content loaded successfully.');
    
    // Función para abrir una nueva pestaña
    function openNewTab(url) {
        window.open(url, '_blank');
    }

    // Ejemplo de uso (comentado para evitar que se ejecute automáticamente)
    // openNewTab('https://www.example.com');

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

    // Agregar event listeners a los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Inicialmente, muestra la sección de inicio
    showSection('inicio');
});
