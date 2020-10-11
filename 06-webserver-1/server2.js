const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));


//el app listen permite utilizar una función
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});