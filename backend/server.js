const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor de Ecommerce está funcionando!');
});

app.listen(5000, () => {
    console.log('Servidor en el puerto 5000');
});

