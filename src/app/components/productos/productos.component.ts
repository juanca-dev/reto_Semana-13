import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  misProductos:Array<any> //Es donde voy a almacenar el resultado de la peticion
  subscripcionProductos: Subscription //subscribir y desubscribir

  //recuerden, la inyeccion por dependencias se hace en el constructor
  constructor(
    private _sProducto: ProductoService
  ) { }

  obtenerProductos(){
    this.subscripcionProductos = this._sProducto.getProductos()
    .subscribe((datos) => {
      // console.log(datos)
      this.misProductos = datos
      // 
      console.log(this.misProductos)
    })
  }

  ngOnInit(): void {
    //este método es el equivalente a un useEffect([])
    //es el lugar para hacer peticiones y obtener datos
    this.obtenerProductos()
  }

  borrarProducto(producto){
    // console.log(producto)
    // alert("Hizo Click en borrar Producto")
    this._sProducto.deleteProducto(producto.id)
    // la primera función del subscribe equivaldria al .then()
    .subscribe(()=> {
      alert("Tarea Eliminado")
      this.obtenerProductos()
    },
    // la segunda función que reciba subcribe ,sera para manejar el error que pueda ocurrir aquivaldria al catch
    (error) =>{
      alert("Hubo un error al eliminar")
    })
    
  }

}