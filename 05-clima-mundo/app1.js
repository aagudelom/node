//npm init
//npm i axios
const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad'
    }
}).argv;
const lugar = require('./lugar/lugar');

lugar.getLugarLatLng(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));
//debajo también vale
//lugar.getLugarLatLng(argv.direccion).then(console.log);