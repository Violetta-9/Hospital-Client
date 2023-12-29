import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService{

  constructor(private readonly toastr: ToastrService,private translat: TranslateService) { }
  showSuccess(key: string ,param:any=null, header:string = 'Success' ) {
    this.translat.get(key,param).subscribe(x=>{
      this.toastr.success(x, header);
    })
  }
 showError(key: string ,param:any=null, header:string = 'Error'){
     this.translat.get(key,param).subscribe(x=>{
       this.toastr.error(x, header);
     })
 }
  showGlobalError(message: string , header:string = 'Error'){
      this.toastr.error(message, header);
  }
}
