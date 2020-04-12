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
    completado: {
        demand: true,
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const eliminar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Elimina un elemento de la bd'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', actualizar)
    .command('listar', 'Imprime los elementos de la base de datos')
    .command('eliminar', 'Elimina un elemento de la base de datos', eliminar)
    .help()
    .argv;

module.exports = {
    argv
}