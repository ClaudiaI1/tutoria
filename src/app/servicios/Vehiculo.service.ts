import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor(private http: HttpClient) { }
baseUrl = 'http://www.epico.gob.ec/vehiculo/public/api/';

httpOptions =  {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

//Todos vehiculos => GET vehiculos/
//Insert => PUT vehiculos/
//Update => GET vehiculos/:codigo
//Delete => DELETE vehiculos/codigo
//Consulta => GET vehiculos/:codigo

getVehiculos(filtro?:string, rows?:number, page?:number):Observable<Respuesta>{
  let body = new HttpParams();
  body = filtro ? body.set('filtro',filtro) : body;
  body = rows ? body.set('rows',rows) : body; 
  body = page ? body.set('page',page) : body;

  return this.http.get<Respuesta>(this.baseUrl+"vehiculos/",{params: body});
}

insertVehiculo(vehiculo:Vehiculo){
  return this.http.post<Respuesta>(this.baseUrl+"vehiculos/",vehiculo, this.httpOptions);
}

getVehiculo(codigo:string){
  return this.http.get<Respuesta>(this.baseUrl+"vehiculos/"+codigo);
}

actualizarVehiculo(vehiculo:Vehiculo, codigo:string){
  return this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+codigo, vehiculo, this.httpOptions);
}

eliminarVehiculo(codigo:string){
  return this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
} 

/*getVehiculos (filtro?:string, rows?:number, page?:number): Observable<Vehiculo[]>{
let body = new HttpParams ();
body = filtro ? body.set('filtro',filtro) : body;
body = rows ? body.set('rows',rows) : body;
body = page ? body.set('page',page) : body;
return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params:body}).pipe(
  map(respuesta => respuesta.data),
  //catchError(this.handleError)
);
}*/

/*private handleError(error: HttpErrorResponse){
  let errorMessage = 'Error desconocido';
  if (error.error instanceof ErrorEvent){
    //Error del cliente
    errorMessage = 'Error: ${error.error.message}';
  } else {
    // El servidor devolvió un código de error
    errorMessage = 'Código: ${error.status}, Mensaje: ${error.message}';
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}*/

/*getVehiculo(codigo:string):Observable<Vehiculo>{
  const dato:Observable<Vehiculo> = new Observable( consulta =>{
    setTimeout{()=>{
      let vehiculo = this.listaVehiculos.find( element => element.codigo === codigo);
      consulta.next(vehiculo);
    }, 1000;
   });
   return dato;
  }*/
  
  addVehiculo(Vehiculo:Vehiculo){
    this.listaVehiculos.push(Vehiculo);
  } 
 
  private listaVehiculos:Array<Vehiculo> = [
  {"codigo": "A001","marca":"CHEVROLET","modelo": "ONIX", "color":"AZUL","kilometraje":"50000","precio":17000, "foto":null,"anio":2024,"calificacion":3},
  {"codigo": "A002","marca":"KIA","modelo": "RIO", "color":"BLANCO","kilometraje":"80000","precio":2000, "foto":null,"anio":2024,"calificacion":4},
  {"codigo": "A003","marca":"CHERY","modelo": "ARRIZO 5", "color":"ROJO","kilometraje":"90000","precio":10000, "foto":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_db104a4f8011446ab18f34f766747802.webp","anio":2024,"calificacion":3},
  {"codigo": "A004","marca":"TOYOTA","modelo": "AGYA", "color":"NEGRO","kilometraje":"75000","precio":25000, "foto":"https://www.toyota.com.ec//admin/sites/default/files/2023-08/toyota-agya-color-rojo.png","anio":2024,"calificacion":2},
  {"codigo": "A005","marca":"HIUNDAI","modelo": "ACCENT", "color":"GRIS","kilometraje":"18000","precio":15000, "foto":"https://www.hyundai.com.ec/static/media/accent-banner1.b5bd90f929005299a158.webp","anio":2024,"calificacion":5},
  ];

}



export interface Vehiculo{
codigo: string;
marca: string;
color?: string;
modelo:string;
kilometraje?:string;
precio?:number;
foto?:string | null;
anio?: number;
calificacion?:number;
usuario?:string|null;
usuario_mod?:string|null;
}

  export interface Respuesta{
  codigo:string;
  mensaje:string;
  data:Array<Vehiculo>|Vehiculo|any;
  rows:number;
  pages:number;
  records:number;
  page:number;
}