import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'aula05';

  exercicio = '';

  alterar(nmExercicio: string) {
    this.exercicio = nmExercicio;
  }
}
