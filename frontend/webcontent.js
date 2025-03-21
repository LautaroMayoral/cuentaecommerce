document.addEventListener("DOMContentLoaded", function() {
    try {
        console.log('Web content loaded successfully.');

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
    } catch (error) {
        console.error('Error loading web content:', error);
    }
});
