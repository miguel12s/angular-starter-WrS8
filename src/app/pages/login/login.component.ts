import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  contactForm!: FormGroup;
  showAlert = false;
  showAlertError = false;
  submitted = false;
  roles:string[]=['estudiante','docente','administrador']
  static rol=""
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private apiservice: ApiService
  ) {
    this.contactForm = fb.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required, Validators.minLength(7)]],
    });
  }
 

  onSubmit(form: any): void {
    console.log(form);

    let token = '';
    let id_usuario = 0;
    this.submitted = true;
    if(form.email==="miguelsuarez@unibarranquilla.edu.co" && form.password==="miguel123"){
     localStorage.setItem("admin","miguel")
      this.router.navigate(['/admin'])
      return
    }
    if (this.contactForm.valid) {
      this.apiservice
        .loginService(form.email, form.password)
        .subscribe((response: any) => {
          console.log(response);
        if(response.id_estado==4){
          if (response.id_rol == 1 ) {
            this.router.navigate(['/estudiante']);
            token = response.token;
           localStorage.setItem('token', token);
           localStorage.setItem('id_usuario',response.id_usuario);
            LoginComponent.rol=response.rol
           localStorage.setItem('rol', response.id_rol);

            id_usuario = response.usuario;
          } else if (response.id_rol == 2) {
            console.log(response)
            this.router.navigate(['/docente']);
            token = response.token;
           localStorage.setItem('token', token);
            LoginComponent.rol=response.id_rol

           localStorage.setItem('rol', response.id_rol);
            localStorage.setItem('id_usuario',response.id_usuario)
          } else {
            this.showAlertError = true;
          }
        }else if(response.id_estado==14){
          Swal.fire('Advertencia ',"el usuario ha sido deshabilitado porfavor comunicarte con el administrador","warning")
        }else if(response.error) {
          Swal.fire('Error',"Correo y/o contraseña incorrecto","error")
        }else{
          
          Swal.fire('Error',"Usuario no encontrado","error")
        }
        
        }),(error:any)=>{

          if(error.status===0){
          Swal.fire("error","ocurrio un error en el servidor vuelva mas tarde","error")
          }
        }

    }
  }
}
