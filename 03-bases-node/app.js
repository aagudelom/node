const multiplicar = require('./multiplicar/multiplicar')
let base = 6;
multiplicar.crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`));