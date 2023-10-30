import { Component, OnInit } from '@angular/core';
import {DoctorService, ReceptionistService} from "../../../core/services/swagger-gen/profile";
import dateFormat, { masks } from "dateformat";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
public userRole='doctor'
  constructor(public doctorService:DoctorService,
              private toastr: ToastrService,
              private translate:TranslateService) { }

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
    this.toastr.success(this.translate.instant('RESPONSE.PROFILE.SUCCESSFULLY_CREATE'), 'Success!');
  }
  showError(){
  this.toastr.error(this.translate.instant('ERROR.ERROR_MESSAGES'),'Error:(')
  }
}
