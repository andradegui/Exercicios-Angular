import { Component, OnInit } from '@angular/core';
import { Game } from 'src/model/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = new Array<Game>();
  curGame?: Game;

  constructor() {

    const valorant = new Game('Valorant', 'Ótimo FPS', 'PC', 6 );

    this.games.push(valorant);;
  }

  ngOnInit(): void {
  }

  selectGame(game: Game) {
    this.curGame = game;
  }

  newGame(){
    this.curGame = new Game('', '', '', 0);
  }

  save(){
    if(this.curGame){
      this.games.push(this.curGame);
      this.curGame = undefined;
    }
  }

  cancel(){
    this.curGame = undefined;
  }

  remove(pos: number){ //onde vai deletar, e qtd caracteres vai deletar
    this.games.splice(pos, 1);
  }

}
