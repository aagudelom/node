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
 
app.listen(3000);