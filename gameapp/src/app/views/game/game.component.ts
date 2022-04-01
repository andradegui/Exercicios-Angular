import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = new Array<Game>();
  gameAtual?: Game;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar(){
    this.games = this.gameService.listar();
  }

  novo(){
    this.gameAtual = new Game();
  }

  save(){
    if(this.gameAtual)
    this.gameService.inserir(this.gameAtual);

    this.cancel();
  }

  cancel(){
    this.gameAtual = undefined;
  }

  remove(pos: number){ //onde vai deletar, e qtd caracteres vai deletar
    this.games.splice(pos, 1);
  }

}
