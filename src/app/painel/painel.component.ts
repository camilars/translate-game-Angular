import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASES;
  instrucao: string = 'Traduza a frase:';
  resposta: string = '';

  rodada = 0;
  rodadaFrase!: Frase;
  progresso = 0;
  tentativas = 3;
  @Output() encerrarJogo = new EventEmitter<string>();

  constructor() { 
    this.atualizaRodada();
  }

  ngOnInit(): void {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta!');
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);

      if(this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }
      this.atualizaRodada();
    } else {
      this.tentativas--;

      if(this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
      
      this.resposta = '';
    }    
  }

  atualizaRodada() {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
