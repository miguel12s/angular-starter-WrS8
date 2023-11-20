import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('admin')==="miguel"){
    return true
  }else{
    const router=new Router()
    router.navigate(['auth/login'])
      return false
  }




};



