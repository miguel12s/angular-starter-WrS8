import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';

interface DataItem {
  id_capacidad:number
  capacidad:number
}

@Component({
  selector: 'app-tabla-capacidades',
  templateUrl: './tabla-capacidades.component.html',
  styleUrls: ['./tabla-capacidades.component.scss']
})
export class TablaCapacidadesComponent {
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [ ];

  listOfDisplayData:any = [];


  capacidad: any[] = []
  capacidades: any[] = []
  capacidadForm!: FormGroup
  capacidadAgregar!: FormGroup 

  constructor(private service: AdminService, public fb: FormBuilder) {
    this.capacidadForm = this.initForm()
    this.capacidadAgregar = this.initFormCapacidad()
  }


  initForm(): FormGroup {
    return this.fb.group({
      capacidad: ['', Validators.required],
      id_capacidad: ['', Validators.required]
    })
  }

  initFormCapacidad(): FormGroup {
    return this.fb.group({
      capacidad: ['', Validators.required],

    })
  }


  ngOnInit(): void {
    this.service.getCapacidad().pipe(
      tap((res: any) => {
        console.log(res);

        this.capacidades = res
        this.listOfDisplayData=[...res]
      }
      )).subscribe()
  }


  agregar() {
    const capacidad = this.capacidadAgregar.value
    console.log(capacidad);

    this.service.setCapacidad(capacidad).pipe(
      tap((res: any) => {
        console.log(res);

        if (res.error) {
          Swal.fire("Error al agregar la capacidad", res.error, "error")
        } else if (res.success) {
          Swal.fire("Añadido exitosamente", "La capacidad ha sido Añadida con exito", "success")
        }

        this.service.getCapacidad().pipe(
          tap((res: any) => {
            this.capacidades= res
          })
        ).subscribe()














      })
    ).subscribe()
  }

  modificar(id_capacidad: string) {

    this.service.getDataForIdCapacidad(id_capacidad).pipe(
      tap((res: any) => {
        console.log(res);

        this.capacidadForm.patchValue({
          capacidad: res.capacidad,
          id_capacidad: res.id
        })
      })
    ).subscribe()



  }

  onSubmit() {
    const capacidades = this.capacidadForm.value
    this.service.actualizarCapacidad(capacidades).pipe(tap((res: any) => {
      console.log(res);

      if (res.error) {
        Swal.fire("Error al actualizar", res.error, "error")
      } else if (res.success) {
        Swal.fire("Actualizacion exitosa", res.success, "success")




      }


      this.service.getCapacidad().pipe(
        tap((res: any) => {
          this.capacidades = res
        })
      ).subscribe()


    })





    ).subscribe()





  }



  reset(): void {
    this.searchValue = '';
    this.search();
  }
  
  search(): void {
    this.visible = false
    this.capacidades = this.listOfDisplayData.filter((item: DataItem) => item.capacidad==parseInt(this.searchValue));
    console.log(this.capacidades);

  }
}
