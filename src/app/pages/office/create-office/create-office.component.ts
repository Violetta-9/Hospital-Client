import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {ThemePalette} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OfficeService} from "../../../core/services/swagger-gen/office";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent extends EntityDetailsBaseComponent implements OnInit {
  color: ThemePalette = 'primary';
  constructor(public officeService:OfficeService,
              private toastr: ToastrService,
              private translate:TranslateService) {
    super();
    this._createForm()
  }

  ngOnInit(): void {
  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        address: new FormControl('', [Validators.maxLength(100), Validators.required]),
        registryPhoneNumber: new FormControl('', [Validators.maxLength(10), Validators.required]),


      }
    )
  }

  protected saveInternal(): any {
    this.officeService.createOffice(this.detailsForm.getRawValue()).subscribe(x=>{
      if(x>0){
        this.showSuccess();
      }else{
        this.showError();
      }
    });
  }
  showSuccess() {
    this.toastr.success(this.translate.instant('RESPONSE.OFFICE.SUCCSSFULLY_CREATED'), 'Success!');
  }
  showError(){
    this.toastr.error(this.translate.instant('ERROR.ERROR_MESSAGES'),'Error:(')
  }

}
