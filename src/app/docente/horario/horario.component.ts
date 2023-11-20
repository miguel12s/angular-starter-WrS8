import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { DocenteService } from '../services/docente.service';
import { tap } from 'rxjs';
import { EstudianteService } from 'src/app/estudiante/services/estudiante.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
  horaInicio:string
  horaFin:string
}
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})



export class HorarioComponent implements OnInit {
datosModal: any={}
horario:any
estudiantes:any[]=[]
pasarListaForm!: FormGroup;
asistencias:any[]=[]

private estudianteService=inject(EstudianteService)
private docenteService=inject(DocenteService)
private fb=inject(FormBuilder)
constructor(){

this.pasarListaForm=this.initPasarListaForm()
console.log(this.pasarListaForm)
}

ngOnInit(): void {
  this.estudianteService.obtenerTutoriasPendientes().pipe(

    tap((res:any)=>{
    console.log(res);
    
      this.horario=res.resultado
    })
  ).subscribe()
}
 descripcion(id_tutoria:number){
this.estudianteService.getHorarioForId(id_tutoria).pipe(
  tap((res:any)=>{
    this.datosModal=res
  })
).subscribe()

 }

 listado(id_tutoria:string){

  this.idUsuarioArray.clear();
  this.asistenciasArray.clear();
  this.docenteService.getListado(id_tutoria).pipe(
    tap((res:any)=>{
    
      console.log(res)

      this.estudiantes=res.resultado
      this.estudiantes.forEach((estudiante: any) => {
            this.idUsuarioArray.push(new FormControl(estudiante.id_estudiante));
            this.asistenciasArray.push(
              new FormControl(estudiante.asistencia===1)
            );
            this.idTutoriaArray.push(
              new FormControl(estudiante.id_tutoria)
            );
            this.observacionArray.push(
              new FormControl(estudiante.comentario)
            )
      })
      console.log(this.pasarListaForm.value)

      
    })
  ).subscribe()
}
get idUsuarioArray() {
  return this.pasarListaForm.get('id_usuario') as FormArray;
}

get asistenciasArray() {
  return this.pasarListaForm.get('asistencia') as FormArray;
}

get idTutoriaArray() {
  return this.pasarListaForm.get('id_tutoria') as FormArray;
}

get observacionArray(){
  return this.pasarListaForm.get('observacion') as FormArray
}




initPasarListaForm(): FormGroup {
  return this.fb.group({
    id_usuario: this.fb.array([]),
    asistencia: this.fb.array([]),
    id_tutoria: this.fb.array([]),
    observacion:this.fb.array([])
  });
}

changeValue(index:number){
  const value=this.pasarListaForm?.value.asistencia.at(index)
  console.log(value)
 if(value){
  
  this.asistenciasArray.at(index).setValue(false)
 }else{
  this.asistenciasArray.at(index).setValue(true)

 }
}





pasarLista() {
  this.asistencias=[]
  const estudiantes = this.pasarListaForm?.value;
  console.log(estudiantes)

  for (let index = 0; index < estudiantes.id_usuario.length; index++) {
    const id_usuario = estudiantes.id_usuario[index];
    const asistencia=estudiantes.asistencia[index]===false?0:1
    const id_tutoria = estudiantes.id_tutoria[index];
    const observacion=estudiantes.observacion[index]

    const estudiante={
      "id_usuario": id_usuario,
      "asistencia": asistencia,
      "id_tutoria":id_tutoria,
      "observacion":observacion
    }
    this.asistencias.push(estudiante)
    console.log(this.asistencias)
  }
this.docenteService.pasarLista(this.asistencias)  
  
}


changeInput(index:number,event:any){
  const observacionFragmento=event.target.value
  while (this.observacionArray.length <= index) {
    this.observacionArray.push(this.fb.control(''));
  }

  // Obtiene la observación actual
  const observacionActual = this.observacionArray.at(index).value;

  // Agrega el fragmento al final de la observación actual
  const nuevaObservacion =  observacionFragmento;

  // Actualiza el valor del control en el FormArray
  this.observacionArray.at(index).setValue(nuevaObservacion);
}

descargarListado(id:number){
  this.docenteService.getlistadoForDownload(id).pipe(
    tap((data:any)=>{
      const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'nombre-del-archivo.xlsx'; // Puedes darle el nombre que quieras
        a.click();
        window.URL.revokeObjectURL(url);
    })
  ).subscribe()
}
 

descargarArchivo(data:Blob){
  const nombreArchivo = 'nombre_del_archivo.xlsx'; // Nombre del archivo que coincide con el proporcionado en el servidor

  const url = window.URL.createObjectURL(data);
  const a = document.createElement('a');
  a.href = url;
  a.download = nombreArchivo;

  // Simula un clic en el enlace para descargar el archivo
  a.click();

  // Libera los recursos
  window.URL.revokeObjectURL(url);
}
}





