import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../services/admin.service';
import { forkJoin, tap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocenteService } from 'src/app/docente/services/docente.service';

@Component({
  selector: 'app-crear-tutoria',
  templateUrl: './crear-tutoria.component.html',
  styleUrls: ['./crear-tutoria.component.scss']
})
export class CrearTutoriaComponent implements OnInit {
  private id_facultad!:string
  fechaHoy=""
  searchValue = '';
  visible = false;
  horaMinima: string = '07:00';
  horaMaxima: string = '20:00';
  horaFinalMinima:string="08:00"
  horaFinalMaxima:string="21:00"
horarios:any[]=[]
horario:any={}
horarioForm!:FormGroup
horarioAgregar!:FormGroup
programas:any[]=[]
facultades:any[]=[]
salones:any[]=[]
materias:any[]=[]
docentes:any[]=[]
sedes:any[]=[]
dateNext:any
listOfDisplayData = [...this.horarios];
facultadesUsuario:any[]=[]

constructor(private service:AdminService,public readonly fb:FormBuilder,private docenteService:DocenteService){
  const dateToday=new Date();
  dateToday.setDate(dateToday.getDate()+1)
  
  this.dateNext = dateToday.toISOString().substring(0, 10);
  this.fechaHoy = dateToday.toISOString().substring(0, 10);
  console.log(this.fechaHoy);
  this.horarioForm=this.initForm()
  this.horarioAgregar=this.initFormAgregar()



  //horarios 

  this.horarioAgregar.get('horaInicio')?.valueChanges.subscribe((horaSeleccionada) => {
    const horaFin=this.horarioAgregar.get('horaFin')?.value

    if (horaSeleccionada < this.horaMinima) {
      this.horarioAgregar.get('horaInicio')?.setValue(this.horaMinima, { emitEvent: false });
    } else if (horaSeleccionada > this.horaMaxima) {
      
      this.horarioAgregar.get('horaInicio')?.setValue(this.horaMaxima, { emitEvent: false });
    }else if(horaSeleccionada<horaFin){          
      this.horarioAgregar.get('horaFin')?.setValue(this.horaFinalMaxima, { emitEvent: false });

    }else if(horaSeleccionada==horaFin){
      this.horarioForm.get('horaFin')?.setValue(this.horaFinalMinima, { emitEvent: false });
      this.horarioForm.get('horaInicio')?.setValue(this.horaMinima, { emitEvent: false });
    }
  });

  this.horarioAgregar.get('horaFin')?.valueChanges.subscribe((horaSeleccionada) => {

    const horaInicio=this.horarioAgregar.get('horaInicio')?.value
    
    
    if (horaSeleccionada < this.horaMinima) {
      this.horarioAgregar.get('horaFin')?.setValue(this.horaFinalMinima, { emitEvent: false });
    } else if (horaSeleccionada > this.horaMaxima) {
      console.log(this.horaMaxima);
      
      this.horarioAgregar.get('horaFin')?.setValue(this.horaFinalMaxima, { emitEvent: false });
    }else if(horaSeleccionada<horaInicio){
      console.log('hm',horaSeleccionada,'hi',horaInicio);
      
      this.horarioAgregar.get('horaInicio')?.setValue(this.horaMinima, { emitEvent: false });

    }else if(horaSeleccionada==horaInicio){
      this.horarioAgregar.get('horaFin')?.setValue(this.horaFinalMinima, { emitEvent: false });
      this.horarioAgregar.get('horaInicio')?.setValue(this.horaMinima, { emitEvent: false });
    }
  });

}
initForm():FormGroup{
return this.fb.group({

  
  // facultad:[null,Validators.required],
  // tema:[null,Validators.required],
  // capacidad:[null,Validators.required],
  // horaInicio:[null,Validators.required,],
  // programa:[null,Validators.required],
  // sede:[null,Validators.required],
  // horaFin:[null,Validators.required],
  // materia:[null,Validators.required],
  // salon:[null,Validators.required],
  // fecha:[null,Validators.required],
  // docente:[null,Validators.required],
  // id_tutoria:[null,Validators.required],
  id_facultad: [null, Validators.required],
  tema: [null, Validators.required],
  id_capacidad: [null, Validators.required],
  hora_inicial: [null, Validators.required],
  hora_final: [null, Validators.required],
  id_programa: [null, Validators.required],
  id_sede: [null, Validators.required],
  cupos:[null,Validators.required],
  id_materia: [null, Validators.required],
  id_salon: [null, Validators.required],
  fecha: [null, Validators.required],
  
})
}
ngOnInit(): void {
  forkJoin([
    this.service.getTutoriasPendientes(),
    this.service.getFacultades(),
    this.service.getSalones(),
    this.service.getDocentes(),
    // this.service.getSedes()
  ]).subscribe((results:any) => {
    // Procesa los resultados de cada solicitud
    console.log(results);
    
    this.horarios = results[0];
    this.listOfDisplayData=[...results[0]]

    this.facultades = results[1].resultado;
    this.salones = results[2];
    this.docentes=results[3];

  });

 


}

onChange(event:any){
  const salon=event.target.value
  this.docenteService.obtenerCapacidadPorSalon(salon).pipe(
    tap((res:any)=>{
      console.log(res);
      
    this.horarioAgregar.patchValue({
      capacidad:res.capacidad,
      sede:res.sede
    })
   
    })
  ).subscribe()

}

onChangeValue(event:any){
  const salon=event.target.value
  this.docenteService.obtenerCapacidadPorSalon(salon).pipe(
    tap((res:any)=>{
      console.log(res);
      
    this.horarioForm.patchValue({
      capacidad:res.capacidad,
      sede:res.sede
    })
   
    })
  ).subscribe()
}


initFormAgregar():FormGroup{
  return this.fb.group({
    facultad:[null,Validators.required],
    tema:[null,Validators.required],
    capacidad:[null,Validators.required],
    horaInicio:[null,Validators.required],
    programa:[null,Validators.required],
    sede:[null,Validators.required],
    horaFin:[null,Validators.required],
    materia:[null,Validators.required],
    salon:[null,Validators.required],
    fecha:[null,Validators.required],
    cupos:[null,Validators.required],
    docente:[null,Validators.required],
  })

}




agregar(){
const horario=this.horarioAgregar.value
const id_usuario=horario.docente.split('-')[1]
const newHorario={
    id_facultad:horario.facultad,
    id_programa:horario.programa,
    id_materia:horario.materia,
    id_salon:horario.salon,
    id_capacidad:horario.capacidad,
    id_sede:horario.sede,
    cupos:horario.cupos,
    tema:horario.tema,
    fecha:horario.fecha,
    hora_inicial:horario.horaInicio,
    hora_final:horario.horaFin,
}
console.log(newHorario)

this.service.crearHorarioAdmin(newHorario,id_usuario).pipe(
  tap((res:any)=>{
    if(res.error){
      Swal.fire("Error",res.error,"warning")
      return
    }
    this.service.getHorario().pipe(
      tap((res:any)=>{
        
        this.horario=res.data

      })
   ).subscribe()
    
  })
).subscribe()
}
getHorarioForId(id_horario:string){
this.docenteService.getHorarioForId(id_horario).pipe(
  tap((res:any)=>{
    this.horario=res.data
    console.log(res.data);
    
    console.log(res.data.id_tutoria);
    
    const nombres=`${res.data.nombres} ${res.data.apellidos}-${res.data.id_usuario}`
    console.log(nombres);
    
    this.horarioForm.patchValue({
      facultad:res.facultad,
      tema:res.tema,
      capacidad:res.capacidad,
      horaInicio:res.horaInicio,
      programa:res.programa,
      docente:nombres,
      horaFin:res.horaFin,
      materia:res.materia,
      fecha:res.fecha,
      salon:res.salon,
      sede:res.sede,
      id_tutoria:res.id
    })
  })
).subscribe()
}
onSubmit(id_tutoria:string){
  console.log(id_tutoria);
  
  const horario=this.horarioForm.value
  
this.service.actualizarHorarioAdmin(horario,id_tutoria)
this.service.getHorario().pipe(
  tap((res:any)=>{
this.listOfDisplayData=res.data
  })
 ).subscribe()

}
reset(): void {
  this.searchValue = '';
  this.search();
}

search(): void {
  this.visible = false;
  this.listOfDisplayData = this.horarios.filter((item: any) => item.nombres.indexOf(this.searchValue) !== -1);
}


deshabilitar(){
  Swal.fire({
    title: '¿Estas seguro de deshabilitar este horario de tutoria?',
    text: "esta accion se puede revertir",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'si, deshabilito'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deshabilitado',
        'La tutoria ha sido deshabilitada',
        'success'
      )
    }
  })
}
onSelect(event:any){
  const data=event.target.value
  const id_usuario=data.split('-')[1]
  this.service.getFacultadesForUser(id_usuario).pipe(
    tap((res:any)=>{
      console.log(res)
      this.facultadesUsuario=res.resultado
    })
  ).subscribe()

}

select(event:any){
  const facultad = event.target.value;
  console.log(facultad)
  this.id_facultad=facultad.split(':')[1].trim()

  this.docenteService
    .getProgramsForFaculty(this.id_facultad)
    .pipe(
      tap((res: any) => {
      console.log(res)

       this.programas=res.resultado})
    )
    .subscribe();
}

selectedMateria(event:any){

  const programa = event.target.value;
  console.log(programa)
  const id_programa=programa.split(':')[1].trim()

  console.log(this.id_facultad)
  console.log(this.id_facultad,id_programa)
  this.docenteService
    .getMateriasForPrograms(this.id_facultad,id_programa)
    .pipe(
      tap((res: any) => {
      console.log(res)

       this.materias=res.resultado})
    )
    .subscribe();
}
cancelar(id_tutoria: number,id_usuario:number) {
  console.log(id_tutoria)
  Swal.fire({
    title: 'Estas seguro que deseas eliminarlo',
    text: 'no podra ser revertido',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si,Eliminar',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Eliminado!', 'La tutoria ha sido eliminada.', 'success');
      this.service.eliminarTutoria(id_tutoria,id_usuario).pipe(
        tap((res:any)=>{
          console.log(res)
          this.service.getTutoriasPendientes()
        .pipe(
          tap((res: any) => {
            console.log(res);
            this.horarios = res.resultado;
            this.listOfDisplayData=[...res.resultado]
          })
        )
        .subscribe();
        })
      ).subscribe()
      
    }
  });
}


}
  


  
