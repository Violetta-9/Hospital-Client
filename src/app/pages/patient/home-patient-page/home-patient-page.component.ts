import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PatientService} from "../../../core/services/swagger-gen/profile";

@Component({
  selector: 'app-home-patient-page',
  templateUrl: './home-patient-page.component.html',
  styleUrls: ['./home-patient-page.component.css']
})
export class HomePatientPageComponent implements OnInit {
  displayedColumns: string[] = ['fio','phoneNumber'];
  dataSource;
  constructor(private router: Router,public patientService:PatientService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  linkTo(row) {
    this.router.navigate(['patient/profile'], { queryParams: { id: row.id } });

    console.log(row)
    console.log(row.id)
  }

  private getAllPatients() {
this.patientService.getAllPatients().subscribe(x=>this.dataSource=x);
  }
}
