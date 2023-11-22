import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/shared/interfaces/Estudiante.interface';
import { EstudianteService } from '../services/estudiante.service';
import { ComponentService } from 'src/app/components/services/components.service';
import { tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  contactForm!: FormGroup;
  passwordForm!: FormGroup;
  fileForm!: FormGroup;
  estudiante!: Estudiante;
  indice!: number;
  showAlertPassword=false
  selectFile!: File;
  foto2 = '';
  alertSuccess = false
  alertPasswordBd=false
  foto: any = null;
  public showAlertDanger = false;
  submitted = false;
  constructor(
    public fb: FormBuilder,
    private estudianteservice: EstudianteService,
    private componentService: ComponentService,
    private http: HttpClient
  ) {
    this.contactForm = this.initForm();
    this.passwordForm = this.initFormContraseña();
    
  }
  ngOnInit(): void {
   

    this.estudianteservice
      .getDataForId()
      .pipe(
        tap((res: any) => {
          console.log(res)
          this.contactForm.patchValue({
            nombres: res.nombres,
            apellidos: res.apellidos,
            tipoDocumento: res.tipo_documento,
            contraseña: res.contraseña,
            programa: res.programa,
            numeroTelefono: res.celular,
            correo: res.correo,
            numeroDocumento: res.numero_documento,
            facultad: res.facultad,
          });
          this.foto='https://fastapi-pwqp-production.up.railway.app/upload/display/'+res.foto
            
        
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

      programa: ['', Validators.required],
      numeroTelefono: ['', Validators.required],
      correo: ['', Validators.email],

      numeroDocumento: ['', [Validators.required, Validators.maxLength(10)]],
      facultad: ['', Validators.required],
    });
  }
  initFileForm(): FormGroup {
    return this.fb.group({
      foto: ['', Validators.required],
    });
  }
  initFormContraseña() {
    return this.fb.group({
      contraseña: ['', Validators.required],
      nuevaContraseña: ['', Validators.required],
      confirmarContraseña: ['', Validators.required],
    });
  }

  onSubmit(event: Event) {
    this.submitted = true;

    if (this.contactForm.invalid) {
      console.log('formulario valido');

      return;
    }

    console.log('invalido');
  }

  cambiarPassword() {
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

  subirFoto(event: any) {
    this.selectFile = event.target.files[0];
  }
  subirImagen() {
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
}
