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