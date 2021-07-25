import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  misProductos:Array<any> = []
  suscripcionProductos:Subscription

  constructor(private _sProducto: ProductosService) { 
    this.suscripcionProductos = this._sProducto.obtenerProductos()
    .subscribe(
      (datos) => {
      console.log(datos)
      this.misProductos = datos.content
    },(error) => {
      console.error(error)
    })
  }

  ngOnInit(): void {
  }

}
