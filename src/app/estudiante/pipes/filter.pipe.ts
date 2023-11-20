import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,materia:string,horarios:any): any {
    
    console.log(materia)
    if(materia==="all")return value
    value= horarios.filter((horari:any)=>{
      console.log(horari.materia)
      horari.materia==="desarrollo web"
    }
    );
    return value
  }

}
