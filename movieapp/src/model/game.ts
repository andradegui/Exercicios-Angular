export class Game{
  name: string;
  desc: string;
  plataforma: string;
  qtdJogadores: number;

  constructor(name: string, desc:string, plataforma:string, qtdJogadores:number){
    this.name = name;
    this.desc = desc;
    this.plataforma = plataforma;
    this.qtdJogadores = qtdJogadores;
  }
}
