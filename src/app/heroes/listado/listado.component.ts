import {Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html',
})

export class ListadoComponent {
  heroes : string[] = ['IronMan', 'Batman', 'Hulk', 'Thor'];
}
