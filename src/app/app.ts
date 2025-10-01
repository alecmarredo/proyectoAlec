import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* import { Aside } from './componentes/aside/aside';
import { Main } from './componentes/main/main';
import { Footer } from './componentes/footer/footer';
import { Navegacion } from './componentes/navegacion/navegacion'; */

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoAlecMarredo');
}
