import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
//import {Vehiculo, VehiculoService} from '../../servicios/Vehiculo.service';

import { AbstractControl, FormBuilder, FormGroup, ValidationErrors,ValidatorFn, Validators } from '@angular/forms';
import { validadorCodigo } from '../../Validaciones/VehiculoValidaciones';
import Swal from 'sweetalert2';
import { Vehiculo, VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-PagVehiculosDetalles',
  templateUrl: './PagVehiculosDetalles.component.html',
  styleUrls: ['./PagVehiculosDetalles.component.css']
})
export class PagVehiculosDetallesComponent implements OnInit {

  vehiculo?: Vehiculo;
  formulario: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      "codigo":['', [Validators.required, validadorCodigo()]],
      "marca":['', [Validators.required]],
      "modelo":['', [Validators.required]],
      "anio":['', [Validators.required]],
      "kilometraje":['',[Validators.required]],
      "precio":[],
      "calificacion":['', [Validators.required]]
   });
   this.formulario.controls['codigo'].disable();
  }

ngOnInit() {
 this.activatedRoute.params.subscribe( params =>{
  this.vehiculoService.getVehiculo(params['codigo']).subscribe( data => {
if(data.codigo == '1'){
  this.vehiculo = data.data;
  this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
  this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
  this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
  this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
  this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
  this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
  this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
}else{
  Swal.fire({
    title:"Mensaje de Alerta",
    text: "No se pudo cargar la informacion",
    icon: "error"
  });
}
});
});
}

guardar(){
  if(this.formulario.valid){
    this.vehiculoService.actualizarVehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe(data =>{
 if(data.codigo == '1'){
      Swal.fire(
  {
    title:"Mensaje",
    text: "Vehiculo actualizado con exito",
    icon: "info"
 }
);
}else{
  Swal.fire(
    { 
      title:"Mensaje",
      text: "No se pudo actualizar: "+data.mensaje,
      icon: "info"
    }
  );
 }
});
}else{
Swal.fire(
  { 
    title:"Mensaje",
    text: "Falta llenar campos",
    icon: "error"
}
);
}
}

imprimir(){
  console.log('Formulario: ', this.formulario);
  let password = this.formulario.get('password');
  let nuevosValidadores = [Validators.required, Validators.email];
  if(password){ 
    password.setValidators(nuevosValidadores);
    password.updateValueAndValidity();
  }

  if (this.formulario.valid) { 

  }
}

}

export function passwordMatcgValidator() { 
  return (control: FormGroup): ValidationErrors | null => {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('passwordConfirm');

    if (!passwordControl || !confirmPasswordControl) {
      return null; 
    }


    if(passwordControl.value !== confirmPasswordControl.value) {

      return{ 'passwordMismatch': true};
    }


    return null;
  };
}

export function validarCedula(): ValidatorFn{ 
  return (control: AbstractControl): any=>{
    const value : any = control.value;

if (!value){ 
  
  return null;
  }
  
  
    const cedulaPattern = /ˆ\d {10}$/;

  if(!cedulaPattern.test(value)) {
  
  return { 'cedulaInvalida': true};
  }

  return null;
 }
}