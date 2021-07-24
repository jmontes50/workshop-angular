function decorador(texto:string){
    return function(target){
        target.prototype.saludar = function(){
            console.log(`Buen día, ${texto}`)
        }
        target.prototype.celular = 7987979878
    }
}

//Los decoradores van justo encima de lo que deseemos "decorar", sin llaves espacios o saltos de linea
@decorador("que tal el workshop")
class Persona {
    nombre:string

    constructor(nombre:string){
        this.nombre = nombre
    }
    
    saludar(texto:string){
        console.log(`Hola soy ${this.nombre}, ${texto}`)
    }
}

let Juan = new Persona("Juan")

Juan.saludar("vengo de Arequipa")

console.log(Juan.celular)