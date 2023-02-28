import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../../core/services/swagger-gen/profile";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-doctor-page',
  templateUrl: './home-doctor-page.component.html',
  styleUrls: ['./home-doctor-page.component.css']
})
export class HomeDoctorPageComponent implements OnInit {
  displayedColumns: string[] = ['fio','specialization', 'status','birthday', 'officeAddress'];
  dataSource;
  constructor(public doctorService:DoctorService,private router: Router) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  private getAllDoctors() {
    this.doctorService.getAllDoctors().subscribe(x=>this.dataSource=x)
  }

  linkTo(row) {

    this.router.navigate(['doctor/profile'], { queryParams: { id: row.id } });

    console.log(row)
    console.log(row.id)
  }
}
