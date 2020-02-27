//npm init
//npm install --save yargs
const argv = require('yargs')
    .command('listar', 'Imprime en cosola', {

    })
    .command('crear', 'Crear registro', {

    })
    .command('actualizar', 'Actualizar registro', {

    })
    .argv;

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