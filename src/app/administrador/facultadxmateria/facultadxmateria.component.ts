import { Component, Input, OnInit, inject } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { forkJoin, map, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Programa } from 'src/app/shared/interfaces/Programa.interface';
import { DocenteService } from 'src/app/docente/services/docente.service';
interface DataItem {
  id_facultad: String;
  facultad: String;
}
@Component({
  selector: 'app-facultadxmateria',
  templateUrl: './facultadxmateria.component.html',
  styleUrls: ['./facultadxmateria.component.scss'],
})
export class FacultadxmateriaComponent {
  searchValue = '';
  visible = false;
  listOfData: any[] = [];
  facultadxprograma: any[] = [];
  facultades: any[] = [];
  facultad: any[] = [];
  materias:any[]=[]
  programas:any[]=[]
  listOfDisplayData: any = [];
  facultadForm!: FormGroup;
  facultadAgregar!: FormGroup;
  private apiservice=inject(ApiService)
  private docenteservice=inject(DocenteService)

  constructor(private service: AdminService, public fb: FormBuilder) {
    this.facultadForm = this.initForm();
    this.facultadAgregar = this.initFormFacultad();
  }

  initFormFacultad(): FormGroup {
    return this.fb.group({
      facultad: ['', Validators.required],
      programa: ['', Validators.required],
      materia: ['', Validators.required],
      
    });
  }

  initForm(): FormGroup {
    return this.fb.group({
      id_fpxm:['',Validators.required],
      facultad: ['', Validators.required],
      programa: ['', Validators.required],
      materia: ['', Validators.required],
    });
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.facultadxprograma = this.listOfDisplayData.filter(
      (item: DataItem) => item.facultad.indexOf(this.searchValue) !== -1
    );
  }

  ngOnInit(): void {
    forkJoin([
      this.service.getFacultadxProgramaxMateria(),
      this.service.getFacultades(),
      this.service.getMaterias()
    ]).subscribe((res: any) => {
      this.facultadxprograma = res[0].resultado;
      this.facultades = res[1].resultado;
      this.materias=res[2].resultado
      this.listOfDisplayData = [...this.facultadxprograma];
    });
  }

  actualizar(id_tutoria: string) {
    // this.service.actualizarFacultad(id_tutoria).pipe(
    //   tap((res:any)=>{
    //     if(res.message=="success"){Swal.fire("Actualizar facultad",'la facultad se ha actualizado','success')}
    //   })
    // ).subscribe()
  }
  modificar(id_fxp:number) {
    this.service
      .getFacultadxProgramaxMateriaForId(id_fxp)
      .pipe(
        tap((res: any) => {
          console.log(res)
          this.facultadForm.patchValue({
            id_fpxm:res.id,
            facultad: res.facultad,
            programa: res.programa,
            materia:res.materia,
          });
        })
      )
      .subscribe();
  }
  onSubmit() {
    const facultades = this.facultadForm.value;
    console.log(facultades);
    
    this.service
      .actualizarMateriaxPrograma(facultades)
      .pipe(
        tap((res: any) => {
          console.log(res);

          if (
            res.error
          ) {
            Swal.fire('Error al actualizar', res.error, 'error');
          } else if (res.success) {
            Swal.fire(
              'Actualizacion exitosa',
              res.success,
              'success'
            );
          }

        //   this.service
        //     .getFacultades()
        //     .pipe(
        //       tap((res: any) => {
        //         this.facultadxprograma = res.resultado;
        //       })
        //     )
        //     .subscribe();
        })
      )
      .subscribe();
  }

  agregar() {
    const facultad = this.facultadAgregar.value;
    console.log(facultad);

    this.service
      .createFacultadxProgramaxMateria(facultad)
      .pipe(
        tap((res: any) => {
          console.log(res);

          if (
            res.error 
          ) {
            Swal.fire('Error al agregar facultad', res.error, 'error');
          } else if (res.success) {
            Swal.fire(
              'Añadido exitosamente',
              res.success,
              'success'
            );
          }

          this.service
            .getFacultadxProgramaxMateria()
            .pipe(
              tap((res: any) => {
                this.facultadxprograma = res.resultado;
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  }

  onChange(event:any){
    this.programas=[]
    const id_facultad=parseInt(event.target.value.split(':')[1])
    console.log(id_facultad)
  
    this.apiservice.getProgramas(id_facultad).pipe(
      
        map((programas:any)=>programas.resultado)
        
       
        
      
    ).subscribe((programas:Programa[])=>{
      this.programas=programas
      

    })

  }
  
}
