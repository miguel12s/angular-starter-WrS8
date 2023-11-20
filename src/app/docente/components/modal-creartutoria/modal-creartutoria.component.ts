import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocenteService } from '../../services/docente.service';
import { ComponentService } from 'src/app/components/services/components.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-modal-crear-tutoria',
  templateUrl: './modal-creartutoria.component.html',
  styleUrls: ['./modal-creartutoria.component.scss']
})
export class ModalCreartutoriaComponent {
  
  horarioForm!: FormGroup;
  fechaHoy=''
  salones:string[]=[]
  materias:string[]=[]
  sedes:string[]=[]
  programas:string[]=[]
  data:string[]=[]
  
  constructor(public fb:FormBuilder,private docenteService:DocenteService,private componenteService:ComponentService){
    const dateToday=new Date();
    this.fechaHoy = dateToday.toISOString().substring(0, 10);
    console.log(this.fechaHoy);
    this.horarioForm=this.initForm()
  
  }
    ngOnInit(): void {
      this.docenteService.getSalones().pipe(
        tap((res:any) => {
          this.salones=res
        })
      ).subscribe()
  
      this.docenteService.getMaterias().pipe(
        tap((res:any) => {
          this.materias=res
        })
      ).subscribe()
  
      this.docenteService.getSedes().pipe(
        tap((res:any) => {
          this.sedes=res
        })
      ).subscribe()
      this.componenteService.getPrograms.pipe(
        tap((res:any) => {
          this.programas=res
        })
      ).subscribe()
        this.docenteService.getDataForId().pipe(
          tap((res:any)=>{
           
           this.horarioForm.patchValue({
            facultad:res.data.facultad,
            docente:res.data.nombre
           })
          })
        ).subscribe()
      
    }
  
  
  onSubmit(){
    const horario=this.horarioForm.value
    this.docenteService.crearHorario(horario).pipe(
      tap((res:any)=>{
        console.log(res);
        
      })
    ).subscribe()
  }
  
  initForm():FormGroup{
    return this.fb.group({
      facultad:[null,Validators.required],
      tema:[null,Validators.required],
      capacidad:[null,Validators.required],
      horaInicio:[null,Validators.required],
      programa:[null,Validators.required],
      sede:[null,Validators.required],
      docente:[null,Validators.required],
      horaFin:[null,Validators.required],
      materia:[null,Validators.required],
      salon:[null,Validators.required],
      fecha:[null,Validators.required],
  
    })
  }
  onSelect(event:any){
    const salon=event.target.value
    this.docenteService.obtenerCapacidadPorSalon(salon).pipe(
      tap((res:any)=>{
      this.horarioForm.patchValue({
        capacidad:res.capacidad
      })
      })
    ).subscribe()
  }
  
  }
  

