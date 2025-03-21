document.addEventListener("DOMContentLoaded", function() {
    console.log('Web content loaded successfully.');
    
    // Función para abrir una nueva pestaña
    function openNewTab(url) {
        window.open(url, '_blank');
    }

    // Ejemplo de uso
    openNewTab('https://www.mayoralImp.com');
});
