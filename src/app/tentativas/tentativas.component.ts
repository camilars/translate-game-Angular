import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnChanges {

  @Input()
  tentativas!: number;

  coracoes: Coracao[] =[
    new Coracao(true), new Coracao(true), new Coracao(true)
  ];

  constructor() { 
    console.log(this.coracoes)
  }

  ngOnChanges(): void {

    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }

    console.log(this.tentativas)
  }

}
