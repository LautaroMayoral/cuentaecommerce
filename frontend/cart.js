document.addEventListener("DOMContentLoaded", function() {
    const carritoProductos = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoElement = document.getElementById('carrito-productos');
    const finalizarCompraButton = document.getElementById('finalizar-compra');

    function actualizarCarrito() {
        carritoElement.innerHTML = '';
        if (carritoProductos.length > 0) {
            carritoProductos.forEach(producto => {
                const productoElement = document.createElement('div');
                productoElement.classList.add('card', 'my-2');
                productoElement.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${producto.name}</h5>
                        <p class="card-text">${producto.description}</p>
                        <p class="card-text">Talle: ${producto.size}</p>
                    </div>
                `;
                carritoElement.appendChild(productoElement);
            });
        } else {
            carritoElement.innerHTML = '<p>No tienes productos en tu carrito.</p>';
        }
    }

    finalizarCompraButton.addEventListener('click', function() {
        fetch('/finalizar-compra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productos: carritoProductos })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Compra finalizada con éxito');
                localStorage.removeItem('carrito');
                window.location.href = 'index.html';
            } else {
                alert('Hubo un problema al finalizar la compra');
            }
        });
    });

    actualizarCarrito();
});
