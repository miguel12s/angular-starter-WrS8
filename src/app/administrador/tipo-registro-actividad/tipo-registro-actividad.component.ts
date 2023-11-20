import { Component,Input, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface DataItem {
  id_facultad:String
  facultad:String
}
@Component({
  selector: 'app-tipo-registro-actividad',
  templateUrl: './tipo-registro-actividad.component.html',
  styleUrls: ['./tipo-registro-actividad.component.scss']
})
export class TipoRegistroActividadComponent {
  @Input() tablafacultades!:DataItem[]
  searchValue = '';
  visible = false;
  
  tipo:any[]=[]
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
    tipoRegistro:['',Validators.required],
    
  })
}


  initForm():FormGroup{
    return this.fb.group({
      tipoRegistro:['',Validators.required],
      id:['',Validators.required]
    })
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }
  
  search(): void {
    this.visible = false;
    this.tipo = this.listOfDisplayData.filter((item: DataItem) => item.facultad.indexOf(this.searchValue) !== -1);
  }

  ngOnInit(): void {
    this.service.getTipoRegistroActividad().pipe(
      tap((res:any)=>{
        console.log(res);
        
this.tipo=res
this.listOfDisplayData =[...this.tipo];

      }
    )).subscribe()
  }


  actualizar(id_tutoria:string){
    // this.service.actualizarFacultad(id_tutoria).pipe(
    //   tap((res:any)=>{
    //     if(res.message=="success"){Swal.fire("Actualizar facultad",'la facultad se ha actualizado','success')}
    //   })
    // ).subscribe()
  }
  modificar(id_facultad:number){
    this.service.getTipoRegistroActividadForId(id_facultad).pipe(
      tap((res:any)=>{
        console.log(res)
        this.facultadForm.patchValue({
          tipoRegistro:res.tipoRegistro,
          id:res.id
        })
      })
    ).subscribe()
  }
  onSubmit(){
    const facultades=this.facultadForm.value
    this.service.updateTipoRegistroActividadForId(facultades).pipe(tap((res:any)=>{
      console.log(res);
      
        if(res.error){
          Swal.fire("Error al actualizar",res.error,"error")
      }else if(res.success){
        Swal.fire("Actualizacion exitosa",res.success,"success")
        



      }


      this.service.getTipoRegistroActividad().pipe(
        tap((res:any)=>{
          
          this.listOfDisplayData = res;
          
        })
      ).subscribe()


    })




    
  ).subscribe()
  }


  agregar(){
    const facultad=this.facultadAgregar.value
    console.log(facultad);
    
    this.service.setTipoRegistroActividad(facultad).pipe(
      tap((res:any)=>{
        console.log(res);
        
        if(res.error){
          Swal.fire("Error al agregar facultad",res.error,"error")
      }else if(res.success){
        Swal.fire("Añadido exitosamente","La facultad ha sido agregada con exito","success")
      }
      
      this.service.getTipoRegistroActividad().pipe(
        tap((res:any)=>{
          this.tipo=res
          this.listOfDisplayData =[...this.tipo];
        })
      ).subscribe()









      



      
    })
    ).subscribe()
  }
}
