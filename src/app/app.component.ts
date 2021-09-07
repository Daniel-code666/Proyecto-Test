import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-test';
  numero1: number;
  numero2: number;
  resultado: number;

  public operar(op: string): void
  {
    console.log(op);

    switch(op)
    {
      case 's':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'r':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'm':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'd':
        this.resultado = this.numero1 / this.numero2;
        break;
      default:
        this.resultado = 0;
    }
    console.log(this.resultado);
  }

  public teclear(e:any):void{
    // console.log(e);
    console.log('la tecla oprimida fue: ' + e.key);
    console.log('la palabra al momento es: ' + e.target.value);
  }
}
