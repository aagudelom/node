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


/*let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoBD = empleados.find(empleado => empleado.id == id);

        if (!empleadoBD) {
            reject(`No exsite el empleado ${id}`);
        } else {
            resolve(empleadoBD);
        }
    });
}*/
let getEmpleado = async(id) => {
    let empleadoBD = empleados.find(empleado => empleado.id == id);
    if (!empleadoBD) {
        throw new Error(`No exsite el empleado ${id}`);
    } else {
        return empleadoBD;
    }
}


let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id == empleado.id);

    if (!salarioDB) {
        throw new Error(`No existe salario para el empleado ${empleado.nombre}`);
    } else {
        //callback(null, salarioDB.salario);
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

}



let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un salario de $${resp.salario}`;
}
getInformacion(1).then(mensaje => console.log(mensaje)).catch(err => console.log(err));
getInformacion(10).then(mensaje => console.log(mensaje)).catch(err => console.log(err));