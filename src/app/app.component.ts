import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tipoEncerramento?: string;
  jogoEmAndamento = true;

  encerrarJogo(tipo: string): void {
    this.tipoEncerramento = tipo;
    this.jogoEmAndamento = false;
  }

  reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }
}
