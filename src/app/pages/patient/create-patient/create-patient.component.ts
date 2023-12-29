import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../core/services/swagger-gen/profile";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import { AlertService } from '../../../services/alert-service.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  displayedColumns: string[] = ['fio','phoneNumber','action'];
  dataSource;
  constructor(private patientService:PatientService,
              private alertService: AlertService) { }

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

    if($event.checked){
      this.patientService.assignPatientRole(`"${entity.accountId}"`).subscribe(x=>{
        if(x.isSuccess){
            this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESSFULLY_APPROVED',{name:entity.firstName})
        }else{
            this.alertService.showError('ERROR.ERROR_MESSAGES')
        }
      })
    }
  }
}
