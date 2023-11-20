import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent {
isCollapsed=false


constructor(private readonly router:Router){

}
logout(){
 
  sessionStorage.removeItem('admin')
  this.router.navigate(['/auth/login']); 

}



}
