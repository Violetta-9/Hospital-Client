import {Component, OnInit} from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../../core/components/abstraction/entity-detail-base.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent extends EntityDetailsBaseComponent implements OnInit {
  hidePassword = true
  hideConfirmPassword = true

  constructor(
    public dialogRef: MatDialogRef<RegistrationModalComponent>,

    public dialog: MatDialog,

  ) {
    super()
    this._createForm()
  }

  ngOnInit(): void {

  }

  private _createForm() {
    this.detailsForm = new FormGroup({
      login: new FormControl('',[Validators.maxLength(256), Validators.required,]),
      firstName: new FormControl('',[Validators.maxLength(256), Validators.required]),
      lastName: new FormControl('',[Validators.maxLength(256), Validators.required]),
      email: new FormControl('', [Validators.maxLength(256), Validators.required]),
      password: new FormControl('',[ Validators.required]),
      passwordConfirm: new FormControl('', [ Validators.required]),
      phoneNumber: new FormControl('',[Validators.maxLength(15), Validators.required]),
    })
  }





  saveInternal() {

  }
}
