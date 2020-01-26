/**
 * Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Dado que la mayoría de las personas consumen promises ya creadas, esta guía explicará primero cómo consumirlas, y luego  cómo crearlas.
 * Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas
 */

let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: ' Alejandro'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {

    return new Promise((resolve, reject) => {
        let empleadoBD = empleados.find(empleado => empleado.id == id);

        if (!empleadoBD) {
            reject(`No exsite el empleado ${id}`);
        } else {
            resolve(empleadoBD);
        }
    });
}

getEmpleado(1).then(empleado => {
    console.log('Empleado de BD', empleado);
}, (err) => {
    console.log(err);
});

getEmpleado(10).then(empleado => {
    console.log('Empleado de BD', empleado);
}, (err) => {
    console.log(err);
});

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id == empleado.id);

        if (!salarioDB) {
            reject(`No existe salario para el empleado ${empleado.nombre}`);
        } else {
            //callback(null, salarioDB.salario);
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(1).then(empleado => {
    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
});

getEmpleado(3).then(empleado => {
    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
});

getEmpleado(2).then(empleado => {
    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    }, (err) => console.log(err))
}, (err) => console.log(err));