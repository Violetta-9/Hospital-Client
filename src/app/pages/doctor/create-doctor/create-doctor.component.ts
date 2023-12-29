import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../../core/services/swagger-gen/profile";
import dateFormat from "dateformat";

import { AlertService } from '../../../services/alert-service.service';
@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
public userRole='doctor'
  constructor(public doctorService:DoctorService,
              private alertService:AlertService) { }

  ngOnInit(): void {
  }

  createDoctor(doctor: any) {

    this.doctorService.assignRoleToDoctorForm(doctor.firstName,doctor.lastName,doctor.middleName,doctor.email,
      doctor.phoneNumber,dateFormat(doctor.birthDate, "isoDateTime"),doctor.specialization,doctor.office,doctor.status,
      doctor.file).subscribe(x=>{
      if(x.isSuccess){
        this.showSuccess();
      }else{
        this.showError();
      }
    })
  }
  showSuccess() {
     this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESSFULLY_CREATE')
  }
  showError(){
      this.alertService.showError('ERROR.ERROR_MESSAGES')
  }
}
