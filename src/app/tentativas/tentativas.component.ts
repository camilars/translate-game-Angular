import { Component, Input, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  coracaoVazio = '/assets/coracao_vazio.png';
  coracaoCheio = '/assets/coracao_cheio.png';

  coracoes: Coracao[] =[
    new Coracao(true), new Coracao(true), new Coracao(true)
  ];

  constructor() { 
    console.log(this.coracoes)
  }

  ngOnInit(): void {
  }

}
