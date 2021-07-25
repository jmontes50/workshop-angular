import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private estado = new BehaviorSubject(["inicial"])
  estadoActual = this.estado.asObservable()

  constructor() { }

  modificarEstado(estadoNuevo:Array<any>){
    this.estado.next(estadoNuevo)
  }
}
