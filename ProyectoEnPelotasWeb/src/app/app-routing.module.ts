import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './paginas/main-body/main-body.component';
import { FutbolComponent } from './paginas/categorias/futbol/futbol.component';
import { FutbolSalaComponent } from './paginas/categorias/futbol-sala/futbol-sala.component';
import { BaloncestoComponent } from './paginas/categorias/baloncesto/baloncesto.component';
import { TennisComponent } from './paginas/categorias/tennis/tennis.component';
import { VoleybolComponent } from './paginas/categorias/voleybol/voleybol.component';
import { ResultadosComponent } from './paginas/resultados/resultados.component';
import { PaginaDetalleComponent } from './paginas/pagina-detalle/pagina-detalle.component';
import { AboutComponent } from './paginas/about/about.component';

const routes: Routes = [
  {path: 'inicio', component: MainBodyComponent},
  {path: 'futbol', component: FutbolComponent},
  {path: 'futbol-sala', component: FutbolSalaComponent},
  {path: 'baloncesto', component: BaloncestoComponent},
  {path: 'tennis', component: TennisComponent},
  {path: 'voleybol', component: VoleybolComponent},
  {path: 'info', component: AboutComponent},
  {path: 'producto/:ref', component: PaginaDetalleComponent},
  {path: 'resultados/:query', component: ResultadosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
