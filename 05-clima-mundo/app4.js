const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad'
    }
}).argv;
const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');

const getInfo = async(direccion) => {

    const localizacion = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(localizacion.latitud, localizacion.longitud);
    return temp;
}

getInfo(argv.direccion).then(console.log).catch(console.log);