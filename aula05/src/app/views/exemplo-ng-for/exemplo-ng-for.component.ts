import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-for',
  templateUrl: './exemplo-ng-for.component.html',
  styleUrls: ['./exemplo-ng-for.component.css']
})
export class ExemploNgForComponent implements OnInit {

  vetorAnimais = ['assets/beagle.jpg', "assets/vira-lata.jpg", "assets/york.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
