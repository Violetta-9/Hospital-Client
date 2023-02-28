import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {OutServicesDto, ServiceService} from "../../../core/services/swagger-gen/service";
import {MatSelectChange} from "@angular/material/select";
import {MatOptionSelectionChange} from "@angular/material/core";
import {ActivatedRoute} from "@angular/router";
import {SpecializationService} from "../../../core/services/swagger-gen/specialization";

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
  constructor(public service:ServiceService,public specialization:SpecializationService) {
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

  protected saveInternal(): any {

    console.log(this.detailsForm.getRawValue())
    this.specialization.createSpecialization(this.detailsForm.getRawValue()).subscribe(x=>console.log(x))
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


}

