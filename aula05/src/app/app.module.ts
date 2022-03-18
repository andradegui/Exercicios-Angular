import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgIfComponent } from './views/exemplo-ng-if/exemplo-ng-if.component';
import { NumerosComponent } from './views/numeros/numeros.component';
import { CalculadoraComponent } from './views/calculadora/calculadora.component';
import { ExemploNgForComponent } from './views/exemplo-ng-for/exemplo-ng-for.component';
import { ExercicioPaisesComponent } from './views/exercicio-paises/exercicio-paises.component';
import { ExemploNgSwitchComponent } from './views/exemplo-ng-switch/exemplo-ng-switch.component';
import { ExYoutubeComponent } from './views/ex-youtube/ex-youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    ExemploNgIfComponent,
    NumerosComponent,
    CalculadoraComponent,
    ExemploNgForComponent,
    ExercicioPaisesComponent,
    ExemploNgSwitchComponent,
    ExYoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
