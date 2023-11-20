import { Component, Input, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/interfaces/Estudiante.interface';
import { EstudianteService } from '../../services/estudiante.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-modal-descripcion',
  templateUrl: './modal-descripcion.component.html',
  styleUrls: ['./modal-descripcion.component.scss']
})
export class ModalDescripcionComponent implements OnInit {
@Input()  id_tutoria!:number 
public horarioTutoria:any
  constructor(private estudianteService: EstudianteService){}



ngOnInit(): void {
  
//  this.estudianteService.getHorarioForId(this.id_tutoria).pipe(
//   tap((res:any)=>{
//    this.horarioTutoria=res.data
    
//   })
//  ).subscribe()
  
}
}
