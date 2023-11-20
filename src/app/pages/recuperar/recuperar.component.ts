import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss']
})
export class RecuperarComponent {
email:string=""
forgot:FormGroup
show:boolean=false
constructor(private fb:FormBuilder, private apiService:ApiService){
  this.forgot=this.initForm()
}
onSubmit(){
this.apiService.forgot(this.forgot.value).pipe(
  tap((res:any)=>{
    console.log(res);
    
   if(res.success){
    Swal.fire("recuperacion de contraseña",res.success,'success')
   }else if(res.error){
    Swal.fire("Recuperacion de contraseña",res.error,'error')
   }   
  })

).subscribe()
}
initForm():FormGroup{
  return this.fb.group({
    email:['',Validators.email]
  })
}



}
