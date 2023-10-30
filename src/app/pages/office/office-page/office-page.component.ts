import { Component, OnInit } from '@angular/core';
import {OfficeService} from "../../../core/services/swagger-gen/office";
import {MatRadioChange} from "@angular/material/radio";
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['./office-page.component.css']
})
export class OfficePageComponent extends EntityDetailsBaseComponent implements OnInit {
public office;
  panelOpenState = false;
  editInfo=true;
  constructor(public officeService:OfficeService,
              private toastr: ToastrService,
              private translate:TranslateService) {
    super();

    this.office=history.state.data;
  }

  ngOnInit(): void {
    this._createForm();
  }
  private _createForm() {

    this.detailsForm = new FormGroup({
      address: new FormControl(this.office.address, [Validators.maxLength(256), Validators.required]),
      registryPhoneNumber: new FormControl(this.office.registryPhoneNumber, [Validators.maxLength(256), Validators.required]),


      }
    )
  }

  updateStatus($event: MatRadioChange) {

    this.officeService.updateOfficeStatus({officeId: this.office.id,isActive:JSON.parse($event.value)}).subscribe(x=>{
      if(x.isSuccess){
        this.toastr.success(this.translate.instant('RESPONSE.OFFICE.SUCCSSFULLY_UPDATE_STATUS'))
      }
    })
  }

  protected saveInternal(): any {
    this.detailsForm.addControl("officeId", new FormControl(this.office.id));
    console.log(this.detailsForm.getRawValue())
    this.officeService.updateOffice(this.detailsForm.getRawValue()).subscribe(x=>{
      if(x.isSuccess){
        this.toastr.success(this.translate.instant('RESPONSE.OFFICE.SUCCSSFULLY_UPDATE'))
      }
    })
  }
}
