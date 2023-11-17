import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginModalComponent} from "../../../user/modals/login-modal/login-modal.component";
import {RegistrationModalComponent} from "../../../user/modals/registration-modal/registration-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isHidden: boolean=false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openLoginDialog(){
    console.log("op Work")
    const dialogRef = this.dialog.open(LoginModalComponent);
    console.log("op Work end")
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  openRegistrationDialog(){
    console.log("op Work")
    const dialogRef = this.dialog.open(RegistrationModalComponent);
    console.log("op Work end")
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  public get isUserAuthorize(){
    return localStorage.getItem('token')!==null;
  }

}
