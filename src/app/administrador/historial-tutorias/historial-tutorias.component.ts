import { Component,Input, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import { DocenteService } from 'src/app/docente/services/docente.service';


@Component({
  selector: 'app-historial-tutorias',
  templateUrl: './historial-tutorias.component.html',
  styleUrls: ['./historial-tutorias.component.scss']
})
export class HistorialTutoriasComponent implements OnInit {


  searchValue = '';
visible = false;
listOfData: any[] = [
  
];
datosModal:any={}
tutorias:any[]=[]
  estudiantes: any[]=[];
  data:any[]=[]
constructor(private service:AdminService,private docenteService:DocenteService){




  }


reset(): void {
  this.searchValue = '';
  this.search();
}

search(): void {
  this.visible = false;
  
  this.data = this.tutorias.filter((item: any) => item.nombres.indexOf(this.searchValue) !== -1);

  console.log(this.data);

}

ngOnInit(){
  this.service.getHorarioFinished().pipe(
    tap((res:any)=>{
      this.tutorias=res.resultado
      this.data = [...res.resultado];
      
      
    })
  ).subscribe()
}
descripcion(id_tutoria:string){
  console.log(id_tutoria)
  this.docenteService.getHorarioForId(id_tutoria).pipe(
    tap((res:any)=>{
      this.datosModal=res
    })
  ).subscribe()
  


}

listado(id_tutoria:number){
  this.docenteService.getlistadoForDownload(id_tutoria).pipe(
    tap((data:any)=>{
      const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'nombre-del-archivo.xlsx'; // Puedes darle el nombre que quieras
        a.click();
        window.URL.revokeObjectURL(url);
    })
  ).subscribe()
}

}
  

