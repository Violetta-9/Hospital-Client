import { Component, OnInit } from '@angular/core';
import {ReceptionistService} from "../../../core/services/swagger-gen/profile";
import dateFormat, { masks } from "dateformat";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-create-receptionist',
  templateUrl: './create-receptionist.component.html',
  styleUrls: ['./create-receptionist.component.css']
})
export class CreateReceptionistComponent implements OnInit {
public userRole='receptionist'
  constructor(public receptionist:ReceptionistService,
              private toastr: ToastrService,
              private translate:TranslateService) { }

  ngOnInit(): void {
  }

  createReceptionist(repo: any) {

    this.receptionist.assignReceptionistRoleForm(repo.firstName,repo.lastName,repo.middleName,
      repo.email,repo.phoneNumber,dateFormat(repo.birthDate, "isoDateTime"),
     repo.office,repo.file).subscribe(x=>{
        if(x.isSuccess){
          this.showSuccess();
        }else{
          this.showError();
        }
    })
  }
  showSuccess() {
    this.toastr.success(this.translate.instant('RESPONSE.PROFILE.SUCCESSFULLY_CREATE'), 'Success!');
  }
  showError(){
    this.toastr.error(this.translate.instant('ERROR.ERROR_MESSAGES'),'Error:(')
  }
}
