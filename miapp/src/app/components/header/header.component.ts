import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo:string = "Mi título"

  nombres:Array<string> = ["Juan","Yomar","Anthony","Ivan","David","Luciano"]

  logueado:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  personas: Array<any> = [
    {
      nombre:"Juan Perez",
      edad: 25,
      ciudad:"Arequipa"
    },
    {
      nombre:"Maria Galvez",
      edad: 24,
      ciudad:"Lima"
    },
    {
      nombre:"Erika Jimenez",
      edad: 30,
      ciudad:"Cusco"
    },
    {
      nombre:"Jaime Portugal",
      edad: 31,
      ciudad:"Tacna"
    },
  ]

}
