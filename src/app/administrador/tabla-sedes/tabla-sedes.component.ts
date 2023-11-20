import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';

interface DataItem {
  id_sede:String
  sede:String
}

@Component({
  selector: 'app-tabla-sedes',
  templateUrl: './tabla-sedes.component.html',
  styleUrls: ['./tabla-sedes.component.scss']
})
export class TablaSedesComponent {
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [];
  listOfDisplayData:any = [];
  sedes:any[]=[]
  sede:any[]=[]
  sedeForm!:FormGroup
  sedeAgregar!:FormGroup
constructor(private fb:FormBuilder,private service:AdminService){
  this.sedeForm=this.initForm()
  this.sedeAgregar=this.initFormSede()



}
initFormSede():FormGroup{
  return this.fb.group({
    sede:['',Validators.required],
    
  })
}

initForm():FormGroup{
  return this.fb.group({
    sede:['',Validators.required],
    id_sede:['',Validators.required]
  })
}

  reset(): void {
    this.searchValue = '';
    this.search();
  }
  
  search(): void {
    this.visible = false;
    this.sedes = this.listOfDisplayData.filter((item: DataItem) => item.sede.indexOf(this.searchValue) !== -1);
  }


  ngOnInit(): void {
    this.service.getSedes().pipe(
      tap((res:any)=>{
        console.log(res);
        
this.sedes=res
this.listOfDisplayData=[...res.data]
}
    )).subscribe()
  }
  modificar(id_sede:string){
    this.service.getDataForIdSede(id_sede).pipe(
      tap((res:any)=>{
        this.sedeForm.patchValue({
          sede:res.sede,
          id_sede:res.id
        })
      })
    ).subscribe()
  }

agregar(){

  const sede=this.sedeAgregar.value
    console.log(sede);
    
    this.service.setSede(sede).pipe(
      tap((res:any)=>{
        console.log(res);
        
        if(res.error){
          Swal.fire("Error al agregar el programa",res.error,"error")
      }else if(res.success){
        Swal.fire("Añadido exitosamente",res.data,"success")
      }
      
      this.service.getSedes().pipe(
        tap((res:any)=>{
          this.sedes=res
        })
      ).subscribe()









      



      
    })
    ).subscribe()

  
}
onSubmit(){
const sedes=this.sedeForm.value
this.service.actualizarSedes(sedes).pipe(tap((res:any)=>{
  console.log(res);
  
    if(res.error){
      Swal.fire("Error al actualizar",res.error,"error")
  }else if(res.success){
    Swal.fire("Actualizacion exitosa",res.success,"success")
    



  }


  this.service.getSedes().pipe(
    tap((res:any)=>{
      this.sedes=res
    })
  ).subscribe()


})





).subscribe()

}
}

