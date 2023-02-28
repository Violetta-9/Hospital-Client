import { Component, OnInit } from '@angular/core';
import {ReceptionistService} from "../../../core/services/swagger-gen/profile";
import dateFormat, { masks } from "dateformat";
@Component({
  selector: 'app-create-receptionist',
  templateUrl: './create-receptionist.component.html',
  styleUrls: ['./create-receptionist.component.css']
})
export class CreateReceptionistComponent implements OnInit {
public userRole='receptionist'
  public s=0;
  constructor(public receptionist:ReceptionistService) { }

  ngOnInit(): void {
  }

  createReceptionist(repo: any) {
  console.log("i am here recep")
    this.s=2;
    this.receptionist.assignReceptionistRoleForm(repo.firstName,repo.lastName,repo.middleName,
      repo.email,repo.phoneNumber,dateFormat(repo.birthDate, "isoDateTime"),
     repo.office,repo.file).subscribe(x=>console.log(x))
  }
}
