import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';

interface DataItem {
  id_salon:String
  capacidad:String
  salon:String
  id_sede:String
}
@Component({
  selector: 'app-tabla-salones',
  templateUrl: './tabla-salones.component.html',
  styleUrls: ['./tabla-salones.component.scss']
  
})
export class TablaSalonesComponent implements OnInit  {
  searchValue = '';
  visible = false;
  listOfData:any = [
   
  ];
  
  salones:any[]=[]
  salon:any[]=[]
  salonForm!:FormGroup
  salonAgregar!:FormGroup

 
  capacidades: any[]=[];
  sedes:any[]=[]
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  
  search(): void {
    this.visible = false;
    this.salones = this.listOfData.filter((item: DataItem) => item.salon.indexOf(this.searchValue) !== -1);
  }
  constructor(private service:AdminService,public fb:FormBuilder){
    this.salonForm=this.initForm()
    this.salonAgregar=this.initFormSalon()
  }
  initFormSalon():FormGroup{
    return this.fb.group({
      sede:['',Validators.required],
      salon:['',Validators.required],
      capacidad:['',Validators.required]
      
    })
  }

  initForm():FormGroup{
    return this.fb.group({
      id_salon:['',Validators.required],
      sede:['',Validators.required],
      salon:['',Validators.required],
      capacidad:['',Validators.required]
    })
  }


modificar(id_salon:string){

  this.service.getDataForIdSalon(id_salon).pipe(
    tap((res:any)=>{
     
      
      this.salonForm.patchValue({
        salon:res.salon,
        sede:res.sede,
        capacidad:res.capacidad,
        id_salon:res.id_salon
      })
    })
  ).subscribe()
}



ngOnInit(): void {
  this.service.getSalones().pipe(
    tap((res:any)=>{
      console.log(res);
      
this.salones=res
this.listOfData=[...res]
    }
  )).subscribe()

  this.service.getSedes().pipe(
    tap((res:any)=>{
this.sedes=res      
    }
  )).subscribe()
  
  this.service.getCapacidad().pipe(
    tap((res:any)=>{
this.capacidades=res     
    }
  )).subscribe()
}


onSubmit(){
  const salon=this.salonForm.value
  this.service.actualizarSalon(salon).pipe(tap((res:any)=>{
    console.log(res);
    
      if(res.error){
        Swal.fire("Error al actualizar",res.error,"error")
    }else if(res.success){
      Swal.fire("Actualizacion exitosa","El salón ha sido actualizado con exito","success")
      



    }


    this.service.getSalones().pipe(
      tap((res:any)=>{
        this.salones=res
      })
    ).subscribe()


  })




  
).subscribe()
}

agregar(){
const salon=this.salonAgregar.value
console.log(salon);

this.service.setSalon(salon).pipe(
  tap((res:any)=>{
    if (res.error) {
      Swal.fire("Error al agregar el salón", res.error, "error")
    } else if (res.success) {
      Swal.fire("Añadido exitosamente", "El salón ha sido Añadido con exito", "success")
    }
    this.service.getSalones().pipe(
      tap((res: any) => {
        this.salones= res
      })
    ).subscribe()

  }
  
  
  
  )
  
).subscribe()
}
}

