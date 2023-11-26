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
 
  localStorage.clear()
  this.router.navigate(['/auth/login']); 

}



}
