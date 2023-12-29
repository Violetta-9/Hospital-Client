import { Component, OnInit } from '@angular/core';
import { OfficeDto, OfficeService } from "../../../core/services/swagger-gen/office";
import {MatRadioChange} from "@angular/material/radio";
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../services/alert-service.service';

@Component({
  selector: 'app-office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['./office-page.component.css']
})
export class OfficePageComponent extends EntityDetailsBaseComponent implements OnInit {
public office :OfficeDto;
  panelOpenState = false;
  editInfo = true;
  hasAccess:boolean = false;
  constructor(public officeService:OfficeService,
              private alertService: AlertService,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {

    const roles = localStorage.getItem('role');
    if (roles) {
      const rolesArray = roles.split(',');
      rolesArray.splice(rolesArray.indexOf('User'), 1)
      if (rolesArray[0] == 'Receptionist') {
        this.hasAccess = true
      }
    }
    this.route.data.subscribe(({ office }) => {
      this.detailsForm = new FormGroup({
        address: new FormControl(office.address, [Validators.maxLength(256), Validators.required]),
        registryPhoneNumber: new FormControl(office.registryPhoneNumber, [Validators.maxLength(256), Validators.required]),
      })
      this.office = office
    })
  }

  updateStatus($event: MatRadioChange) {

    this.officeService.updateOfficeStatus({officeId: this.office.id,isActive:JSON.parse($event.value)}).subscribe(x=>{
      if(x.isSuccess){
        this.alertService.showSuccess('RESPONSE.OFFICE.SUCCSSFULLY_UPDATE_STATUS')
      }
    })
  }

  protected saveInternal(): any {
    this.detailsForm.addControl("officeId", new FormControl(this.office.id));
    this.officeService.updateOfficeForm(this.detailsForm.getRawValue().officeId,this.detailsForm.getRawValue().address,this.detailsForm.getRawValue().registryPhoneNumber).subscribe(x=>{
      if(x.isSuccess){
        this.alertService.showSuccess('RESPONSE.OFFICE.SUCCSSFULLY_UPDATE')
      }
    })
  }
}
