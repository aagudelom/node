const fs = require('fs');
let crearArchivo = (base) => {
        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`${base} no es un numero`);
                return;
            }

            let data = '';
            for (let i = 1; i <= 10; i++) {
                data += `${base} * ${i} = ${base*i}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) reject(err);
                else
                    resolve(`tabla-${base}.txt`);
            })
        });
    }
    //process --> listado de comandos que tienen el node
    //process.argv --> utilizado para recibir y argumentos de la consola
module.exports = {
    crearArchivo
}