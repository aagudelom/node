let nombre = 'Super W';

if (true) {
    let nombre = 'Super Paco';
}

nombre = 'Super Coco';

console.log(nombre);

//uso de let en i
let i = 1;

for (i = 0; i <= 5; i++) {
    console.log(`valor de i: ${i}`);
}

console.log(`valor i fuera: ${i}`);

//uso de cadenas
nombre = 'Alejandro';
let apellido = 'Agudelo';

let nombre_completo = `${nombre} ${apellido}`;

console.log(`Let ${nombre_completo}`);

function getNombre() {
    return `${nombre} ${apellido}`;
}

console.log(`funcion ${getNombre()}`);