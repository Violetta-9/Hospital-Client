import { Component, OnInit } from '@angular/core';
import {ReceptionistService, UpdateService} from "../../../core/services/swagger-gen/profile";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-receptionist-profile',
  templateUrl: './receptionist-profile.component.html',
  styleUrls: ['./receptionist-profile.component.css']
})
export class ReceptionistProfileComponent implements OnInit {
public receptionist;
public idFromQuery;
public userRole='receptionist'
  constructor(public receptionistServer:ReceptionistService,public updateService:UpdateService,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {

          this.idFromQuery=params.id
        }
      );
    this.receptionistServer.getReceptionistById(this.idFromQuery).subscribe(x=>this.receptionist=x)
  }

  update($event: any) {
    this.updateService.updateProfile($event).subscribe(x=>console.log(x))
  }

  updateWorkInfo($event: any) {
    this.receptionistServer.updateOfficeForm($event.accountId,$event.officeId).subscribe(x=>console.log(x))
  }
}
