import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './paginas/main-body/main-body.component';
import { FutbolComponent } from './paginas/categorias/futbol/futbol.component';
import { PaginaDetalleComponent } from './paginas/pagina-detalle/pagina-detalle.component';

const routes: Routes = [
  {path: 'inicio', component: MainBodyComponent},
  {path: 'futbol', component: FutbolComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
