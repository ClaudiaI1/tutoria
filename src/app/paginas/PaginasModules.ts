import { NgModule } from "@angular/core";
import { PagListasVehiculosComponent } from "./PagListasVehiculos/PagListasVehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PagVehiculosDetallesComponent } from "./PagVehiculosDetalles/PagVehiculosDetalles.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagRegistroVehiculosComponent } from "./PagRegistroVehiculos/PagRegistroVehiculos.component";
import { AEspacio } from "../utilitarios/pipes/AEspacio.pipe";
import { Calificacioncomponent } from "../componentes/Calificacion/Calificacion.component";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";



@NgModule({
   declarations:[
      PagListasVehiculosComponent,
      PagVehiculosDetallesComponent,
      PagRegistroVehiculosComponent,
      HomeComponent,
      //AEspacio,
      //Calificacioncomponent
   ],
   imports:[
      CommonModule,
      FormsModule,
      RouterModule,
      ReactiveFormsModule,
      UtilitariosModule
    ],
    exports:[
      PagListasVehiculosComponent,
      PagVehiculosDetallesComponent,
      PagRegistroVehiculosComponent,
      HomeComponent,
      //Calificacioncomponent,
    ]
})
export class PaginasModule { 

}