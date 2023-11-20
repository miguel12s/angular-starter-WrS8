import { Component,OnInit, inject } from '@angular/core';
import { tap } from 'rxjs';
import { Estudiante } from 'src/app/shared/interfaces/Estudiante.interface';
import { EstudianteService } from '../services/estudiante.service';
import { DocenteService } from 'src/app/docente/services/docente.service';

@Component({
  selector: 'app-registro-tutoria',
  templateUrl: './registro-tutoria.component.html',
  styleUrls: ['./registro-tutoria.component.scss']
})
export class RegistroTutoriaComponent implements OnInit {
  horario:any[]=[]
  datosModal:any={}
  constructor(private estudianteService:EstudianteService){}
ngOnInit(): void {

this.estudianteService.obtenerTutoriasTerminadas().pipe(
  tap((res:any)=>{
    console.log(res.data);
    
    this.horario=res.resultado
  })
).subscribe()


}

descripcion(id_tutoria:any){
this.estudianteService.getHorarioForId(id_tutoria).pipe(
  tap((res:any)=>{
    this.datosModal=res
  })
).subscribe()

  

}




}
