import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagListasVehiculosComponent } from './paginas/PagListasVehiculos/PagListasVehiculos.component';
import { PagVehiculosDetallesComponent } from './paginas/PagVehiculosDetalles/PagVehiculosDetalles.component';
import { HomeComponent } from './paginas/home/home.component';
import { PagRegistroVehiculosComponent } from './paginas/PagRegistroVehiculos/PagRegistroVehiculos.component';

const routes: Routes = [
  {
    path:"inicio",
    component: HomeComponent
    },
    {
    path:"vehiculos",
    component: PagListasVehiculosComponent
    },
    {
      path:"vehiculo/codigo",
      component: PagVehiculosDetallesComponent
      },
      {
        path:"vehiculo",
        component: PagRegistroVehiculosComponent
        },
        {
          path:"",
          component: PagListasVehiculosComponent,
          pathMatch: 'full'
          }
          ];
          
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
