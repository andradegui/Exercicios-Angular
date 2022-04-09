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
  estaEditando = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar() {
    this.games = this.gameService.listar();
  }

  novo() {
    this.gameAtual = new Game();
    this.estaEditando = false;
  }

  save() {
    if (this.gameAtual) {
      if (!this.estaEditando) {
        this.gameService.inserir(this.gameAtual);
      }
      else {
        this.gameService.edit(this.gameAtual);
      }

    }


    this.cancel();
    this.atualizar();
  }

  cancel() {
    this.gameAtual = undefined;
  }

  remove(id?: number) {
    this.gameService.remove(id);
    this.atualizar();
  }

  edit(game: Game) {
    this.gameService.edit(game);
    this.novo();
  }

  selecionar(game: Game) {
    this.gameAtual = game;
    this.estaEditando = true;
  }

}
