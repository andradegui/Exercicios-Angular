import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgIfComponent } from './views/exemplo-ng-if/exemplo-ng-if.component';
import { NumerosComponent } from './views/numeros/numeros.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgIfComponent,
    NumerosComponent
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
