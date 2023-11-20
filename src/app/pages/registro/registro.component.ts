import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { tap,map } from 'rxjs';
import { ComponentService } from 'src/app/components/services/components.service';
import { ApiService } from 'src/app/services/api.service';
import { Estudiante } from 'src/app/shared/interfaces/Estudiante.interface';
import { Facultad } from 'src/app/shared/interfaces/Facultad.interface';
import { Programa } from 'src/app/shared/interfaces/Programa.interface';
import { TipoDocumento } from 'src/app/shared/interfaces/tipoDocumento.inteface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistroComponent implements OnInit {
  contactForm!: FormGroup
  public showAlertDanger = false
  submitted = false
  

  programas:Array<Programa> =[]
  facultades:any 
  showProgram=false
  tipoDocumento:Array<TipoDocumento> =[]
  constructor(public fb: FormBuilder, private apiService: ApiService, private router: Router,private componentService:ComponentService) {
    


  }
  ngOnInit(): void {



    this.contactForm = this.initForm()
   

    this.componentService.getTipoDocumento.pipe(
     map((res:any)=>res.resultado)
    ).subscribe((tipoDocumento:TipoDocumento[])=>{
      console.log(tipoDocumento);
      
      this.tipoDocumento=tipoDocumento
    }

    )

    this.componentService.getFacultades().pipe(
      
      map((res: any) => res.resultado)  // Utilizamos map para acceder a la clave 'resultado'
    ).subscribe((facultades: Facultad[]) => {
      console.log(facultades)
      this.facultades=facultades// Asignamos los datos transformados a la variable facultades
    });




  }

  onSelect(event:any){
   
    
    this.programas=[]
    const id_facultad=parseInt(event.target.value.split(':')[1])
    console.log(id_facultad)
  
    this.apiService.getProgramas(id_facultad).pipe(
      
        map((programas:any)=>programas.resultado)
        
       
        
      
    ).subscribe((programas:Programa[])=>{
     if(this.programas.length==0){this.showProgram=true}
      this.programas=programas
      

    })
    
  }
  
  
  
  


  initForm(): FormGroup {
    return this.fb.group({
      nombres: [null,Validators.required],
      apellidos: [null,Validators.required],
      tipoDocumento: [null, Validators.required],
      contraseña: [null,Validators.required],
      programa: [null ,Validators.required],
      numeroTelefono: [null,[Validators.required,Validators.minLength(10)]],
      correo: [null, Validators.email],
      nuevaContraseña: [null,Validators.required],
      numeroDocumento: [null,Validators.required
    ],
      facultad: [null,Validators.required],
      politica:[null,Validators.requiredTrue]
    })
  }


  verifyNumber(event:any){
    const phoneNumber=event?.target.value
    console.log(phoneNumber);
    
    

  }
  onSubmit() {
    this.submitted=true
if(this.contactForm.invalid){return}
    console.log(this.contactForm.get('contraseña'),this.contactForm.get('nuevaContraseña'));
    
    if (this.contactForm.valid && this.contactForm.get('contraseña')?.value === this.contactForm.get('nuevaContraseña')?.value) {



      let estudiante: Estudiante = {
        id:undefined,
        nombres: this.contactForm.value.nombres,
        apellidos: this.contactForm.value.apellidos,
        id_tipo_documento: this.contactForm.value.tipoDocumento,
        numero_documento: this.contactForm.value.numeroDocumento,
        celular:this.contactForm.value.numeroTelefono.toString(),
        id_facultad: this.contactForm.value.facultad,
        id_programa: this.contactForm.value.programa,
        correo: this.contactForm.value.correo,
        contraseña: this.contactForm.value.contraseña,
        id_rol:1,
        id_estado:1
      }
      console.log('el estudiante es',estudiante);
      
      this.apiService.insertData(estudiante).subscribe(
        (response:any) => {
          if(response.error){
          Swal.fire("Error", "el correo ya se encuentra registrado en el programa ", "error")
      
          }else if(response.errorIdentificacion){
            Swal.fire("Error", "el numero del documento ya se encuentra registrado en el programa ", "error")
          }else{
            this.router.navigate(['/auth/login'])

          }
        }
      )
      // Swal.fire("registro existoso", "el registro ha sido exitoso", "success")
      
    } else {
      
    }











  }



}


