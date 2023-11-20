import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';


interface DataItem {
  id_programa:String
  programa:String
}

@Component({
  selector: 'app-tabla-programas',
  templateUrl: './tabla-programas.component.html',
  styleUrls: ['./tabla-programas.component.scss']
})
export class TablaProgramasComponent {
 
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
  ];
  listOfDisplayData:any = [];

  programas:any[]=[]
  programa:any[]=[]
  programaForm!:FormGroup
  programaAgregar!:FormGroup

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  constructor(private service:AdminService,public fb:FormBuilder){
    this.programaForm=this.initForm()
    this.programaAgregar=this.initFormPrograma()
  }
  initFormPrograma():FormGroup{
    return this.fb.group({
      programa:['',Validators.required],
      
    })
  }

  initForm():FormGroup{
    return this.fb.group({
      programa:['',Validators.required],
      id_programa:['',Validators.required]
    })
  }


  ngOnInit(): void {
    this.service.getProgramas().pipe(
      tap((res:any)=>{
        console.log(res);
        
this.programas=res
this.listOfDisplayData=[...this.programas]
      }
    )).subscribe()
  }
  modificar(id_programa:string){
    this.service.getDataForIdPrograma(id_programa).pipe(
      tap((res:any)=>{
        this.programaForm.patchValue({
          programa:res.programa,
          id_programa:res.id
        })
      })
    ).subscribe()
  }

  onSubmit(){
    const facultades=this.programaForm.value
    this.service.actualizarPrograma(facultades).pipe(tap((res:any)=>{
      console.log(res);
      
        if(res.error){
          Swal.fire("Error al actualizar",res.error,"error")
      }else if(res.success){
        Swal.fire("Actualizacion exitosa","El programa ha sido actualizado con exito","success")
        



      }


      this.service.getProgramas().pipe(
        tap((res:any)=>{
          this.programas=res
        })
      ).subscribe()


    })




    
  ).subscribe()
  }

  agregar(){
    const programa=this.programaAgregar.value
    
    this.service.setPrograma(programa).pipe(
      tap((res:any)=>{
        console.log(res);
        
        if(res.error){
          Swal.fire("Error al agregar el programa",res.error,"error")
      }else if(res.success){
        Swal.fire("Añadido exitosamente","El programa ha sido Añadido con exito","success")
      }
      
      this.service.getProgramas().pipe(
        tap((res:any)=>{
          this.programas=res
        })
      ).subscribe()









      



      
    })
    ).subscribe()
  }

  
  search(): void {
    this.visible = false;
    this.programas = this.listOfDisplayData.filter((item: DataItem) => item.programa.indexOf(this.searchValue) !== -1);
  }
}
