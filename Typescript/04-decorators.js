var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador(texto) {
    return function (target) {
        target.prototype.saludar = function () {
            console.log("Buen d\u00EDa, " + texto);
        };
        target.prototype.celular = 7987979878;
    };
}
//Los decoradores van justo encima de lo que deseemos "decorar", sin llaves espacios o saltos de linea
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.saludar = function (texto) {
        console.log("Hola soy " + this.nombre + ", " + texto);
    };
    Persona = __decorate([
        decorador("que tal el workshop")
    ], Persona);
    return Persona;
}());
var Juan = new Persona("Juan");
Juan.saludar("vengo de Arequipa");
console.log(Juan.celular);
