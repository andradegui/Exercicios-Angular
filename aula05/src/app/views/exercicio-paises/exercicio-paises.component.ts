import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-paises',
  templateUrl: './exercicio-paises.component.html',
  styleUrls: ['./exercicio-paises.component.css']
})
export class ExercicioPaisesComponent implements OnInit {

  paisesImg = ['assets/brasil.jpg', 'assets/londres.jpg', 'assets/tailandia.jpg', 'assets/franca.jpg' ]
  paises = ['brasil', 'londres', 'tailandia', 'franca'];
  constructor() { }

  ngOnInit(): void {
  }

  alertaPaises (nomePais: string) {
    alert(nomePais);
  }

}
