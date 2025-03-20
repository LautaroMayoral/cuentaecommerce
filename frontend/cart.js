// Inicialización de un carrito vacío
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar un producto al carrito
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el carrito en localStorage
    updateCartDisplay();
}

// Función para actualizar el contenido del carrito en la página
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    
    // Limpiar los elementos existentes del carrito
    cartItems.innerHTML = '';

    let cartTotal = 0;

    // Iterar sobre los productos del carrito y mostrarlos
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItems.appendChild(listItem);
        cartTotal += item.price;
    });

    // Actualizar el total del carrito
    total.innerHTML = `Total: $${cartTotal.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1); // Eliminar el producto de la lista
    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar los cambios en localStorage
    updateCartDisplay(); // Actualizar la vista del carrito
}

// Llamar a la función para mostrar los productos en el carrito
updateCartDisplay();

// Función de checkout (aquí solo mostramos un mensaje por ahora)
function checkout() {
    alert('¡Gracias por tu compra!');
    localStorage.removeItem('cart'); // Limpiar el carrito al finalizar la compra
    updateCartDisplay(); // Actualizar la vista del carrito
}

