import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  url:string = "https://images.unsplash.com/photo-1606788168886-286b0336272d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"

  listaTareas:Array<string> = []
  tarea:string = "lavar platos"

  suscripcionAData:Subscription

  constructor(private _sData:DataService) { 
    this.suscripcionAData = this._sData.estadoActual
    .subscribe((data) => {
      console.log(data)
    })
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.suscripcionAData.unsubscribe()
  }

  agregarTarea(){
    // alert("Click desde el template!")
    console.log(this.tarea)
    this.listaTareas.push(this.tarea)
    this.tarea = ""
  }

  guardarTareas(){
    this._sData.modificarEstado(this.listaTareas)
  }

}
