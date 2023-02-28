import { Component, OnInit } from '@angular/core';
import {DoctorService, PatientService, UpdateService} from "../../../core/services/swagger-gen/profile";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  idFromQuery;
  public userRole='patient'
  public patient;
  constructor(public patientService:PatientService,public updateService:UpdateService,private route: ActivatedRoute) {
    this.patientService.getPatientById(7).subscribe(x=>this.patient=x);

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.idFromQuery=params.id
        }
      );
  }

  update($event: any) {
    this.updateService.updateProfile($event).subscribe(x=>console.log(x))
  }
}

