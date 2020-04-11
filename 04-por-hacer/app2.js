const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        break;
    case 'crear':
        console.log('crear');
        let datos = porHacer.crear(argv.descripcion);
        //console.log(datos);
        //let db = porHacer.guardarBD();
        //console.log(db);
        break;
    case 'actualizar':
        console.log('actualizar');
    default:
        console.log('Comando no reconocido');
}