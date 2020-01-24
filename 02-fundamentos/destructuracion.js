let coche = {
    color: 'Rojo',
    ruedas: 'Cuatro',
    lunas: 'dos',

    getNombre: function() {
        return `${this.color} ${this.ruedas} ${this.lunas}`
    }
};

console.log(coche.getNombre());
let colorCoche = coche.color;
console.log(colorCoche);

let { color, ruedas, lunas } = coche;
console.log(color, ruedas, lunas);

let { color: pintado, ruedas: llantas, lunas: vidrios } = coche;
console.log(pintado, llantas, vidrios);