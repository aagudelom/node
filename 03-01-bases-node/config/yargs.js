const optsListar = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const optsCrear = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', optsListar)
    .command('crear', 'Crea el fichero de la tabla de multiplicar', optsCrear)
    .help()
    .argv;

module.exports = {
    argv
}