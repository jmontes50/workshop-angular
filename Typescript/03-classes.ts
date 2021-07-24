class Persona {
    private _edad:number
    private _nombres:string
    private _apellidos:string

    constructor(Edad:number,Nombres:string,Apellidos:string){
        this._edad = Edad
        this._nombres = Nombres
        this._apellidos = Apellidos
    }
    //getter obtener el valor de una propiedad
    public get edad(){
        return this._edad
    }

    public set edad(nuevaEdad:number){
        //yo puedo añadir verificaciones
        if(nuevaEdad <= 0 || nuevaEdad >= 140){
            throw new Error('La edad no es valida!')
        }else{
            this._edad = nuevaEdad
        }
    }
}

let estudiante = new Persona(20, "Juan", "Perez")

// estudiante._nombres = "José"

// console.log(estudiante)

estudiante.edad = 150

console.log(estudiante.edad)