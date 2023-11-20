import { Component,Input, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Programa } from 'src/app/shared/interfaces/Programa.interface';
interface DataItem {
  id_facultad:String
  facultad:String
}
@Component({
  selector: 'app-facultadxprograma',
  templateUrl: './facultadxprograma.component.html',
  styleUrls: ['./facultadxprograma.component.scss']
})
export class FacultadxprogramaComponent {
  searchValue = '';
  visible = false;
  listOfData: any[] = [
  ];
  programas:Programa[]=[]
  facxpro:any[]=[]
  facultad:any[]=[]
  listOfDisplayData:any = [];
  facultadForm!:FormGroup
  facultadAgregar!:FormGroup



  constructor(private service:AdminService,public fb:FormBuilder){
    this.facultadForm=this.initForm()
    this.facultadAgregar=this.initFormFacultad()
  }
 
initFormFacultad():FormGroup{
  return this.fb.group({
    facultad:['',Validators.required],
    programa:['',Validators.required]
    
  })
}


  initForm():FormGroup{
    return this.fb.group({
      id:['',Validators.required],
      facultad:['',Validators.required],
      programa:['',Validators.required]
    })
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }
  
  search(): void {
    this.visible = false;
    this.facxpro = this.listOfDisplayData.filter((item: DataItem) => item.facultad.indexOf(this.searchValue) !== -1);
  }

  ngOnInit(): void {
    this.service.getFacultadxprograma().pipe(
      tap((res:any)=>{
        console.log(res);
        
this.facxpro=res
this.listOfDisplayData = [...this.facxpro];

      }
    )).subscribe()

    this.service.getProgramas().pipe(
      tap((res:any)=>{
        this.programas=res
      })
    ).subscribe()

    this.service.getFacultades().pipe(
      tap((res:any)=>{
        this.facultad=res.resultado
      })
    ).subscribe()
  }


  actualizar(id_tutoria:string){
    // this.service.actualizarFacultad(id_tutoria).pipe(
    //   tap((res:any)=>{
    //     if(res.message=="success"){Swal.fire("Actualizar facultad",'la facultad se ha actualizado','success')}
    //   })
    // ).subscribe()
  }
  modificar(id_facultad:number){
    this.service.getForIdFacultadxPrograma(id_facultad).pipe(
      tap((res:any)=>{
        this.facultadForm.patchValue({
          id:res.resultado.id,
          programa:res.resultado.programa,
          facultad:res.resultado.facultad,
        })
      })
    ).subscribe()
  }
  onSubmit(){
    const facultades=this.facultadForm.value
    this.service.updateFacultadxPrograma(facultades).pipe(tap((res:any)=>{
      console.log(res);
      
        if(res.error){
          Swal.fire("Error al actualizar",res.error,"error")
      }else if(res.success){
        Swal.fire("Actualizacion exitosa","La facultad ha sido actualizada con exito","success")
        



      }


      this.service.getFacultadxprograma().pipe(
        tap((res:any)=>{
          this.facxpro=res
        })
      ).subscribe()


    })




    
  ).subscribe()
  }


  agregar(){
    const facultad=this.facultadAgregar.value
    console.log(facultad);
    
    this.service.agregarFacultadxPrograma(facultad).pipe(
      tap((res:any)=>{
        console.log(res);
        
        if(res.error=="La facultad ya se encuentra registrada en el sistema"){
          Swal.fire("Error al agregar facultadxprograma",res.error,"error")
      }else if(res.success){
        Swal.fire("Añadido exitosamente",res.success,"success")
      }
      
      this.service.getFacultadxprograma().pipe(
        tap((res:any)=>{
          this.facxpro=res
        })
      ).subscribe()









      



      
    })
    ).subscribe()
  }
}
