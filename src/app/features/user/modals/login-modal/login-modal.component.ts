import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../../core/services/swagger-gen/authorization";
import jwt_decode from "jwt-decode";
import {DoctorService, PatientService, ReceptionistService} from "../../../../core/services/swagger-gen/profile";
import {
  SearchConditionBase,
  SearchConditionCacheService
} from "../../../../core/services/search-condition-cache-service";
import { Router } from '@angular/router';
import { AlertService } from '../../../../services/alert-service.service';

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
              private alertService: AlertService,
              private doctorService:DoctorService,
              private receptionistService:ReceptionistService,
              private patientService:PatientService,
             private searchConditionCacheService: SearchConditionCacheService<SearchConditionBase>,private router: Router

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
    ).subscribe( async x=>{

      if(x){
        const f=jwt_decode(x)
        // @ts-ignore
        if(f.role.includes("Receptionist")) {
          this.dialogRef.close();
          localStorage.setItem('token', x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESS_LOGIN', {role:'Receptionist'})
          // @ts-ignore
          this.receptionistService.getReceptionistIdByAccountId(f.nameid).subscribe(s=> localStorage.setItem('id', s));
          this.searchConditionCacheService.remove(this.key);
         await this.router.navigate(['/management/receptionist']);
        }
        // @ts-ignore
        else if(f.role.includes("Doctor")) {
          this.dialogRef.close();
          localStorage.setItem('token', x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESS_LOGIN', {role:'Doctor'})
          // @ts-ignore
          this.doctorService.getDoctorIdByAccountId(f.nameid).subscribe(s=> localStorage.setItem('id', s));
          this.searchConditionCacheService.remove(this.key);
         await this.router.navigate(['/management/doctor']);
        }
        // @ts-ignore
       else if(f.role.includes("Patient")) {
          this.dialogRef.close();
          localStorage.setItem('token', x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESS_LOGIN', {role:'Patient'})
          // @ts-ignore
          this.patientService.getPatientIdByAccountId(f.nameid).subscribe(s=> localStorage.setItem('id', s));
          this.searchConditionCacheService.remove(this.key);
          await this.router.navigate(['/management/patient']);
        }
      else {
          this.dialogRef.close();
          localStorage.setItem('token', x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESS_LOGIN', {role:'User'})

        }

        }
    });
  }

}

