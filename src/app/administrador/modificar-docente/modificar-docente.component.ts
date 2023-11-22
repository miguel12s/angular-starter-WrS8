import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../services/admin.service';
import { tap,forkJoin } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface DataItem {
  nombres:string
  facultad:string
  celular:string
  numeroCedula:string
  correo:string
}

// interface Docente{
//   nombre:string
//   facultad:string
//   telefono:string
//   numeroCedula:string
//   correo:string
// }
// interface ColumnItem {
//   name: string;
//   sortOrder: NzTableSortOrder | null;
//   sortFn: NzTableSortFn<DataItem> | null;
//   listOfFilter: NzTableFilterList;
//   filterFn: NzTableFilterFn<DataItem> | null;
// }

@Component({
  selector: 'app-modificar-docente',
  templateUrl: './modificar-docente.component.html',
  styleUrls: ['./modificar-docente.component.scss']
})
export class ModificarDocenteComponent implements OnInit {

constructor(private service:AdminService,public fb:FormBuilder){
  this.facultadForm=this.initForm()
  this.facultadFormTwo=this.initFormTwo()
}
facultades:any[] =[]
tipos:any[]=[]
estados:any[]=[]
searchValue = '';
visible = false;
listOfData: DataItem[] = [
  
];
programas2:any[]=[]

programas:any[]=[]
usuarios:any[]=[]
facultadxprograma:any[]=[]
listOfDisplayData:any[] = [];
facultadForm!:FormGroup
facultadFormTwo!:FormGroup

ngOnInit(): void {
//   this.service.getDocentes().pipe(
//     tap((res:any)=>{
//       console.log(res.data);
      
// this.listOfData=res.data
// this.listOfDisplayData=[...res.data]
//     })
//   ).subscribe()

  

    this.service.getFacultadUser().pipe(
      tap((res:any)=>{
        console.log(res)
          this.listOfDisplayData=res
      })
    ).subscribe()

    this.service.getEstudiantes().pipe(
      tap((res:any)=>{
        this.usuarios=res
        console.log(res)
      })
    ).subscribe()
    this.service.getFacultades().pipe(
      tap((res:any)=>{
        this.facultades=res.resultado
        console.log(res)
      })
    ).subscribe()

    this.service.getProgramas().pipe(
      tap((res:any)=>{
        this.programas2=res
        console.log(res)
      })
    ).subscribe()

    
    // this.service.getTipo(),
    // this.service.getEstado()
  
    
 

}

onChange(event:any){
  const data=event.target.value
  this.service.getProgramasForFaculty(data).pipe(
    tap((res:any)=>{
      this.programas=res.resultado
    })
  ).subscribe()
}

onChanges(event:any){
  const data=event.target.value
  this.service.getProgramasForFaculty(data).pipe(
    tap((res:any)=>{
      this.programas2=res.resultado
    })
  ).subscribe()
}

onSubmit(){
  
  const docente=this.facultadForm.value;
  const facultad={
    id_usuario:docente.usuario.split('-')[1],
    facultad:docente.facultad,
    programa:docente.programa
  }
 this.service.createFacultadUsuario(facultad).pipe(
  tap((res:any)=>{
    if(res.success){
      Swal.fire("facultadxusuario creada",res.success,"success")
    }else{
Swal.fire("error al registrar la facultad al usuario",res.error,"error")
    }
  })
 ).subscribe()
  
}

actualizar(){
  const form=this.facultadFormTwo.value
  const facultad={
    id_fpxusuario:form.id_usuario,
    facultad:form.facultad,
    programa:form.programa
  }
  this.service.updateFacultadProgramaxUsuario(facultad).pipe(
    tap((res:any)=>{
      if(res.success){
        Swal.fire("facultadxusuario creada",res.success,"success")
      }else{
  Swal.fire("error al registrar la facultad al usuario",res.error,"error")
      }
      
    })
  ).subscribe()
  
}

reset(): void {
  this.searchValue = '';
  this.search();
}

initForm():FormGroup{
  return this.fb.group({
    usuario:['',Validators.required],
    facultad:['',Validators.required],
    programa:['',Validators.required],
    
  })
}

initFormTwo():FormGroup{
  return this.fb.group({
    usuario:['',Validators.required],
    facultad:['',Validators.required],
    programa:['',Validators.required],
    id_usuario:['',Validators.required]
    
  })
}




search(): void {
  this.visible = false;
  this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.nombres.indexOf(this.searchValue) !== -1);
}

modificar(id_fpxusuario:number){
  this.service.getFacultadxUsuarioForId(id_fpxusuario).pipe(
    tap((res:any)=>{
      console.log(res);
      
      this.facultadFormTwo.patchValue({
        usuario:res.nombre_completo,
        programa:res.programa,
        facultad:res.facultad,
        id_usuario:res.id


      })
      
    })
  ).subscribe()
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
        //   this.docenteService
        // .getHorario()
        // .pipe(
        //   tap((res: any) => {
        //     console.log(res);

        //     this.horario = res.resultado;
        //   })
        // )
        // .subscribe();
        })
      ).subscribe()
      
    }
  });
}

descripcion(id:number){
  this.service.obtenerFacultadxPrograma(id).pipe(
    tap((res:any)=>{
      this.facultadxprograma=res
      console.log(this.facultadxprograma)
    })
  ).subscribe()
}

}
  

