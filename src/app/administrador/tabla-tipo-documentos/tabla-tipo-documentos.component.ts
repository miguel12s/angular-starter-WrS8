import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import { ComponentService } from 'src/app/components/services/components.service';
import Swal from 'sweetalert2';

interface DataItem {
  id_tipo_documento:String
  tipo_documento:String
}

@Component({
  selector: 'app-tabla-tipo-documentos',
  templateUrl: './tabla-tipo-documentos.component.html',
  styleUrls: ['./tabla-tipo-documentos.component.scss']
})
export class TablaTipoDocumentosComponent {
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
  ];
  listOfDisplayData:any = [];
  tipos_documento:any[]=[]
  tipo:any[]=[]
  tipoForm!:FormGroup
  tipoAgregar!:FormGroup

  reset(): void {
    this.searchValue = '';
    this.search();
  }


  constructor(private service:AdminService,public fb:FormBuilder,private serviceComponent:ComponentService){
    this.tipoForm=this.initForm()
    this.tipoAgregar=this.initFormTipo()
  }
  initFormTipo():FormGroup{
    return this.fb.group({
      tipo_documento:['',Validators.required],
      
    })
  }

  initForm():FormGroup{
    return this.fb.group({
      tipo_documento:['',Validators.required],
      id_tipo_documento:['',Validators.required]
    })
  }


  ngOnInit(): void {
    this.service.getTipo().pipe(
      tap((res:any)=>{
       
        
this.tipos_documento=res.resultado
this.listOfDisplayData=[...res.resultado]
      }
    )).subscribe()
  }

  onSubmit(){

    const tipo=this.tipoForm.value
    this.service.actualizarTipo(tipo).pipe(tap((res:any)=>{
      console.log(res);
      
        if(res.error){
          Swal.fire("Error al actualizar",res.error,"error")
      }else if(res.success){
        Swal.fire("Actualizacion exitosa","El tipo de documento ha sido actualizado","success")
        



      }


      this.service.getTipo().pipe(
        tap((res:any)=>{
          this.tipos_documento=res.resultado
        })
      ).subscribe()


    })




    
  ).subscribe()



  }
  agregar(){

    const tipo=this.tipoAgregar.value
    console.log(tipo);
    
    this.service.setTipo(tipo).pipe(
      tap((res:any)=>{
        console.log(res);
        
        if(res.error){
          Swal.fire("Error al agregar el programa",res.error,"error")
      }else if(res.success){
        Swal.fire("Añadido exitosamente","El tipo de documento ha sido Añadido con exito","success")
      }
      
      this.service.getTipo().pipe(
        tap((res:any)=>{
          this.tipos_documento=res.resultado
        })
      ).subscribe()









      



      
    })
    ).subscribe()
  }
  modificar(id_tipo_documento:string){

    this.service.getDataForIdTipo(id_tipo_documento).pipe(
      tap((res:any)=>{
        this.tipoForm.patchValue({
          tipo_documento:res.tipo_documento,
          id_tipo_documento:res.id
        })
      })
    ).subscribe()


  }

  
  
  search(): void {
    this.visible = false;
    this.tipos_documento = this.listOfDisplayData.filter((item: DataItem) => item.tipo_documento.indexOf(this.searchValue) !== -1);
  }
}
