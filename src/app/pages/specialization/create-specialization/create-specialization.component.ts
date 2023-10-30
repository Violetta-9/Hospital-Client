import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {OutServicesDto, ServiceService} from "../../../core/services/swagger-gen/service";
import {MatSelectChange} from "@angular/material/select";
import {MatOptionSelectionChange} from "@angular/material/core";
import {ActivatedRoute} from "@angular/router";
import {SpecializationService} from "../../../core/services/swagger-gen/specialization";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-create-specialization',
  templateUrl: './create-specialization.component.html',
  styleUrls: ['./create-specialization.component.css']
})
export class CreateSpecializationComponent  extends EntityDetailsBaseComponent implements OnInit {
  public isTableOpen=false;
  toppingList:OutServicesDto[];
  displayedColumns: string[] = ['title', 'price', 'isActive', 'serviceCategoryName'];
  dataSource=[];
  constructor(public service:ServiceService,
              public specialization:SpecializationService,
              private toastr: ToastrService,
              private translate:TranslateService) {
    super();
    this._createForm();
    this.getAllServices();
  }

  ngOnInit(): void {

  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        title: new FormControl('', [Validators.maxLength(100), Validators.required]),
        servicesId: new FormControl('', [ Validators.required]),

      }
    )
  }
  private getAllServices() {
    this.service.getAllFreeServices().subscribe(x=>this.toppingList=x);

  }
  onChange(id: number, $event: MatOptionSelectionChange<number>) {
    this.isTableOpen=!this.isTableOpen;
    if($event.source.selected){
      this.service.getServiceById(id).subscribe(x=>this.dataSource=[...this.dataSource,x]);
    }else{
      console.log(id);
      var a=this.dataSource.find(x=>x.id==id);
      console.log(a);

      if(a!=undefined){
        var i=this.dataSource.indexOf(a);
        this.dataSource.splice(i,1)
        this.dataSource=[...this.dataSource]
      }
    }
  }

  protected saveInternal(): any {
    this.specialization.createSpecialization(this.detailsForm.getRawValue()).subscribe(x=>{
      if(x>0){
        this.showSuccess();
      }else{
        this.showError();
      }
    })
  }


  showSuccess() {
    this.toastr.success(this.translate.instant('RESPONSE.SPECIALIZATION.SUCCESSFULLY_CREATED'), 'Success!');
  }
  showError(){
    this.toastr.error(this.translate.instant('ERROR.ERROR_MESSAGES'),'Error:(')
  }


}

