import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';

import { validadorCodigo } from '../../Validaciones/VehiculoValidaciones';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagRegistroVehiculos',
  templateUrl: './PagRegistroVehiculos.component.html',
  styleUrl: './PagRegistroVehiculos.component.css'
})
export class PagRegistroVehiculosComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private VehiculoService: VehiculoService
) {
  this.formulario = this.formBuilder.group({
    "codigo":['', [Validators.required, validadorCodigo()]],
    "marca":['', [Validators.required]],
    "modelo":['', [Validators.required]],
    "anio":['', [Validators.required]],
    "kilometraje":['', [Validators.required]],
    "precio":[],
    "calificacion":['', [Validators.required]],
    "foto":[],
  });
}

ngOnInit(){
  
}

guardar(){
  if(this.formulario.valid){
    this.VehiculoService.insertVehiculo({...this.formulario.value}).subscribe( 
      respuesta => {
      if(respuesta.codigo == '1'){
        Swal.fire({
        title:"Mensaje",
        text: "Vehiculo Regiatrado con Exito",
        icon: "success"
      }).then(res => {
        this.formulario.reset();
      } );
    }else{
      Swal.fire({
          title:"Mensaje",
          text: "No se pudo registrar el vehiculo: "+respuesta.mensaje,
          icon: "error"
        });
      }
    }
  );
  }else{
    Swal.fire({
      title:"Mensaje",
      text: "Faltan llenar campos?",
      icon: "error"
    });
  }
}
}



export function validadorCodigoComparativo(){
  return (formulario: FormGroup): ValidationErrors|null => {
    let valor = formulario.controls['codigo'].value;
    let valor2 = formulario.controls['codigo_confirm'].value;
    if (valor === valor2){
      return null;
    }
    return {'codigocomparativo':true};
  }
}  