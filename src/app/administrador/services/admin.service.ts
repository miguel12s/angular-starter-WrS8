import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http'
import { tap } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  url=environment.apiUrl


  getFacultadUser(){
    return this.http.get(`${this.url}facultad-users`)
  }
  eliminarTutoria(id_tutoria:number,id_usuario:number){
    return this.http.delete(`${this.url}horario/eliminar-tutoria/${id_tutoria}/${id_usuario}`,)

  }

  getFacultades(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get(`${this.url}facultades`,httpOptions)
  }
  actualizarFacultad(facultad:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.put(`${this.url}facultad/${facultad.id_facultad}`,facultad,httpOptions)
  }

  actualizarSedes(sedes:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.put(`${this.url}sede/${sedes.id_sede}`,sedes,httpOptions)
  }


actualizarSalon(salon:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.put(`${this.url}salones/${salon.id_salon}`,salon,httpOptions)
}

  getDataForIdFacultad(id_facultad:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get(`${this.url}facultad/${id_facultad}`,httpOptions)
  }

  
  setFacultad(facultad:any){
    const facultade={
      "facultad":facultad.facultad
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.post(`${this.url}facultad`,facultade,httpOptions)
  }




  getProgramas(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get(`${this.url}programa`,httpOptions)
  }

  getSedes(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get(`${this.url}sede`,httpOptions)
  }

  getDataForIdSede(id_sede:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get(`${this.url}sede/${id_sede}`,httpOptions)

  }








  actualizarPrograma(programa:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.put(`${this.url}programa/${programa.id_programa}`,programa,httpOptions)
  }


  getDataForIdPrograma(id_programa:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get(`${this.url}programa/${id_programa}`,httpOptions)
  }

  
  setPrograma(programa:any){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.post(`${this.url}programa`,programa,httpOptions)
  }





  getMaterias(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get(`${this.url}materia`,httpOptions)
  }
  actualizarMateria(materia:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.put(`${this.url}materia/${materia.id_materia}`,materia,httpOptions)
  }


  getDataForIdMateria(id_materia:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.get(`${this.url}materia/${id_materia}`,httpOptions)
  }

  
  setMateria(materias:any){
    const materia={
      "materia":materias.materia
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.post(`${this.url}materia`,materia,httpOptions)
  }

setSede(sede:any){
  
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}sede`,sede,httpOptions)
}

setSalon(salon:any){


  
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}salones`,salon,httpOptions)
}


getSalones(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}salones`,httpOptions)
}


getDataForIdSalon(id_salon:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}salones/${id_salon}`,httpOptions)
}
getRoles(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}roles`,httpOptions)
}

getDataForIdRol(id_rol:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}roles/${id_rol}`,httpOptions)
}

setRol(rol:any){
  
  
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}roles`,rol,httpOptions)
}


actualizarRol(roles:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.put(`${this.url}roles/${roles.id_rol}`,roles,httpOptions)


}

getTipo(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}tipoDocumento
  `,httpOptions)
}


actualizarTipo(tipo:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.put(`${this.url}tipoDocumento/${tipo.id_tipo_documento}`,tipo,httpOptions)


}


setTipo(tipo:any){
  
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}tipoDocumento`,tipo,httpOptions)
}

getDataForIdTipo(id_tipo:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}tipoDocumento/${id_tipo}`,httpOptions)
}



getEstado(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}getEstado`,httpOptions)
}


actualizarEstado(estado:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}actualizarEstado`,estado,httpOptions)


}


setEstado(estado:any){
  const estados={
    "estado":estado.estado
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}setEstado`,estados,httpOptions)
}

getDataForIdEstado(id_estado:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}getEstadoForId/${id_estado}`,httpOptions)
}






getEstadoTutoria(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}getEstadoTutoria`,httpOptions)
}


actualizarEstadoTutoria(estado:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}actualizarEstadoTutoria`,estado,httpOptions)


}


setEstadoTutoria(estado:any){
  const estados={
    "estado_tutoria":estado.estado_tutoria
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}setEstadoTutoria`,estados,httpOptions)
}

getDataForIdEstadoTutoria(id_estado_tutoria:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}getEstadoTutoriaForId/${id_estado_tutoria}`,httpOptions)
}


getCapacidad(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}capacidad`,httpOptions)
}


actualizarCapacidad(capacidad:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.put(`${this.url}capacidad/${capacidad.id_capacidad}`,capacidad,httpOptions)


}


setCapacidad(capacidad:any){
  const capacidades={
    "capacidad":capacidad.capacidad
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}capacidad`,capacidades,httpOptions)
}

getDataForIdCapacidad(id_capacidad:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}capacidad/${id_capacidad}`,httpOptions)
}




getHorario(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}obtenerHorarioDocente`,httpOptions)
}

actualizarHorarioAdmin(horario:any,id_tutoria:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  this.http.post(`${this.url}actualizarHorarioAdmin/${id_tutoria}`,horario,httpOptions).pipe(
    tap((res:any)=>{
      console.log(res);
      
    })
  ).subscribe()
}

getDocente(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}getDocentes`,httpOptions)
}

crearHorario(horario:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}horario`,horario,httpOptions)
}


crearHorarioAdmin(horario:any,id_user:number){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.post(`${this.url}horario-admin/${id_user}`,horario,httpOptions)
}
getHorarioFinished(){
;  
  return this.http.get(`${this.url}horario-terminado`)
}
getEstudiantes(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}user/get_users`,httpOptions)
}
deshabilitar(id_estudiante:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
 this.http.post(`${this.url}modificarEstadoUsuario`,id_estudiante,httpOptions).pipe(
  tap((res:any)=>{
console.log(res);

  })
 ).subscribe()
}
getEstudiante(id_usuario:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}user/get_user/${id_usuario}`,httpOptions)
}

getUser(id_usuario:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}user/${id_usuario}`,httpOptions)
}


actualizarEstudiante(id_usuario:string,estudiante:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
   return this.http.put(`${this.url}user/${id_usuario}`,estudiante,httpOptions)
}

getDocentes(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}user/get_docentes`,httpOptions)
}

getDocenteForId(id_usuario:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}getDocente/${id_usuario}`,httpOptions)


}

actualizarDocente(id_usuario:string,docente:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
   this.http.post(`${this.url}actualizarDocente/${id_usuario}`,docente,httpOptions,).pipe(
    tap((res:any)=>{
  console.log(res);
  
    })
   ).subscribe()
}

getEstadisticas(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}stadistics/contar-usuarios`,httpOptions)

}

getTutorias(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return this.http.get(`${this.url}stadistics/contar-tutorias`,httpOptions)

}

uploadFile(file:File){
  const formData = new FormData();
  formData.append('formdata', file);
  
console.log(formData)
  return this.http.post(`${this.url}user/multiple-users`,formData)

}

getFacultadxprograma(){
  return this.http.get(`${this.url}facultadxprograma`)
}

getForIdFacultadxPrograma(id_fxp:number){
  return this.http.get(`${this.url}facxpro/${id_fxp}`)

}

agregarFacultadxPrograma(data:any){
  return this.http.post(`${this.url}facultadxprograma`,data)

}
updateFacultadxPrograma(data:any){
  return this.http.put(`${this.url}facultadxprograma/${data.id}`,data)

}

getNotifications(){
  return this.http.get(`${this.url}admin/get-notifications`)

}
getNotificationFinished(id:number){
  return this.http.get(`${this.url}admin/get-notifications-finish/${id}`)

}

getNotificationsFinished(){
  return this.http.get(`${this.url}admin/get-notifications-finish`)

}
getNotification(id:number){
  return this.http.get(`${this.url}admin/get-notifications/${id}`)

}


updateNotification(data:any){
  return this.http.post(`${this.url}admin/send-response/${data.id}`,data)

}

getReportForDownload(data:any){
  const headers = new HttpHeaders()
  .set('Accept', 'application/octet-stream'); // Indica que esperamos una respuesta binaria

return this.http.post(`${this.url}reporte/usuarios`,data, {
  headers,
  responseType: 'blob' as 'json' // Indica que la respuesta es un blob (archivo binario)
});
}

getFacultadxProgramaxMateria(){
  return this.http.get(`${this.url}materia-pro-fac`)

}

getFacultadxProgramaxMateriaForId(id:number){
  return this.http.get(`${this.url}materia-pro-fac/${id}`)

}
createFacultadxProgramaxMateria(data:any){
  return this.http.post(`${this.url}materia-pro-fac`,data)

}

actualizarMateriaxPrograma(data:any){

  return this.http.put(`${this.url}materia-pro-fac/${data.id_fpxm}`,data)

}

getRegistroActividad(){
  return this.http.get(`${this.url}registro_actividad`)

}

getTipoRegistroActividad(){
  return this.http.get(`${this.url}tipo_registro`)

}

setTipoRegistroActividad(data:any){
  return this.http.post(`${this.url}tipo_registro`,data)

}
updateTipoRegistroActividadForId(data:any){
  return this.http.put(`${this.url}tipo_registro/${data.id}`,data)

}
getTipoRegistroActividadForId(id:number){
  return this.http.get(`${this.url}tipo_registro/${id}`)

}

getTipoEstado(){
  return this.http.get(`${this.url}tipo_estado`)

}

setTipoEstado(data:any){
  return this.http.post(`${this.url}tipo_estado`,data)

}
updateTipoEstadoForId(data:any){
  return this.http.put(`${this.url}tipo_estado/${data.id}`,data)

}
getTipoEstadoForId(id:number){
  return this.http.get(`${this.url}tipo_estado/${id}`)

}

getTipoxEstado(){
  return this.http.get(`${this.url}tipoxestado`)

}
getTipoxEstadoForUser(){
  return this.http.get(`${this.url}tipoxestado-user`)

}

setTipoxEstado(data:any){
  return this.http.post(`${this.url}tipoxestado`,data)

}
updateTipoxEstadoForId(data:any){
  return this.http.put(`${this.url}tipoxestado/${data.id}`,data)

}
getTipoxEstadoForId(id:number){
  return this.http.get(`${this.url}tipoxestado/${id}`)

}

getProgramasForFaculty(facultad:string){
  return this.http.get(`${this.url}facultad-programa/${facultad}`)

}

createFacultadUsuario(facultad:any){
  return this.http.post(`${this.url}facultad-usuario`,facultad)

}


getTutoriasPendientes(){
  return this.http.get(`${this.url}horario`)

}

getFacultadesForUser(id_user:number){
  return this.http.get(`${this.url}facultad-user-docente/${id_user}`)


}

obtenerFacultadxPrograma(id_fxp:number){
  return this.http.get(`${this.url}facultadxusuario/${id_fxp}`)
}


getFacultadxUsuarioForId(id_fxp:number){
  return this.http.get(`${this.url}facultadxusuarios/${id_fxp}`)
}
updateFacultadProgramaxUsuario(data:any){
  return this.http.put(`${this.url}facultadxusuarios/${data.id_fpxusuario}`,data)

}

}









