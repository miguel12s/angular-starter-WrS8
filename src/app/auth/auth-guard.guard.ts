import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';


export const authGuardGuard: CanActivateFn = (route, state) => {
   const router=inject(Router)
console.log(LoginComponent.rol);

 if(localStorage.getItem('token')){
   return true

}else{
   return router.navigate(['auth/login'])
}}
