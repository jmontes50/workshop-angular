//Contrato

interface iSmartphone {
    modelo:string,
    fabricante:string,
    anio:number,
    memoria:number,
    pantalla:number,
    giroscopio:boolean,
    doblechip?:boolean, //para que sean opcionales, agregamos un ? después del nombre de la propiedad
    readonly IMEI:number
}

let Modelo1:iSmartphone = {
    modelo:"iPhone 12 Pro Max",
    fabricante:"Apple",
    anio:2020,
    memoria:6,
    pantalla:6.7,
    giroscopio:true,
    doblechip:false,
    IMEI:723947239572
}

Modelo1.anio = 2021
Modelo1.memoria = 8
// Modelo1.IMEI = 12344555454
