import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './views/ex1/ex1.component';
import { Ex3Component } from './views/ex3/ex3.component';
import { Ex2Component } from './views/ex2/ex2.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex3Component,
    Ex2Component
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
