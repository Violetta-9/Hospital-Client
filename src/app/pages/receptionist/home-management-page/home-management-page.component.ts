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
  public profilePath="receptionist/profile"
  public menuPath="/management"
  public info=[
    {id:0,title:"Offices",link:"page/office"},
    {id:1,title:"Services",link:"page/service"},
    {id:2,title:"Doctors",link:"page/doctor"},
    {id:3,title:"Receptionists",link:"page/receptionist"},
    {id:4,title:"Patients",link:"page/patient"},
    {id:5,title:"Specializations",link:"page/specialization"},
    {id:5,title:"Appointments",link:"page/appointments"}
  ]

  activeLink = 'menu';


  changeTab(tabIndex: number) {
    this.activeLink = this.info[tabIndex].title;
  }


  constructor() {
  }

  ngOnInit(): void {
  }


  getProfileId() {

    return localStorage.getItem('id')
  }
}

