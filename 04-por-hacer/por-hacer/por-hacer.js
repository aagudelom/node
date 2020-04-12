const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarBD().then(msg => console.log(msg)).catch(e => console.log(e));
    return porHacer;

}

const listarDB = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion == descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) => {
    cargarDB();
    let newLista = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    console.log(newLista);
    listadoPorHacer = newLista;
    guardarBD();
    return true;
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

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
}

module.exports = {
    crear,
    listarDB,
    actualizar,
    eliminar
}