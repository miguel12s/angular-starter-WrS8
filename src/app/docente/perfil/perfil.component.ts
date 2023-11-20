import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DocenteService } from '../services/docente.service';
import { Docente } from 'src/app/shared/interfaces/docente.interface';
import { tap } from 'rxjs';
import { EstudianteService } from 'src/app/estudiante/services/estudiante.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
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
          this.contactForm.patchValue({
            nombres: docente.nombres,
            apellidos: docente.apellidos,
            tipoDocumento: docente.tipo_documento,
            numeroTelefono: docente.celular,
            correo: docente.correo,
            numeroDocumento: docente.numero_documento,
            facultad: docente.facultad,
          });
          this.foto=docente.foto
          console.log(this.foto);
          
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
    const token =sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true',
      }),
    };
    const url = 'http://127.0.0.1:5000/upload';
    this.http
      .post(url, formData, httpOptions)
      .pipe(
        tap((res: any) => {
          console.log(res);
          
          this.foto='http://localhost:5000/static/uploads/'+res.imgPath
         
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

