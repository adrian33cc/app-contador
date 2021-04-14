import { Component } from '@angular/core';

//Esto siempre va
@Component({
  selector: 'app-contador', //de este modo inserto el componente
  templateUrl: 'contador.component.html', //aqui leemos el html del componente
  //styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  public title: string = 'Contador App';
  numero: number = 50;
  base: number = 5;
  acumular(valor : number){
      this.numero += valor;
  }
}
