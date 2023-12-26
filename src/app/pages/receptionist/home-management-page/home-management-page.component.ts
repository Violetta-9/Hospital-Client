import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {RouterOutlet} from "@angular/router";
import {ReceptionistService} from "../../../core/services/swagger-gen/profile";

@Component({
  selector: 'app-home-management-page',
  templateUrl: './home-management-page.component.html',
  styleUrls: ['./home-management-page.component.css']
})
export class HomeManagementPageComponent implements OnInit {
  public profilePath=""
  public menuPath="/management"
  public info=[
    {id:0,title:"Offices",link:"page/office",permission: ["Receptionist"]},
    {id:1,title:"Services",link:"page/service", permission: ["Receptionist"]},
    {id:2,title:"Doctors",link:"page/doctor", permission: ["Receptionist"]},
    {id:3,title:"Receptionists",link:"page/receptionist", permission: ["Receptionist"]},
    {id:4,title:"Patients",link:"page/patient",permission: ["Receptionist"]},
    {id:5,title:"Specializations",link:"page/specialization",permission: ["Receptionist"]},
    {id:6,title:"Appointments",link:"page/appointments",permission: ["Receptionist", "Doctor"]},
    {id:7,title:"Appointments",link:"appointment",permission: ["Patient"]}
  ]
public mainRole;
  activeLink = 'menu';


  changeTab(tabIndex: number) {
    this.activeLink = this.info[tabIndex].title;
  }


  constructor() {
  }

  ngOnInit(): void {
    let roles = localStorage.getItem('role');
      const rolesArray = roles.split(',');
      rolesArray.splice(rolesArray.indexOf('User'), 1)
    this.mainRole = rolesArray[0];
    switch(rolesArray[0]){
      case "Receptionist":
        this.profilePath = "receptionist/profile"
        break;
      case "Doctor":
        this.profilePath = "doctor/profile"
        break;
      case "Patient":
        this.profilePath = "patient/profile"
        break;
    }
  }


  getProfileId() {
    return localStorage.getItem('id')
  }

   get getInfo() {
    return this.info.filter(x=>x.permission.includes(this.mainRole))
  }
}

