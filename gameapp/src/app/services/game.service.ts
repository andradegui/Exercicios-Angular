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

    this.save();
  }

  listar() {
    return this.games;
  }

  remove(id?: number) {

    this.games = this.games.filter((game) => {
      return id != game.id;//se retornar false vai excluir
    });

    // for (let i = 0; i < this.games.length; i++) {
    //   if (id === this.games[i].id) {
    //     this.games.splice(i, 1);//onde vai deletar, e qtd caracteres vai deletar
    //     break;
    //   }
    // }

    this.save();
  }

  edit(game: Game) {
    const indice = this.games.findIndex(g => g.id === game.id);//se retornar true vai excluir);

    if (indice >= 0){
      this.games[indice] = game;
    }

    this.save();
  }

  save() {
    localStorage.setItem('idGerado', this.idGerado.toString());
    localStorage.setItem('jogos', JSON.stringify(this.games));
  }

  load() {
    const idGeradoSalvo = localStorage.getItem('idGerado');

    if (idGeradoSalvo){
      this.idGerado = Number(idGeradoSalvo);
    }

    const jogosSalvos = localStorage.getItem('games');
    if(jogosSalvos){
      this.games = JSON.parse(jogosSalvos);
    }
  }
}
