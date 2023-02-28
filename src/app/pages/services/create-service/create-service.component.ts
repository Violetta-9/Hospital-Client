import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceCategoriesDTO, ServiceService} from "../../../core/services/swagger-gen/service";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent extends EntityDetailsBaseComponent implements OnInit {
public servicesCategoriesList:ServiceCategoriesDTO[]
  constructor(public service:ServiceService) {
    super();
this.getServicesCategories();
    this._createForm()
  }

  ngOnInit(): void {
  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        title: new FormControl('', [Validators.maxLength(100), Validators.required]),
        price: new FormControl('', [Validators.maxLength(10), Validators.required,Validators.pattern("^[0-9]*$")]),
        serviceCategoryId: new FormControl('', [ Validators.required]),

      }
    )
  }

  protected saveInternal(): any {
    console.log(this.detailsForm.get("serviceCategoryId").errors)
    this.service.createService(this.detailsForm.getRawValue()).subscribe(x=>console.log(x));
  }

  private getServicesCategories() {
    this.service.getServiceCategories().subscribe(x=>this.servicesCategoriesList=x)
  }
}
