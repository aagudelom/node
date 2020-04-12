const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('listar', 'Imprime los elementos de la base de datos')
    .command('eliminar', 'Elimina un elemento de la base de datos', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}