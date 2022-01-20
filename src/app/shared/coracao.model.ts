export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaocheio: string = '/assets/coracao_cheio.png',
    public urlCoracaoVazio: string = '/assets/coracao_vazio.png'
  ){}

  existeCoracao(): string{
    if(this.cheio) {
      return this.urlCoracaocheio;
    }else {
      return this.urlCoracaoVazio;
    }
  }
}