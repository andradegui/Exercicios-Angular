export class Game {

  id?: number;
  name: string;
  gender: string;
  platform: string;
  status = 'NA';

  constructor(name = '', gender = '', platform = ''){
    this.name = name;
    this.gender = gender;
    this.platform = platform;

  }
}
