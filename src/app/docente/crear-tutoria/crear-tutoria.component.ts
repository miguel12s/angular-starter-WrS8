import {Component, OnInit, inject } from '@angular/core';
import { DocenteService } from '../services/docente.service';
import { forkJoin, tap } from 'rxjs';
import { ComponentService } from 'src/app/components/services/components.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Facultad } from 'src/app/shared/interfaces/Facultad.interface';
import { Horario } from 'src/app/shared/interfaces/horario.interface';
import { EstudianteService } from 'src/app/estudiante/services/estudiante.service';

@Component({
  selector: 'app-crear-tutoria',
  templateUrl: './crear-tutoria.component.html',
  styleUrls: ['./crear-tutoria.component.scss'],
})
export class CrearTutoriaComponent implements OnInit {
  private estudianteService = inject(EstudianteService);
  private fb = inject(FormBuilder);
  public facultades: Facultad[] = [];
  horaMinima: string = '07:00';
  horaMaxima: string = '20:00';
  horaFinalMinima: string = '08:00';
  horaFinalMaxima: string = '21:00';
  horarioForm!: FormGroup;
  dateNext = '';
  salones!: any;
  materias: any[] = [];
  sedes: string[] = [];
  programas!: any;
  data: string[] = [];
  salonesActualizar: string[] = [];
  id_usuario!: number;
  datosModal: any = {};
  horario: any;
  estudiantes: any[] = [];
  pasarListaForm!: FormGroup;
  asistencias: any[] = [];
  constructor(
    private docenteService: DocenteService,
    private componentService: ComponentService
  ) {
    const dateToday = new Date();
    dateToday.setDate(dateToday.getDate() + 1);

    this.dateNext = dateToday.toISOString().substring(0, 10);

    this.pasarListaForm = this.initPasarListaForm();
    this.horarioForm = this.initForm();

    this.horarioForm
      .get('hora_inicial')
      ?.valueChanges.subscribe((horaSeleccionada) => {
        const horaFin = this.horarioForm.get('hora_final')?.value;

        if (horaSeleccionada < this.horaMinima) {
          this.horarioForm
            .get('hora_inicial')
            ?.setValue(this.horaMinima, { emitEvent: false });
        } else if (horaSeleccionada > this.horaMaxima) {
          this.horarioForm
            .get('hora_inicial')
            ?.setValue(this.horaMaxima, { emitEvent: false });
        } else if (horaSeleccionada < horaFin) {
          this.horarioForm
            .get('hora_final')
            ?.setValue(this.horaFinalMaxima, { emitEvent: false });
        } else if (horaSeleccionada == horaFin) {
          this.horarioForm
            .get('hora_final')
            ?.setValue(this.horaFinalMinima, { emitEvent: false });
          this.horarioForm
            .get('hora_inicial')
            ?.setValue(this.horaMinima, { emitEvent: false });
        }
      });

    this.horarioForm
      .get('hora_final')
      ?.valueChanges.subscribe((horaSeleccionada) => {
        const horaInicio = this.horarioForm.get('hora_inicial')?.value;

        if (horaSeleccionada < this.horaMinima) {
          this.horarioForm
            .get('hora_final')
            ?.setValue(this.horaFinalMinima, { emitEvent: false });
        } else if (horaSeleccionada > this.horaMaxima) {
          console.log(this.horaMaxima);

          this.horarioForm
            .get('hora_final')
            ?.setValue(this.horaFinalMaxima, { emitEvent: false });
        } else if (horaSeleccionada < horaInicio) {
          console.log('hm', horaSeleccionada, 'hi', horaInicio);

          this.horarioForm
            .get('hora_inicial')
            ?.setValue(this.horaMinima, { emitEvent: false });
        } else if (horaSeleccionada == horaInicio) {
          this.horarioForm
            .get('hora_final')
            ?.setValue(this.horaFinalMinima, { emitEvent: false });
          this.horarioForm
            .get('hora_inicial')
            ?.setValue(this.horaMinima, { emitEvent: false });
        }
      });
    //formulario de actualizar
  }

  ngOnInit(): void {
    // let id_user=localStorage.getItem("id_usuario")

    forkJoin([
      this.docenteService.getSalones(),
      this.docenteService.getHorario(),
      this.componentService.getFacultadesUser(),
    ]).subscribe((res: any) => {
      console.log(res);
      this.salones = res[0];
      // this.facultades=res[1].resultado
      this.horario = res[1].resultado;
      this.facultades = res[2].resultado;
    });
  }

  initPasarListaForm(): FormGroup {
    return this.fb.group({
      estudiantes:this.fb.array([])
    });
  }

  
  listado(id_tutoria: string) {
   
    this.docenteService
      .getListado(id_tutoria)
      .pipe(
        tap((res: any) => {
          console.log(res);

          this.estudiantes = res.resultado;
          
          console.log(this.estudiantes);
          this.estudiantes.forEach((estudiante: any) => {
            // this.idUsuarioArray.push(new FormControl(estudiante.id_estudiante));
            // this.asistenciasArray.push(
            //   new FormControl(estudiante.asistencia === 1)
            // );
            // this.idTutoriaArray.push(new FormControl(estudiante.id_tutoria));
            // this.observacionArray.push(new FormControl(estudiante.comentario));

            const estudianteFormGroup = this.fb.group({
              id_usuario: estudiante.id_estudiante,
              asistencia: estudiante.asistencia===1,
              id_tutoria: estudiante.id_tutoria,
              observacion:estudiante.comentario
            });
            (this.pasarListaForm.get('estudiantes') as FormArray).push(estudianteFormGroup);
  
          });
        })
      )
      .subscribe();
  }
  get idUsuarioArray() {
    return this.pasarListaForm.get('id_usuario') as FormArray;
  }

  get asistenciasArray() {
    return this.pasarListaForm.get('asistencia') as FormArray;
  }

  get idTutoriaArray() {
    return this.pasarListaForm.get('id_tutoria') as FormArray;
  }

  get observacionArray() {
    return this.pasarListaForm.get('observacion') as FormArray;
  }
  changeValue(index: number) {
    const currentValue = this.asistenciasArray.at(index).value;
    this.asistenciasArray.at(index).setValue(!currentValue);
  }

  changeInput(index: number, event: any) {
    const observacionFragmento = event.target.value;
    const observacionArray = this.pasarListaForm.get('estudiantes') as FormArray;

    if (observacionArray.at(index)) {
      observacionArray.at(index).patchValue({observacion: observacionFragmento });

    }
  }

  pasarLista() {
    const estudiantes = this.pasarListaForm?.value;
    // console.log(estudiantes);

    // for (let index = 0; index < estudiantes.length; index++) {
    //   console.log(estudiantes[index])
    //   const id_usuario = estudiantes.id_usuario[index];
    //   const asistencia = estudiantes.asistencia[index] === false ? 0 : 1;
    //   const id_tutoria = estudiantes.id_tutoria[index];
    //   const observacion = estudiantes.observacion[index];

    //   const estudiante = {
    //     id_usuario: id_usuario,
    //     asistencia: asistencia,
    //     id_tutoria: id_tutoria,
    //     observacion: observacion,
    //   };
    //   this.asistencias.push(estudiante);
    //   console.log(this.asistencias);
    // }
    // console.log(this.asistencias)
    console.log(estudiantes)
    this.docenteService.pasarLista(estudiantes);
  }
  selectedFaculty(event: any) {
    const facultad = event.target.value;
    console.log(facultad);
    const id_facultad: string = facultad.split(':')[1].trim();

    console.log(id_facultad);
    this.docenteService
      .getProgramsForFaculty(id_facultad)
      .pipe(
        tap((res: any) => {
          console.log(res);

          this.programas = res.resultado;
        })
      )
      .subscribe();
  }

  selectedMateria(event: any) {
    const id_facultad: string = this.horarioForm.value.id_facultad.toString();
    const id_programa = event.target.value;
    console.log(id_facultad, id_programa);

    this.docenteService
      .getMateriasForPrograms(id_facultad, id_programa)
      .pipe(
        tap((res: any) => {
          console.log(res);

          this.materias = res.resultado;
        })
      )
      .subscribe();
  }

  initForm(): FormGroup {
    return this.fb.group({
      id_facultad: [null, Validators.required],
      tema: [null, Validators.required],
      id_capacidad: [null, Validators.required],
      hora_final: [null, Validators.required],
      id_programa: [null, Validators.required],
      id_sede: [null, Validators.required],
      cupos: [null, Validators.required, , this.cuposValidator.bind(this)],
      hora_inicial: [null, Validators.required],
      id_materia: [null, Validators.required],
      id_salon: [null, Validators.required],
      fecha: [null, Validators.required],
    });
  }

  initFormtwo(): FormGroup {
    return this.fb.group({
      id_usuario: [null, Validators.required],
    });
  }
  onSelect(event: any) {
    const salon = event.target.value;
    const id_salon = salon.split(':')[1];
    console.log(id_salon);
    this.docenteService
      .obtenerCapacidadPorSalon(id_salon)
      .pipe(
        tap((res: any) => {
          this.horarioForm.patchValue({
            id_capacidad: res.capacidad,
            id_sede: res.sede,
          });
        })
      )
      .subscribe();
  }

  onSubmit() {
    const horario: Horario = this.horarioForm.value;
    this.docenteService
      .crearHorario(horario)
      .pipe(
        tap((res: any) => {
          console.log(res);
          if (res.error) {
            Swal.fire('Error', res.error, 'warning');
            return;
          } else {
            Swal.fire('Success', res.success, 'success');
          }
          this.docenteService
            .getHorario()
            .pipe(
              tap((res: any) => {
                this.horario = res.resultado;
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  }

  getData(id_tutoria: string) {
    console.log(id_tutoria);
    Swal.fire({
      title: 'Estas seguro que deseas cancelarla',
      text: 'no podra ser revertido',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Cancelada!', 'La tutoria ha sido cancelada.', 'success');
        this.docenteService
          .eliminarTutoria(id_tutoria)
          .pipe(
            tap((res: any) => {
              console.log(res);
              this.docenteService
                .getHorario()
                .pipe(
                  tap((res: any) => {
                    console.log(res);

                    this.horario = res.resultado;
                  })
                )
                .subscribe();
            })
          )
          .subscribe();
      }
    });
  }

  descripcion(id_tutoria: any) {
    this.estudianteService
      .getHorarioForId(id_tutoria)
      .pipe(
        tap((res: any) => {
          this.datosModal = res;
        })
      )
      .subscribe();
  }

  cuposValidator(control: any) {
    const capacidad = this.horarioForm.get('capacidad')?.value;
    const cupos = control.value;
    console.log(capacidad, cupos);

    return cupos <= capacidad ? null : { cuposExcedidos: true };
  }
}
