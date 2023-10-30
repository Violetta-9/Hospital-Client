import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../../core/services/swagger-gen/authorization";
import jwt_decode from "jwt-decode";
import {ToastrService} from "ngx-toastr";
import {DoctorService, PatientService, ReceptionistService} from "../../../../core/services/swagger-gen/profile";
import {
  SearchConditionBase,
  SearchConditionCacheService
} from "../../../../core/services/search-condition-cache-service";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent extends EntityDetailsBaseComponent implements OnInit {
  hide = true
  key="DOCTOR_FILTER"
  constructor(public dialogRef: MatDialogRef<LoginModalComponent>,
              public dialog: MatDialog,
              public authorizationApi: UserService,
              private toastr: ToastrService,
              private doctorService:DoctorService,
              private receptionistService:ReceptionistService,
              private patientService:PatientService,
             private searchConditionCacheService: SearchConditionCacheService<SearchConditionBase>

  ) {
    super();
    this.createForm();
  }

  ngOnInit(): void {

  }

  private createForm() {
    this.detailsForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  saveInternal() {
    this.authorizationApi.loginForm(
      this.detailsForm.get('email').value,
       this.detailsForm.get('password').value
    ).subscribe(x=>{
      console.log(x);
      if(x){
        console.log("mau");
        const f=jwt_decode(x)
        console.log(f)
        // @ts-ignore
        if(f.role.includes("Receptionist")) {

          this.dialogRef.close();
          localStorage.setItem('token', x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.showSuccessForReceptionist()
          // @ts-ignore
          this.receptionistService.getReceptionistIdByAccountId(f.nameid).subscribe(s=> localStorage.setItem('id', s));
          this.searchConditionCacheService.remove(this.key);
        }
        // @ts-ignore
        else if(f.role.includes("Doctor")) {
          this.dialogRef.close();
          localStorage.setItem('token', x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.showSuccessForDoctor();
          // @ts-ignore
          this.doctorService.getDoctorIdByAccountId(f.nameid).subscribe(s=> localStorage.setItem('id', s));
          this.searchConditionCacheService.remove(this.key);
        }
        // @ts-ignore
       else if(f.role.includes("Patient")) {
          this.dialogRef.close();
          localStorage.setItem('token', x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.showSuccessForPatient();
          // @ts-ignore
          this.patientService.getPatientIdByAccountId(f.nameid).subscribe(s=> localStorage.setItem('id', s));
          this.searchConditionCacheService.remove(this.key);
        }

      else {
          this.dialogRef.close();
          localStorage.setItem('token', x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.showSuccessForUser();
        }
        }
    })
  }
  showSuccessForDoctor() {
    this.toastr.success('You have successfully logged in to your account as Doctor', 'Success!');
  }
  showSuccessForReceptionist() {
    this.toastr.success('You have successfully logged in to your account as Receptionist', 'Success!');
  }
  showSuccessForPatient() {
    this.toastr.success('You have successfully logged in to your account as Patient', 'Success!');
  }
  showSuccessForUser() {
    this.toastr.success('You have successfully logged in to your account as User', 'Success!');
  }
}

