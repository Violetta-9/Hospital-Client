import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {ThemePalette} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OfficeService} from "../../../core/services/swagger-gen/office";
import { AlertService } from '../../../services/alert-service.service';


@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent extends EntityDetailsBaseComponent implements OnInit {
  color: ThemePalette = 'primary';
  constructor(public officeService:OfficeService,
              private alertService: AlertService
              ) {
    super();
    this._createForm()
  }

  ngOnInit(): void {
  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        address: new FormControl('', [Validators.maxLength(100), Validators.required]),
        registryPhoneNumber: new FormControl('', [Validators.maxLength(10), Validators.required]),
        file: new FormControl('', [Validators.maxLength(10), Validators.required]),
      }
    )
  }

  protected saveInternal(): any {

    this.officeService.createOfficeForm(this.detailsForm.getRawValue().address,this.detailsForm.getRawValue().registryPhoneNumber,true,this.detailsForm.getRawValue().file._files[0]).subscribe(x=>{
      if(x>0){
        this.showSuccess();
      }else{
        this.showError();
      }
    });
  }

  showSuccess() {
      this.alertService.showSuccess('RESPONSE.OFFICE.SUCCSSFULLY_CREATED')
  }
  showError(){
      this.alertService.showError('ERROR.ERROR_MESSAGES')
  }

}
