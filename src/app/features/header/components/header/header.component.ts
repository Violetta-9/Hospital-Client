import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginModalComponent} from "../../../user/modals/login-modal/login-modal.component";
import {RegistrationModalComponent} from "../../../user/modals/registration-modal/registration-modal.component";
import { Router } from '@angular/router';
import { AllOfficesDto, OfficeService } from '../../../../core/services/swagger-gen/office';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isHidden: boolean = false;
  offices: AllOfficesDto[];
  constructor(public dialog: MatDialog,private readonly router:Router,private readonly officeService: OfficeService) { }

  ngOnInit(): void {
    this.officeService.getAllOffices().subscribe(x=>this.offices = x)
  }
  openLoginDialog(){
    const dialogRef = this.dialog.open(LoginModalComponent);
    dialogRef.afterClosed().subscribe(_ => {
    });
  }
  openRegistrationDialog(){
    const dialogRef = this.dialog.open(RegistrationModalComponent);
    dialogRef.afterClosed().subscribe(_ => {
    });
  }
  public get isUserAuthorize(){
    return localStorage.getItem('token')!==null;
  }

  async logOut() {
    localStorage.clear();
   await this.router.navigate(['/']);
  }

  goTo(id: number) {
    this.router.navigate(["office"], { queryParams: { id: id } });
  }

  get getToManagePage():string {
    let roles = localStorage.getItem('role');
    let rolesArray = roles.split(',');
    if(rolesArray.includes('Patient')){
      return '/management/patient'
    } else if(rolesArray.includes('Doctor')){
      return '/management/doctor'
    }else if(rolesArray.includes('Receptionist')){
      return '/management/receptionist'
    }
    else{
      return ''
    }

  }
}
