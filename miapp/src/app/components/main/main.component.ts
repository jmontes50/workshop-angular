import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  url:string = "https://images.unsplash.com/photo-1606788168886-286b0336272d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"

  listaTareas:Array<string> = []
  tarea:string = "lavar platos"

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    // alert("Click desde el template!")
    console.log(this.tarea)
  }

}
