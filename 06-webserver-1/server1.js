const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    let salida = {
        nombre: 'Alejandro',
        edad:'40',
        url: req.url
    }
    res.send(salida);
});

app.get('/data', function (req, res) {
    res.send('Hola data');
});

//el app listen permite utilizar una función
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});