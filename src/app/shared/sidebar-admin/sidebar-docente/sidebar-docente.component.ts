import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-docente',
  templateUrl: './sidebar-docente.component.html',
  styleUrls: ['./sidebar-docente.component.scss']
})
export class SidebarDocenteComponent {
isCollapsed=false

logout(){
  sessionStorage.removeItem('token')
}
}
