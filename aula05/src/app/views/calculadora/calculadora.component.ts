import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  n1 = 0;
  n2 = 0;
  resultado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(operador: string) {
    if(operador == "+"){
      this.resultado = this.n1 + this.n2;
    }

    else if(operador == "-") {
      this.resultado = this.n1 - this.n2;
    }

    else if(operador == "*") {
      this.resultado = this.n1 * this.n2;
    }

    else if(operador == "/") {
      this.resultado = this.n1 / this.n2;
    }
  }

  somar(){

  }

  subtrair(){

  }

  multiplicar(){
    this.resultado = this.n1 * this.n2;
  }

  dividir(){
    this.resultado = this.n1 / this.n2;
  }
}
