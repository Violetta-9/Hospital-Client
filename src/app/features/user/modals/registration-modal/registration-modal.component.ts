import {Component, OnInit} from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../../core/components/abstraction/entity-detail-base.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/services/swagger-gen/authorization";
import {passwordValidator} from "../../../../shared/validators/passwordValidator";
import {emailValidators} from "../../../../shared/validators/emailValidator";
import { AlertService } from '../../../../services/alert-service.service';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css'],
  providers: [AlertService]
})
export class RegistrationModalComponent extends EntityDetailsBaseComponent implements OnInit {
  hidePassword = true
  hideConfirmPassword = true

  constructor(
    public dialogRef: MatDialogRef<RegistrationModalComponent>,
    public authorizationApi: UserService,
    public dialog: MatDialog,
    private alertService: AlertService

  ) {
    super()
    this._createForm()
  }

  ngOnInit(): void {

  }

  private _createForm() {
    this.detailsForm = new FormGroup({
      firstName: new FormControl('',[Validators.maxLength(256), Validators.required]),
      lastName: new FormControl('',[Validators.maxLength(256), Validators.required]),
      middleName: new FormControl('',[Validators.maxLength(256), Validators.required]),
      email: new FormControl('', [Validators.maxLength(256), Validators.required,emailValidators()]),
      password: new FormControl('',[ Validators.required]),
      passwordConfirm: new FormControl('', [ Validators.required]),
      phoneNumber: new FormControl('',[Validators.maxLength(15), Validators.required]),
      birthDate: new FormControl('',[ Validators.required])},
    passwordValidator)
  }





  saveInternal() {

    this.authorizationApi.registerUser(this.detailsForm.getRawValue()).subscribe(
      result =>{
        if(result){
          this.dialogRef.close();
          this.showSuccess();
        }
      }
    )

  }
  async showSuccess() {
    this.alertService.showSuccess('RESPONSE.PROFILE.SUCCESSFULLY_REGISTERED');
  }

}
