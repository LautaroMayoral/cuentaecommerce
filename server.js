const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Servir archivos estáticos desde el directorio 'frontend'
app.use(express.static('frontend'));

// Ruta para finalizar la compra
app.post('/finalizar-compra', (req, res) => {
    const productos = req.body.productos;

    // Lógica para procesar la compra
    // Por ejemplo, guardar en una base de datos, enviar un correo de confirmación, etc.

    console.log('Productos comprados:', productos);
    res.json({ success: true, message: 'Compra finalizada con éxito' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
