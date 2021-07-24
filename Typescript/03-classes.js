class Persona {
    constructor(Edad, Nombres, Apellidos) {
        this._edad = Edad;
        this._nombres = Nombres;
        this._apellidos = Apellidos;
    }
    //getter obtener el valor de una propiedad
    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        //yo puedo añadir verificaciones
        if (nuevaEdad <= 0 || nuevaEdad >= 140) {
            throw new Error('La edad no es valida!');
        }
        else {
            this._edad = nuevaEdad;
        }
    }
}
let estudiante = new Persona(20, "Juan", "Perez");
// estudiante._nombres = "José"
// console.log(estudiante)
estudiante.edad = 150;
console.log(estudiante.edad);
