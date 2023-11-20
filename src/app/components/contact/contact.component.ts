import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/shared/interfaces/contact.interface';

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
      nombre:[null,Validators.required],
      apellido:[null,Validators.required],
      celular:[null,Validators.required],
      correo:[null,Validators.email],
      mensaje:[null,Validators.required]
    })

  }
  onSubmit(){

    const contactForm:Contact=this.contactForm.value
    if(!this.contactForm.invalid){

      this.apiservice.createNotification(contactForm).pipe(


        tap((res:any)=>{
          console.log(res)
        })
      ).subscribe()
    }

  }
  
}
