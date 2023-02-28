import { Component, OnInit } from '@angular/core';
import {DoctorService, ReceptionistService} from "../../../core/services/swagger-gen/profile";
import dateFormat, { masks } from "dateformat";
@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
public userRole='doctor'
  constructor(public doctorService:DoctorService) { }

  ngOnInit(): void {
  }

  createDoctor(doctor: any) {

    this.doctorService.assignRoleToDoctorForm(doctor.firstName,doctor.lastName,doctor.middleName,doctor.email,
      doctor.phoneNumber,dateFormat(doctor.birthDate, "isoDateTime"),doctor.specialization,doctor.office,doctor.status,
      doctor.file).subscribe(x=>console.log(x))
  }
}
