document.addEventListener('DOMContentLoaded', function() {
    // Manejar la navegación entre secciones
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = section.id === targetId ? 'block' : 'none';
            });
        });
    });

    // Mostrar la sección de inicio por defecto
    document.getElementById('inicio').style.display = 'block';
});
