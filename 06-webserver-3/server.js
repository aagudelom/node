const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');



app.get('/',(req,res) => {
    res.render('home',{
        nombre:'Alejandro agudelo'
    });

});
app.get('/about',(req,res) => {
    res.render('about');

});

//el app listen permite utilizar una función
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});