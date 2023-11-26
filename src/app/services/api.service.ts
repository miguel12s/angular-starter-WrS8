import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { Injectable } from "@angular/core"
import { Estudiante } from "../shared/interfaces/Estudiante.interface";
import { Router } from "@angular/router";
import { ComponentService } from "../components/services/components.service";
import { Docente } from "../shared/interfaces/docente.interface";
import { environment } from "src/environment/environment";
import { Contact } from "../shared/interfaces/contact.interface";
@Injectable()
export class ApiService {
  private url =environment.apiUrl
   token=""
  constructor(private readonly httpClient: HttpClient, private componentService: ComponentService, private router: Router) {

  }
  insertData(estudiante: Estudiante) {
    
    return this.httpClient.post(`${this.url}user/create_user`, estudiante)
  }

  getMessage(message:any){
    return this.httpClient.post(`${this.url}user/send-response-chat`, message)


  }

  loginService(correo: string, contraseña: string):Observable<any> {
    let login: Object = {
      email: correo,
      password: contraseña
    }

    return this.httpClient.post(` ${this.url}auth/login`, login)
  }


  insertDocente(docente:Docente){
    return this.httpClient.post(`${this.url}/admin/agregar-docente`, docente)
    
  }

  getToken() {
  
    return sessionStorage.getItem('token')
  }
  renewToken(currentToken: string): Observable<any> {
    const body = { token: currentToken };

    return this.httpClient.post(`${this.url}/renew-token`, body);
  }

  isLogged():boolean{
      const authToken = this.getToken();
      return authToken !== ""; // Si hay un token, el usuario está autenticado
    }
  

  forgot(email:any){
    console.log(email)
return this.httpClient.post(`${this.url}auth/send-email`,email)
  }


  getProgramas(id_facultad:any){
    console.log(id_facultad);
    
    return this.httpClient.get(`${this.url}facultadxprograma/${id_facultad}`)
  }

  createNotification(contactForm:Contact){
        return this.httpClient.post(`${this.url}admin/create-notification`,contactForm)
    }
  }





