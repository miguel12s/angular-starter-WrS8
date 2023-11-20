import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  
})
export class CardComponent {
  @Input() horario!:any
  public datosModa:any
  public datosModal:any={}
  mostrar:boolean=true
  indice=0
  constructor(private estudianteService: EstudianteService,private changeDetectorRef: ChangeDetectorRef,private ngZone: NgZone){

  }

  // ngOnInit(): void {
    
  // }
  // ngAfterViewInit(): void {
  //  this.indice=this.horario.id_tutoria

   
  // }


  // descripcion(horario: any) {
 
  //   this.estudianteService.getHorarioForId(this.indice).pipe(
  //     tap((res:any)=>{
       
  //       this.datosModal =res.data; 
  //       this.mostrar=false
  //     })
  //   ).subscribe()
 
     

  // }


}
