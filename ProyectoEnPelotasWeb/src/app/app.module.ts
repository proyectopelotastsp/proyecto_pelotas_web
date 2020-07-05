import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { MainBodyComponent } from './paginas/main-body/main-body.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FutbolComponent } from './paginas/categorias/futbol/futbol.component';
import { FutbolSalaComponent } from './paginas/categorias/futbol-sala/futbol-sala.component';
import { TennisComponent } from './paginas/categorias/tennis/tennis.component';
import { BaloncestoComponent } from './paginas/categorias/baloncesto/baloncesto.component';
import { VoleybolComponent } from './paginas/categorias/voleybol/voleybol.component';
import { PaginaDetalleComponent } from './paginas/pagina-detalle/pagina-detalle.component';
import { ResultadosComponent } from './paginas/resultados/resultados.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainBodyComponent,
    FooterComponent,
    FutbolComponent,
    FutbolSalaComponent,
    TennisComponent,
    BaloncestoComponent,
    VoleybolComponent,
    PaginaDetalleComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
