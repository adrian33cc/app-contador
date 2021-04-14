import {CommonModule} from '@angular/common';
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    //Declaro los componentes propios del modulo
    declarations:[ ContadorComponent],
    //Se exporta para que se pueda insertar donde el modulo sea llamaddo
    exports:[ContadorComponent],
    imports:[CommonModule]

})

export class ContadorModule{}