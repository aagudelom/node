const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarBD().then(msg => console.log(msg)).catch(e => console.log(e));
    return porHacer;

}

const guardarBD = () => {
    return new Promise((resolve, reject) => {
        if (listadoPorHacer.length == 0) {
            reject('No existen datos para guardar');
            return;
        }
        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile('db/data.json', data, (err) => {
            if (err) reject(err)
            else resolve('Datos guardados');
        })
    });
}

module.exports = {
    crear
}