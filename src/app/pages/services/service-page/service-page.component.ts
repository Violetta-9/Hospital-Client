import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../../core/services/swagger-gen/service";
import {MatRadioChange} from "@angular/material/radio";
import {tap} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent extends EntityDetailsBaseComponent implements OnInit {
  servicesCategoriesList;
  public idFromQuery;
  editInfo=true;
  serviceStatus;
  constructor(private route: ActivatedRoute,
              public service:ServiceService,
              private toastr: ToastrService,
              private translate:TranslateService) {
    super();

  }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {

          this.idFromQuery=params.id
        this.getServicesCategories();
        }
      );


    this._createForm();

  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        title: new FormControl('', [Validators.maxLength(100), Validators.required]),
        price: new FormControl('', [Validators.maxLength(10), Validators.required, Validators.pattern("^[0-9]*$")]),
        serviceCategoryId: new FormControl('', [Validators.required]),

      }
    )
  }
  private getServiceById() {
    this.service.getServiceById(this.idFromQuery).subscribe(x=>{
      this.detailsForm.get('title').setValue(x.title);
      this.detailsForm.get('price').setValue(x.price);
      let defValue=this.servicesCategoriesList.find(s=>s.title.toLowerCase()==x.serviceCategoryName.toLowerCase()).id;
      this.detailsForm.get('serviceCategoryId').setValue(defValue);
      this.serviceStatus=x.isActive
    })
  }
  private getServicesCategories() {
    this.service.getServiceCategories().pipe(tap(x => this.servicesCategoriesList = x)).subscribe(x => this.getServiceById())
  }

  protected saveInternal(): any {
    this.detailsForm.addControl('id',new FormControl(this.idFromQuery))
    this.service.updateService(this.detailsForm.getRawValue()).subscribe(x=>{
      if(x.isSuccess){
        this.toastr.success(this.translate.instant('RESPONSE.SERVICE.SUCCESSFULLY_UPDATE'))
      }
    })

  }


  updateStatus($event: MatRadioChange) {
this.service.updateServiceStatus({
      id:this.idFromQuery,
        isActive: JSON.parse($event.value)
    }).subscribe(x=>{
      if(x.isSuccess){
        this.toastr.success(this.translate.instant('RESPONSE.SERVICE.SUCCESSFULLY_UPDATE_STATUS'))
      }
})
  }
}
