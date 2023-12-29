import { Component, OnInit } from '@angular/core';
import {DoctorService, UpdateService} from "../../../core/services/swagger-gen/profile";
import {ActivatedRoute} from "@angular/router";
import {DeletePersonService} from "../../../core/services/manage-delete/delete-person.service";
import { AlertService } from '../../../services/alert-service.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  public userRole='doctor'
public doctor;
  idFromQuery;
  constructor(public doctorService:DoctorService,
              public updateService:UpdateService,
              private route: ActivatedRoute,
              public deletePersonService:DeletePersonService,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {

          this.idFromQuery=params.id
        }
      );
    this.doctorService.getDoctorById(this.idFromQuery).subscribe(x=>this.doctor=x);
    this.deletePersonService.deletePersonTrigger.subscribe(_=> {
      this.doctorService.deleteDoctor(`"${this.doctor.accountId}"`).subscribe(s => {
        if(s.isSuccess){
          this.alertService.showSuccess('RESPONSE.PROFILE.SUCCSSFULLY_DELETE',{name:this.doctor.firstName})
        }
      })
    });

    }

  update($event: any) {
     this.updateService.updateProfile($event).subscribe(x=>{
       if(x.isSuccess){
         this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESSFULLY_UPDATE_PERSONAL_INFO',{name:this.doctor.firstName})
       }
     })
  }

  updateWorkInfo($event: any) {
    this.doctorService.updateDoctorProfile($event).subscribe(x=>{
      if(x.isSuccess){
        this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESSFULLY_UPDATE_WORK_INFO',{name:this.doctor.firstName})
      }
    });
  }


  changeStatus($event: any) {
    this.doctorService.updateStatusForm($event.value,this.doctor.accountId).subscribe(x=>{
      if(x.isSuccess){
        this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESSFULLY_UPDATE_STATUS',{name:this.doctor.firstName})
      }
    })
  }

}
