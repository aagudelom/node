const argv = require('yargs').options({
    cadena: {
        demand: true,
        alias: 'c',
        desc: 'Dirección de la ciudad'
    }
}).argv;



const crear = (cad) => {
    let cadena = encodeURI(cad);
    let objeto = {
        cadena
    };
    return JSON.stringify(objeto);
}

console.log(crear(argv.cadena));