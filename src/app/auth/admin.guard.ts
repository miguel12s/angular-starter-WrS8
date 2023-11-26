import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('rol')==="3"){
    return true
  }else{
    const router=new Router()
    router.navigate(['auth/login'])
      return false
  }




};



