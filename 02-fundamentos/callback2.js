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
    let empleadoBD = empleados.find(empleado => empleado.id == id);

    if (!empleadoBD) {
        callback(`No exsite el empleado ${id}`);
    } else {
        callback(null, empleadoBD);
    }

    //console.log(empleadoBD);
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

getEmpleado(10, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});