/**
 * Async await
 * El usar un async el resultado es una promesa
 * Los await siempre deben estar dentro de un async
 */

let getNombre = () => 'Alejandro';

console.log(getNombre());

let getNombreAsync = async() => 'Alejandro Async';
console.log(getNombreAsync());
//lo anterior es igual a lo siguiente
let getNombreAsyncPromise = () => {
    return new Promise((resolve, reject) => {
        resolve('Alejandro Promise');
    })
}
console.log(getNombreAsyncPromise());

getNombreAsyncPromise().then(nombre => {
    console.log(nombre);
});

let getNombreError = async() => {
    throw new Error('No existe nombres');
}
getNombreError().then().catch(e => {
    //console.log('Error en obtener el nombre', e);
    console.log('Error en obtener el nombre');
});

console.log('Await');
//el uso de await obliga a que si o si, toca usar Promise y no async
let getNombreAwait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Alejandro await');
        }, 3000);
    })

}

let saludar = async() => {
    let nombre = await getNombreAwait();
    return `Hola ${nombre}`;
}

saludar().then(mensaje => {
    console.log(mensaje);
})