import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {

  name = '';
  nickname = '';

  nameApp = '';

  discord = 'assets/discord.png';
  whatsapp = 'assets/whatsapp.png';
  telegram = 'assets/telegram.png';

  constructor() { }

  ngOnInit(): void {
  }

  exibeDS(nameApp: string){
    this.nameApp = this.discord;
    return this.nameApp;
  }








}
