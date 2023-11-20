import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Estudiante } from 'src/app/shared/interfaces/Estudiante.interface';
import { AdminService } from '../services/admin.service';
import Swal from 'sweetalert2';

interface DataItem {
  nombres:string
  facultad:string
  celular:string
  numeroCedula:string
  correo:string
}

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss']
})

export class AgregarEstudianteComponent implements OnInit {
  @Input() estudiante!:DataItem[]
  
  constructor(private service:AdminService,public fb:FormBuilder){
    this.docenteForm=this.initForm()
  }
  facultades:any[] =[]
  tipos:any[]=[]
  estados:any[]=[]
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    
  ];
  listOfDisplayData:any[] = [];
  docenteForm!:FormGroup
  ngOnInit(): void {
    this.service.getDocentes().pipe(
      tap((res:any)=>{
        console.log(res.data);
        
  this.listOfData=res.data
  this.listOfDisplayData=[...res.data]
      })
    ).subscribe()
  
    forkJoin([
  
      this.service.getDocentes(),
      this.service.getFacultades(),
      this.service.getTipo(),
      this.service.getEstado()
    ]
      
    ).subscribe((results:any) => {
      // Procesa los resultados de cada solicitud
      console.log(results);
      
      this.listOfData = results[0].data;
      this.listOfDisplayData=[...this.listOfData]
      this.facultades = results[1].data;
      this.tipos=results[2].data;
      this.estados=results[3].data
    });
  
  }
  
  onSubmit(){
    
    const docente=this.docenteForm.value;
    const id_usuario=this.docenteForm.get('id_usuario')?.value
    this.service.actualizarDocente(id_usuario,docente)
  
  }
  
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  
  initForm():FormGroup{
    return this.fb.group({
      nombres:[''],
      apellidos:[''],
      celular:[''],
      facultad:[''],
      numero_documento:['',],
      tipo_documento:[''],
      id_usuario:['',],
      correo:['',Validators.email],
      estado:['']
    })
  }
  
  
  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.nombres.indexOf(this.searchValue) !== -1);
  }
  
  modificar(id_usuario:string){
    this.service.getDocenteForId(id_usuario).pipe(
      tap((res:any)=>{
        console.log(res.data.nombres);
        
        this.docenteForm.patchValue({
          nombres:res.data.nombres,
          apellidos:res.data.apellidos,
          celular:res.data.celular,
          tipo_documento:res.data.tipo_documento,
          id_usuario:res.data.id_usuario,
          correo:res.data.correo,
          facultad:res.data.facultad,
          numero_documento:res.data.numero_documento,
          estado:res.data.estado
  
  
        })
        
      })
    ).subscribe()
  }
  
  
  }
    
  
  


