import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games = new Array<Game>();

  private idGerado = 1;

  constructor() { }

  inserir(game: Game) {
    game.id = this.idGerado;
    this.games.push(game);
    this.idGerado++;
  }

  listar(){
    return this.games;
  }

  remove(pos: number){ //onde vai deletar, e qtd caracteres vai deletar
    this.games.splice(pos, 1);
  }
}
