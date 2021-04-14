import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre : string = 'IronMan';
  edad : number = 36;
  
  datosHeroe() {
    return `${this.nombre} - ${this.edad} `;
  }
  
  get capitalizar() : string{
      return this.nombre.toUpperCase();
  }

  cambiarHeroe() :string {
      return this.nombre = 'Thor';
  }
  
  cambiarEdad() : number {
      return this.edad = 50;
  }

}
