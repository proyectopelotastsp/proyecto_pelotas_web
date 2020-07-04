import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './paginas/main-body/main-body.component';
import { FutbolComponent } from './paginas/categorias/futbol/futbol.component';
import { FutbolSalaComponent } from './paginas/categorias/futbol-sala/futbol-sala.component';
import { BaloncestoComponent } from './paginas/categorias/baloncesto/baloncesto.component';
import { TennisComponent } from './paginas/categorias/tennis/tennis.component';
import { VoleybolComponent } from './paginas/categorias/voleybol/voleybol.component';

const routes: Routes = [
  {path: 'inicio', component: MainBodyComponent},
  {path: 'futbol', component: FutbolComponent},
  {path: 'futbol-sala', component: FutbolSalaComponent},
  {path: 'baloncesto', component: BaloncestoComponent},
  {path: 'tennis', component: TennisComponent},
  {path: 'voleybol', component: VoleybolComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
