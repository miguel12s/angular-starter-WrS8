import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Facultad } from "src/app/shared/interfaces/Facultad.interface";
import { environment } from "src/environment/environment.prod";


@Injectable()
export class ComponentService{

private url=environment.apiUrl
private indice=0

constructor(private httpClient:HttpClient){}
get getPrograms():Observable<Object>{
    return this.httpClient.get(`${this.url}programas`)

}

getFacultades(){
    return this.httpClient.get<Facultad[]>(`${this.url}facultades`)
  }

  getFacultadesUser(){
    const token=localStorage.getItem('token')
    const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Credentials': 'true'
        })
      };

    return this.httpClient.get(`${this.url}facultad-user`,httpOptions)}


get getTipoDocumento():Observable<Object>{
  const requestOptions = {
    withCredentials: true,
  };
    return this.httpClient.get(`${this.url}tipoDocumento`,requestOptions)

}

get getId():number{
    return this.indice
}

setId(indice:number){
    console.log('el indice es',indice);
    
this.indice=indice
}


}