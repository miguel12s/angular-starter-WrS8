import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Docente } from "src/app/shared/interfaces/docente.interface";
import { Horario } from "src/app/shared/interfaces/horario.interface";
import { Salon } from "src/app/shared/interfaces/salones.interface";
import { environment } from "src/environment/environment.prod";

@Injectable()
export class DocenteService{

    constructor(private readonly http:HttpClient){}

    public readonly url=environment.apiUrl


    getlistadoForDownload(id:number){
      const headers = new HttpHeaders()
      .set('Accept', 'application/octet-stream'); // Indica que esperamos una respuesta binaria

    return this.http.get(`${this.url}reporte/horario/${id}`, {
      headers,
      responseType: 'blob' as 'json' // Indica que la respuesta es un blob (archivo binario)
    });
    
    }

    getDataDocente():Observable<Docente>{
        const token=localStorage.getItem('token')
        const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true'
          })
        };
       return  this.http.get<Docente>(`${this.url}user/get_user`,httpOptions)
    }

    getSalones(){
      const token=localStorage.getItem('token')
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Credentials': 'true'
        })
      };
     return  this.http.get<Salon[]>(`${this.url}salones`,httpOptions)
  }

  getMaterias(){
    const token=localStorage.getItem('token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
   return  this.http.get(`${this.url}/materias`,httpOptions)
}

getSedes(){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
 return  this.http.get(`${this.url}/sedes`,httpOptions)
}


getDataForId(){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
 return  this.http.get(`${this.url}/docente/horario`,httpOptions)
}

getHorarioForId(id_tutoria:string){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return  this.http.get(`${this.url}horario/${id_tutoria}`,httpOptions)
}


crearHorario(horario:Horario){
  console.log(horario)
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  
  return  this.http.post(`${this.url}horario`,horario,httpOptions)

}

obtenerCapacidadPorSalon(id_salon:number){
  
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return  this.http.get(`${this.url}salones/${id_salon}`,httpOptions)
}
getHorario(){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return  this.http.get(`${this.url}horario-usuario`,httpOptions)
}

getHorarioForEstado(){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return  this.http.get(`${this.url}/docente/mostrarHorarioEstado`,httpOptions)
}

getDataForUpdate(id_tutoria:string){

  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return  this.http.get(`${this.url}/docente/obtenerTutoria/${id_tutoria}`,httpOptions)
}

getEstadosTutoria(){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  return  this.http.get(`${this.url}/docente/estadoTutoria`,httpOptions)
}


getListado(id_tutoria:string){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
 return this.http.get(`${this.url}listado/${id_tutoria}`,httpOptions)
}

eliminarTutoria(id_tutoria:string){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
 return this.http.delete(`${this.url}horario/${id_tutoria}`,httpOptions)
}

pasarLista(data:any){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  this.http.put(`${this.url}pasar-lista`,data,httpOptions).pipe(
  tap((res:any)=>{
    console.log(res);
    
  })
 ).subscribe()
}

uploadFile(formdata:FormData,id_usuario:number){
  console.log(formdata)
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      

      'Authorization': 'Bearer ' + token,

    })
  };
  return this.http.post(`${this.url}observacion/${id_usuario}`,formdata,httpOptions)
}

// getProgramsForFaculty(id_facultad:string){

//   return this.http.get(`${this.url}facxpro/${id_facultad}`)

// }

 getProgramsForFaculty(id_facultad:string){

   return this.http.get(`${this.url}facultadxprograma/${id_facultad}`)

 }
getMateriasForPrograms(id_facultad:string,id_programa:number){


  return this.http.get(`${this.url}matxpro/${id_facultad}/${id_programa}`)

}



}

