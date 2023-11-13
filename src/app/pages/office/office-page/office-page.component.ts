import { Component, OnInit } from '@angular/core';
import { OfficeDto, OfficeService } from "../../../core/services/swagger-gen/office";
import {MatRadioChange} from "@angular/material/radio";
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['./office-page.component.css']
})
export class OfficePageComponent extends EntityDetailsBaseComponent implements OnInit {
public office :OfficeDto;
  panelOpenState = false;
  editInfo=true;
  constructor(public officeService:OfficeService,
              private toastr: ToastrService,
              private translate:TranslateService,private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.officeService.getOfficeById(params.id).subscribe(y=>{
          this.detailsForm = new FormGroup({
            address: new FormControl(y.address, [Validators.maxLength(256), Validators.required]),
            registryPhoneNumber: new FormControl(y.registryPhoneNumber, [Validators.maxLength(256), Validators.required]),
          })
          console.log(this.detailsForm);
          this.office = y
        })

      }
    );

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
    this.officeService.updateOfficeForm(this.detailsForm.getRawValue().officeId,this.detailsForm.getRawValue().address,this.detailsForm.getRawValue().registryPhoneNumber).subscribe(x=>{
      if(x.isSuccess){
        this.toastr.success(this.translate.instant('RESPONSE.OFFICE.SUCCSSFULLY_UPDATE'))
      }
    })
  }
}
