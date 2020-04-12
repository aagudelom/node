const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        let listado = porHacer.listarDB();
        for (let tarea of listado) {
            console.log("========Listado======");
            console.log(tarea);
            console.log("=====================");
        }
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
        let realizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (realizado) {
            console.log("Regitro actualizado");
        } else {
            console.log("Registro no actualizado");
        }
        break;
    case 'eliminar':
        console.log('Eliminar');
        porHacer.eliminar(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido');
}