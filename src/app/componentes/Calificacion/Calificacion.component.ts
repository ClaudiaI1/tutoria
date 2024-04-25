import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChange,Output, input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class Calificacioncomponent implements OnInit, OnChanges {
 
 
 
  @Input() calificacion:any = 0;
  @Output() accion = new EventEmitter<any>();



  lista:Array<any>=[];
  constructor() { }
  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['calificacion'].currentValue){
      this.generar();
  }
}
generar(){
  for(let i=0;i<this.calificacion;i++){
    this.lista.push(1);
  }
}

select(){
  this.calificacion.emit(this.calificacion);
}

//mostrarCalificacion(){
  //this.select.emit(this.calificacion);
//}

}