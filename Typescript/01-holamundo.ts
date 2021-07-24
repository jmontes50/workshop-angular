let saludo = "Hola Mundo"

console.log(saludo)

//Types
let texto:string = "Fiestas Patrias"

// texto = 34124124125123
// texto = true

let cantidad:number = 100

let esDiaDeSemana:boolean = false

let misNumeros:Array<number> = [20,18,17,19,14,16]

let random:any = {combo:"Salchipapa + Gaseosa", precio:12} //acepta cualquier tipo de dato

let random2:unknown = {combo:"Pollo a la brasa + Chicha", precio:50} //acepta cualquier cosa, no va a aceptar null o undefined

let sumar = (num1:number, num2:number):number => {
    return num1 + num2
}

sumar(20, 19)

// sumar("20", "10")