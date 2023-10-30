import { Component, OnInit } from '@angular/core';
import {DoctorService, PatientService, UpdateService} from "../../../core/services/swagger-gen/profile";
import {ActivatedRoute} from "@angular/router";
import {DeletePersonService} from "../../../core/services/manage-delete/delete-person.service";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  idFromQuery;
  public userRole='patient'
  public patient;
  constructor(public patientService:PatientService,
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
          this.patientService.getPatientById(this.idFromQuery).subscribe(x=>this.patient=x);
        }
      );
    this.deletePersonService.deletePersonTrigger.subscribe(x=> {
      this.patientService.deletePatientForm(this.patient.accountId).subscribe(s => {
        if(s.isSuccess){
          this.toastr.success(this.translate.instant('RESPONSE.PROFILE.SUCCESSFULLY_DELETE',{name:this.patient.firstName}))
        }
      })
    });
  }

  update($event: any) {
    this.updateService.updateProfile($event).subscribe(x=>{
      if(x.isSuccess){
        this.toastr.success(this.translate.instant('RESPONSE.PROFILE.SUCCESSFULLY_UPDATE_PERSONAL_INFO',{name:this.patient.firstName}))
      }
    })
  }
}

