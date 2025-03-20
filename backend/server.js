const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('frontend'));

app.post('/finalizar-compra', (req, res) => {
    const productos = req.body.productos;

    // Aquí puedes agregar la lógica para procesar la compra
    // Por ejemplo, guardar en una base de datos, enviar un correo de confirmación, etc.

    console.log('Productos comprados:', productos);
    res.json({ success: true, message: 'Compra finalizada con éxito' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
