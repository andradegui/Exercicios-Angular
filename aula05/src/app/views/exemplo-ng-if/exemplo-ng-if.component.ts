import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-if',
  templateUrl: './exemplo-ng-if.component.html',
  styleUrls: ['./exemplo-ng-if.component.css']
})
export class ExemploNgIfComponent implements OnInit {

  nome = '';
  sobrenome = '';
  constructor() { }

  ngOnInit(): void {
  }

}
