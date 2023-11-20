import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';
interface DataItem {
  id:number
  materia:string
}
@Component({
  selector: 'app-tabla-materias',
  templateUrl: './tabla-materias.component.html',
  styleUrls: ['./tabla-materias.component.scss']
})
export class TablaMateriasComponent {

  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
   
  ];

  
  
  materias:any[]=[]
  materia:any[]=[]
  materiaForm!:FormGroup
  materiaAgregar!:FormGroup


  constructor(private service:AdminService,public fb:FormBuilder){
    this.materiaForm=this.initForm()
    this.materiaAgregar=this.initFormMateria()
  }

  initFormMateria():FormGroup{
    return this.fb.group({
      materia:['',Validators.required],
      
    })
  }


  initForm():FormGroup{
    return this.fb.group({
      materia:['',Validators.required],
      id_materia:['',Validators.required]
    })
  }




  ngOnInit(): void {
    this.service.getMaterias().pipe(
      tap((res:any)=>{
        console.log(res);
        
this.materias=res.resultado
this.listOfData=[...res.resultado]      
}
    )).subscribe()
  }



  modificar(id_materia:string){
    this.service.getDataForIdMateria(id_materia).pipe(
      tap((res:any)=>{
        this.materiaForm.patchValue({
          materia:res.materia,
          id_materia:res.id
        })
      })
    ).subscribe()
  }

  onSubmit(){
    const materias=this.materiaForm.value
    this.service.actualizarMateria(materias).pipe(tap((res:any)=>{
      console.log(res);
      
        if(res.error){
          Swal.fire("Error al actualizar",res.error,"error")
      }else if(res.success){
        Swal.fire("Actualizacion exitosa","La materia ha sido actualizada con exito","success")
        



      }


       this.service.getMaterias().pipe(
        tap((res:any)=>{
          this.materias=res.resultado
        })
      ).subscribe()


    })




    
  ).subscribe()
  }


  agregar(){
    const materia=this.materiaAgregar.value
    console.log(materia);
    
    this.service.setMateria(materia).pipe(
      tap((res:any)=>{
        console.log(res);
        
        if(res.error){
          Swal.fire("Error al agregar la materia",res.error,"error")
      }else if(res.success){
        Swal.fire("Añadido exitosamente",res.success,"success")
      }
      
      this.service.getMaterias().pipe(
        tap((res:any)=>{
          this.materias=res.resultado
        })
      ).subscribe()









      



      
    })
    ).subscribe()
  }


  listOfDisplayData = [...this.listOfData];
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  
  search(): void {
    this.visible = false;
    this.materias= this.listOfData.filter((item: DataItem) => item.materia.indexOf(this.searchValue) !== -1);
  }
}
