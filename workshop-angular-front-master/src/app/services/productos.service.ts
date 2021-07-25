import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url:string = "https://pasarela-workshop.herokuapp.com/api/v1/productos"

  constructor(private _Http: HttpClient) { }

  obtenerProductos():Observable<any>{
    return this._Http.get(this.url)
  }
}
