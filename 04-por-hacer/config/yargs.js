const crear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    compleado: {
        demand: true,
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', actualizar)
    .help()
    .argv;

module.exports = {
    argv
}