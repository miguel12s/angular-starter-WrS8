import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  private fb=inject(FormBuilder)
    
  public reportForm!:FormGroup
  private adminService=inject(AdminService)

  public reports:any[]=[
    'usuarios','tutorias eliminadas','tutorias creadas',
    'tutorias finalizadas','usuarios deshabilitados'
  ]
  constructor(){
    this.reportForm=this.initForm()
  }
  ngOnInit(): void {
  }

  initForm():FormGroup{
    return this.fb.group({
      start_date:[null,Validators.required],
      end_date:[null,Validators.required],
      type_report:[null,Validators.required]
    })
    
  }
  generarInforme(){
    let dataReport=this.reportForm.value
    this.adminService.getReportForDownload(dataReport).pipe(
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
