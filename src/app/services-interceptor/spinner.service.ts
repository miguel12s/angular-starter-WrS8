import { Injectable } from '@angular/core'
import {NgxSpinnerService} from 'ngx-spinner'

@Injectable()
export class spinnerService{


constructor(private spinnerService:NgxSpinnerService){

}
    callSpinner(){
        this.spinnerService.show()
          }
          stopSpinner(){
        this.spinnerService.hide()
          }
        }