const argv = require('yargs')
    .command('listar', 'Imprime en consla la tabla de multiplicar', {
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

//node app4 listar
//node app4 listar --base 5

//npm init
//npm i yargs --save
//ignore node_modules
//npm install --save-dev nodemon 
//--save-dev --> utilizado solo para la aplicación local y no requiere permisos del sistema porque no esta de forma global
//npm install