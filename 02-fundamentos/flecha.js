let sumar = (a, b) => {
    return a + b;
}
console.log(sumar(10, 20));

let sumar1 = (a, b) => a + b;
console.log(sumar1(5, 4));

let saludar = () => 'Hola mundo';
console.log(saludar());

let miNombre = nombre => `Hola ${nombre}`;
console.log(miNombre('Alejandro'));

let coche = {
    color: 'Rojo',
    ruedas: 'Cuatro',
    lunas: 'dos',

    getNombre() {
        return `${this.color} ${this.ruedas} ${this.lunas}`
    }
};
console.log(coche.getNombre());