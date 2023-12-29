import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../../core/services/swagger-gen/profile";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home-patient-page',
  templateUrl: './home-patient-page.component.html',
  styleUrls: ['./home-patient-page.component.css']
})
export class HomePatientPageComponent implements OnInit {
  displayedColumns: string[] = ['fio','phoneNumber'];
  dataSource;
  constructor(private router: Router,
              public patientService:PatientService,
              public dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  linkTo(row) {
    this.router.navigate(['../../patient/profile'], {relativeTo:this.route, queryParams: { id: row.id } });
  }

  private getAllPatients() {
this.patientService.getAllPatients().subscribe(x=>this.dataSource=x);
  }

  createPatient() {
    this.router.navigate(['../../patient/create'], {relativeTo:this.route });
  }
}
