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

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id == empleado.id);

    if (!salarioDB) {
        callback(`No existe salario para el empleado ${empleado.nombre}`);
    } else {
        //callback(null, salarioDB.salario);
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    });
});