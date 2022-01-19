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
  resposta!: string;

  constructor() { console.log(this.frases)}

  ngOnInit(): void {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    // console.log(this.resposta)
  }

  verificarResposta(): void {
    console.log('comparando resposta:', this.resposta)
  }

}
