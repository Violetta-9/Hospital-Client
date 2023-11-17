import { Component, OnInit } from '@angular/core';
import {ReceptionistService, UpdateService} from "../../../core/services/swagger-gen/profile";
import {ActivatedRoute} from "@angular/router";
import {DeletePersonService} from "../../../core/services/manage-delete/delete-person.service";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-receptionist-profile',
  templateUrl: './receptionist-profile.component.html',
  styleUrls: ['./receptionist-profile.component.css']
})
export class ReceptionistProfileComponent implements OnInit {
public receptionist;
public idFromQuery;
public userRole='receptionist'
  constructor(public receptionistServer:ReceptionistService,
              public updateService:UpdateService,
              private route: ActivatedRoute,
              public deletePersonService:DeletePersonService,
              private toastr: ToastrService,
              private translate:TranslateService) {

  }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
          this.idFromQuery=params.id
        }
      );
    this.receptionistServer.getReceptionistById(this.idFromQuery).subscribe(x=>this.receptionist=x)
    this.deletePersonService.deletePersonTrigger.subscribe(x=> {
      this.receptionistServer.deleteReceptionistForm(this.receptionist.accountId).subscribe(s =>{
        if(s.isSuccess){
          this.toastr.success(this.translate.instant('RESPONSE.PROFILE.SUCCESSFULLY_DELETE',{name:this.receptionist.firstName}))
        }
      })
    });
  }

  update($event: any) {
    this.updateService.updateProfile($event).subscribe(x=>{
      if(x.isSuccess){
        this.toastr.success(this.translate.instant('RESPONSE.PROFILE.SUCCESSFULLY_UPDATE_PERSONAL_INFO',{name:this.receptionist.firstName}))
      }
    })
  }

  updateWorkInfo($event: any) {
    this.receptionistServer.updateOfficeForm($event.accountId,$event.officeId).subscribe(x=>{
      if(x.isSuccess){
        this.toastr.success(this.translate.instant('RESPONSE.PROFILE.SUCCESSFULLY_UPDATE_WORK_INFO',{name:this.receptionist.firstName}))
      }
    })
  }
}
