const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea el fichero de la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .argv;

console.log(argv);
console.log(argv.base);
console.log(argv.limite);



let comando = argv._[0];
switch (comando) {
    case 'listar':
        //console.log('listar');
        let baseListar = argv.base;
        let limiteListar = argv.limite;
        listarTabla(baseListar, limiteListar).then(msg => console.log(msg)).catch(e => console.log(e));
        break;
    case 'crear':
        //console.log('crear');
        let base = argv.base;
        crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//node app4 listar
//node app4 listar --base 5

//npm init
//npm i yargs --save
//ignore node_modules
//npm install --save-dev nodemon 
//--save-dev --> utilizado solo para la aplicación local y no requiere permisos del sistema porque no esta de forma global
//npm install
/*
Yargs guarda objetos sin pares de valores de tal forma que podrian
ser usados internamente, ejemplo: node app crear --base 20, donde crear 
sería el objeto que yargs guardaría
*/