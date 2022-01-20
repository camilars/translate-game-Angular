import { Component, OnInit } from '@angular/core';
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
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length);
      this.atualizaRodada();
    } else {
      alert('A tradução está errada!')
      this.resposta = '';
    }    
  }

  atualizaRodada() {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
