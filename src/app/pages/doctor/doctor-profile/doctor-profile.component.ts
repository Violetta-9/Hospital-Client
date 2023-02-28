import { Component, OnInit } from '@angular/core';
import {DoctorService, UpdateAccountInfoDTO, UpdateService} from "../../../core/services/swagger-gen/profile";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  public userRole='doctor'
public doctor;
  idFromQuery;
  constructor(public doctorService:DoctorService,public updateService:UpdateService,private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {

          this.idFromQuery=params.id
        }
      );
    this.doctorService.getDoctorById(this.idFromQuery).subscribe(x=>this.doctor=x);
  }

  update($event: any) {
     this.updateService.updateProfile($event).subscribe(x=>console.log(x))
  }

  updateWorkInfo($event: any) {
    this.doctorService.updateDoctorProfile($event).subscribe(x=>console.log(x));
  }
}
