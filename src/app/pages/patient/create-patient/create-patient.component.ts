import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../core/services/swagger-gen/profile";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  displayedColumns: string[] = ['fio','phoneNumber','action'];
  dataSource;
  constructor(private patientService:PatientService,
              private toastr: ToastrService,
              private translate:TranslateService) { }

  ngOnInit(): void {
    this.findUsers();
  }

  private findUsers() {
    this.patientService.findUser()
  }

  getUsers(value: any) {

    this.patientService.findUser(value.firstName,value.lastName,value.middleName).subscribe(x=>this.dataSource=x);
  }


  approveUser(entity: any, $event: MatSlideToggleChange) {
    console.log($event)
    console.log(entity)
    if($event.checked){
      this.patientService.assignPatientRole(`"${entity.accountId}"`).subscribe(x=>{
        if(x.isSuccess){
this.toastr.success(this.translate.instant('RESPONSE.PROFILE.SUCCESSFULLY_APPROVED',{name:entity.firstName}));
        }
      })
    }
  }
}
