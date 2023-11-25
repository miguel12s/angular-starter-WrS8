import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/shared/interfaces/contact.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!:FormGroup
  public fb=inject(FormBuilder)
  public apiservice=inject(ApiService)

constructor(){
this.contactForm=this.initForm()
  
}


  initForm():FormGroup{
    return this.fb.group({
      nombre:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]],
      apellido:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]],
      celular:['',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(3000000000),
        Validators.max(3249000000),

      ]
    ],
      correo:[null,[
        Validators.email, 
        Validators.pattern(".*@(unibarranquilla\\.edu\\.co)$")

    ]],
      mensaje:[null,Validators.required]
    })

  }
  onSubmit(){

    const contactForm:Contact=this.contactForm.value
    if(!this.contactForm.invalid){

      this.apiservice.createNotification(contactForm).pipe(


        tap((res:any)=>{
          if(res.success){
            Swal.fire("mensaje enviado",res.success,"success")
          }else{
            Swal.fire("error enviado",res.error,"error")
          }
        }),
        
        
        catchError(async (error) => Swal.fire("Ocurrio algun error","error en el servidor","error")

          )

      ).subscribe()
    }

  }
  
}
