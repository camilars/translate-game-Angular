import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  coracaoVazio = '/assets/coracao_vazio.png';
  coracaoCheio = '/assets/coracao_cheio.png'

  constructor() { }

  ngOnInit(): void {
  }

}
