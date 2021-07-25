import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  //Modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //servicios
  providers: [],
  //donde va a iniciar mi aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }