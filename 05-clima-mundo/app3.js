const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad'
    }
}).argv;

const clima = require('./clima/clima');

clima.getClima('9.410000', '-74.029999')
    .then(resp => console.log(resp))
    .catch(console.log);