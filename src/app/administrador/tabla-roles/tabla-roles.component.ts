import { Component, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';

interface DataItem {
  id_rol: String
  rol: String
}

@Component({
  selector: 'app-tabla-roles',
  templateUrl: './tabla-roles.component.html',
  styleUrls: ['./tabla-roles.component.scss']
})
export class TablaRolesComponent {
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [

  ];
  listOfDisplayData:any = [];
  rol: any[] = []
  roles: any[] = []
  rolForm!: FormGroup
  rolAgregar!: FormGroup

  constructor(private service: AdminService, public fb: FormBuilder) {
    this.rolForm = this.initForm()
    this.rolAgregar = this.initFormRol()
  }


  initForm(): FormGroup {
    return this.fb.group({
      rol: ['', Validators.required],
      id_rol: ['', Validators.required]
    })
  }

  initFormRol(): FormGroup {
    return this.fb.group({
      rol: ['', Validators.required],

    })
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.roles = this.listOfData.filter((item: DataItem) => item.rol.indexOf(this.searchValue) !== -1);
  }

  ngOnInit(): void {
    this.service.getRoles().pipe(
      tap((res: any) => {
        console.log(res);

        this.roles = res.resultado
        this.listOfData=[...res.resultado]
      }
      )).subscribe()
  }


  agregar() {
    const rol = this.rolAgregar.value
    console.log(rol);

    this.service.setRol(rol).pipe(
      tap((res: any) => {
        console.log(res);

        if (res.error) {
          Swal.fire("Error al agregar el rol", res.error, "error")
        } else if (res.success) {
          Swal.fire("Añadido exitosamente", "El rol ha sido agregado con exito", "success")
        }

        this.service.getRoles().pipe(
          tap((res: any) => {
            this.roles = res.resultado
          })
        ).subscribe()














      })
    ).subscribe()
  }

  modificar(id_rol: string) {

    this.service.getDataForIdRol(id_rol).pipe(
      tap((res: any) => {
        console.log(res);

        this.rolForm.patchValue({
          rol: res.rol,
          id_rol: res.id
        })
      })
    ).subscribe()



  }

  onSubmit() {
    const facultades = this.rolForm.value
    this.service.actualizarRol(facultades).pipe(tap((res: any) => {
      console.log(res);

      if (res.error) {
        Swal.fire("Error al actualizar", res.error, "error")
      } else if (res.success) {
        Swal.fire("Actualizacion exitosa", res.success, "success")




      }


      this.service.getRoles().pipe(
        tap((res: any) => {
          this.roles = res.resultado
        })
      ).subscribe()


    })





    ).subscribe()





  }



}
