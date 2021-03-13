  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component'
import { CrearproductoComponent} from './components/crearproducto/crearproducto.component'


//Está constante es la que se encarga de tener las rutas
//este arreglo va a manejar un objeto por cada ruta
//cada objeto tendrá:
//path:ruta_string, component:componenteImportado
const routes: Routes = [
  {path:'', component: ProductosComponent},
  {path:'crearproducto', component: CrearproductoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
