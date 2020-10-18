const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine','hbs');

app.get('/',(req,res) => {
    res.render('home',{
        nombre:'Alejandro',
        anyo:new Date().getFullYear()
    });

});

//el app listen permite utilizar una función
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});