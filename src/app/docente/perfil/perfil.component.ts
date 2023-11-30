import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DocenteService } from '../services/docente.service';
import { Docente } from 'src/app/shared/interfaces/docente.interface';
import { tap } from 'rxjs';
import { EstudianteService } from 'src/app/estudiante/services/estudiante.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  fotoOnError:string=""
  contactForm!: FormGroup;
  passwordForm!:FormGroup;
  foto!:string
  public showAlertDanger = false;
  submitted = false;
  selectFile:any
  showAlertPassword=false
  foto2 = '';
  alertSuccess = false
  alertPasswordBd=false
  constructor(public fb: FormBuilder, private docenteService: DocenteService,private estudianteservice:EstudianteService,private http:HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.passwordForm=this.initCambioContraseña()
    this.docenteService
      .getDataDocente()
      .pipe(
        tap((docente:any) => {
          console.log(docente)
          this.contactForm.patchValue({
            nombres: docente.nombres,
            apellidos: docente.apellidos,
            tipoDocumento: docente.tipo_documento,
            numeroTelefono: docente.celular,
            correo: docente.correo,
            numeroDocumento: docente.numero_documento,
            facultad: docente.facultad,
          });
          this.fotoOnError = 'https://th.bing.com/th/id/OIP.rIsI3TvodysyTi_2VOGK3gHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7';

          this.foto=`https://fastapi-pwqp-production.up.railway.app/upload/display/${docente.foto}`|| 'https://th.bing.com/th/id/OIP.rIsI3TvodysyTi_2VOGK3gHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7'
          
        })
      )
      .subscribe();
  }

  validarCorreo() {
    if (!this.contactForm.get('correo')?.invalid) {
      this.showAlertDanger = false;
    } else {
      this.showAlertDanger = true;
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numeroTelefono: ['', Validators.required],
      correo: ['', Validators.email],
      numeroDocumento: ['', [Validators.required, Validators.maxLength(10)]],
      facultad: ['', Validators.required],
    });
  }

  initCambioContraseña() {
    return this.fb.group({
      contraseña: ['', Validators.required],
      nuevaContraseña: ['', Validators.required],
      confirmarContraseña: ['', Validators.required],
    });

  }

  

  onChange(event:any){
      this.selectFile = event.target.files[0];
    console.log('entras')
  }

  subirFoto(event:any){
    console.log('ebtras a subir foto');
    
    const formData = new FormData();
    formData.append('file', this.selectFile);
    this.estudianteservice.changeFoto(formData)
      .pipe(
        tap((res: any) => {
          console.log(res);
         if(res.error){
          Swal.fire('error al subir el archivo',res.error,'error')
         }else {
          Swal.fire('archivo subido con exito',res.success,'success')
          this.foto='https://fastapi-pwqp-production.up.railway.app/upload/display/'+res.path
         }
         
        })
      )
      .subscribe();
     
  }


  changePassword(){
    if (
      this.passwordForm.valid &&
      this.passwordForm.get('nuevaContraseña')?.value ==
        this.passwordForm.get('confirmarContraseña')?.value
    ) {
      let form = {
        "contraseña_actual":this.passwordForm.get('contraseña')?.value,
        "contraseña_nueva":this.passwordForm.get('nuevaContraseña')?.value
      };

      this.estudianteservice
        .getPasswordForId(form)
        .pipe(
          tap((message: any) => {
            console.log(message);

            if (message.message === 'la contraseña ha sido cambiada') {
              this.alertSuccess=true    
              this.showAlertPassword=false 
              this.alertPasswordBd=false
        
            } else {
              this.alertSuccess=false    

              this.alertPasswordBd=true
              this.showAlertPassword=false

              
            }
          })
        )
        .subscribe();
    } else {
      this.alertSuccess=false  
      this.showAlertPassword=true
    }
  }
    
  }

