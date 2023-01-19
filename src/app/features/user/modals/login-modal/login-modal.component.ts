import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent extends EntityDetailsBaseComponent implements OnInit {
  hide=true
  constructor( public dialogRef: MatDialogRef<LoginModalComponent>,
               public dialog: MatDialog,

  ) {
    super();
    this.createForm();
  }

  ngOnInit(): void {

  }

  private createForm() {
    this.detailsForm=new FormGroup({
      login: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    })
  }

  // openRegisterDialog() {
  //   this.dialogRef.close()
  //   const dialogRef = this.dialog.open(RegistrationComponent, {
  //     minWidth: '40w',
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //
  //   });
  // }
  saveInternal() {


    };


}
