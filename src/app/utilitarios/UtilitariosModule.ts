import { NgModule } from '@angular/core';
import { AEspacio } from './pipes/AEspacio.pipe';
import { Calificacioncomponent } from "../componentes/Calificacion/Calificacion.component";
import {CommonModule } from '@angular/common';



@NgModule({
    declarations:[
       AEspacio,
       Calificacioncomponent
        ],
    imports:[
        CommonModule
    ],
    exports:[
       AEspacio,
       Calificacioncomponent,
    ]
})
export class UtilitariosModule{

}



