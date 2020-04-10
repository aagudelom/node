const argv = require('./config/yargs').argv;

console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        break;
    case 'crear':
        console.log('crear');
        break;
    case 'actualizar':
        console.log('actualizar');
    default:
        console.log('Comando no reconocido');
}