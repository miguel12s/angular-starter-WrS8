import { Component, Input, inject } from '@angular/core';
import { EstudianteService } from '../services/estudiante.service';
import { catchError, of, tap, throwError } from 'rxjs';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {
  materias: any[]=[];
  materiaSelected='all'
  constructor(private estudianteService:EstudianteService,private router:Router){}
public datosModal:any={}
  public horarios:any[]=[]
  ngOnInit(): void {
    this.estudianteService.getHorarios().pipe(
      tap((res:any)=>{
        console.log(res)
        
        this.horarios=res
        
        
      }),
      catchError(err=>{

        Swal.fire("Error","No hay tutorias para agendar el dia de hoy porfavor vuelva mas tarde","warning").then(
              (res:any)=>{
                this.router.navigate(['/estudiante/perfil'])
              })
            
            return throwError(err)
      })
    ).subscribe()

    this.estudianteService.getMaterias().pipe(
      tap((res:any)=>{
this.materias=res.resultado
      })
    ).subscribe()
  }
   descripcion(horario: any) {
 console.log(horario);
 
    this.estudianteService.getHorarioForId(horario).pipe(
      tap((res:any)=>{
       console.log(res)
        this.datosModal =res; 
        
      })
    ).subscribe()
 
     

  }

  agendarTutoria(id_tutoria:number){
   
        

        
  Swal.fire({
    title: 'Estas seguro que deseas agendar esta tutoria',
    text: "no podra ser revertido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si,Agendar'
  }).then((result) => {
    if (result.isConfirmed) {
      
      this.estudianteService.agendarTutorias(id_tutoria).pipe(
        tap((res:any)=>{
          console.log(res);
      if(res.error){
        Swal.fire('agendamiento de tutorias', res.error, 'error');
        }else if(res.message){
          Swal.fire('agendamiento de tutorias',res.message, 'success');
        }
        this.estudianteService.getHorarios().pipe(
          tap((res:any)=>{
            
            
            this.horarios=res
          })
        ).subscribe()

      })
    ).subscribe()    
  }
    })
  }


  onChange(event:any){
    
const materia=event.target.value
console.log(materia)
this.materiaSelected=materia
  }
}
       
        // }else if(res.errorCupos="los cupos estan completos :("){
        //   Swal.fire('agendamiento de tutorias',"los cupos estan completos :(", 'error');
        // }

