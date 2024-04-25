import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'AEspacio'
})
export class AEspacio implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log('Valores pipe', args);
    const reemplaza="";
    return value.replaceAll(args,reemplaza);
  }

}
