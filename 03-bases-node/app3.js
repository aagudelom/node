const { crearArchivo } = require('./multiplicar/multiplicar')


let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));

//npm init
//npm i yargs --save
//ignore node_modules
//npm install --save-dev nodemon 
//--save-dev --> utilizado solo para la aplicación local y no requiere permisos del sistema porque no esta de forma global
//npm install