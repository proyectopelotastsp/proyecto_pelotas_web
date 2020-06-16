import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { MainBodyComponent } from './paginas/main-body/main-body.component';
import { FooterComponent } from './paginas/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainBodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
