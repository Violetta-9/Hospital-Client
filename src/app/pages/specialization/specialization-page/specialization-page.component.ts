import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {SpecializationService} from "../../../core/services/swagger-gen/specialization";
import {MatOptionSelectionChange} from "@angular/material/core";
import {MatRadioChange} from "@angular/material/radio";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../../core/services/swagger-gen/service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-specialization-page',
  templateUrl: './specialization-page.component.html',
  styleUrls: ['./specialization-page.component.css']
})
export class SpecializationPageComponent  extends EntityDetailsBaseComponent implements OnInit {
  displayedColumns: string[] = ['title','price', 'isActive','serviceCategoryName'];
  dataSource=[];
  specialization;
  editInfo=true;
  toppingList=[];
  defaultServices;
  idFromQuery;
  constructor(public specializationService:SpecializationService,public service:ServiceService,private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.idFromQuery=params.id
        this.getSpecialization();
        }
      );

    this.getAllServices();
    this._createForm();
  }
  private _createForm() {

    this.detailsForm = new FormGroup({
        title: new FormControl( '',[Validators.maxLength(256), Validators.required]),
       servicesId: new FormControl(this.defaultServices, [Validators.maxLength(256), Validators.required]),

      }
    )
  }
  protected saveInternal(): any {
    this.detailsForm.addControl("id",new FormControl(this.specialization.id))
    this.specializationService.updateSpecialization(this.detailsForm.getRawValue()).subscribe(x=>console.log(x));

  }

  private getSpecialization() {


    this.specializationService.getSpecializationById(this.idFromQuery).subscribe(x=>{
      this.dataSource=x.services
      this.detailsForm.get('title').setValue(x.title);
      this.toppingList=[...this.toppingList,...x.services]
      this.defaultServices=x.services.map(item=>item.id);
      this.detailsForm.get('servicesId').setValue(this.defaultServices)
      this.specialization={
        id: x.id,
        title:x.title,
        isActive:x.isActive
      };

    });
  }

  deleteService(id) {

  }

  onChange(id, $event: MatOptionSelectionChange<any>) {
    if($event.source.selected && !this.detailsForm.get('servicesId').value.includes(id)){
      this.service.getServiceById(id).subscribe(x=>this.dataSource=[...this.dataSource,x]);

    }
    if(!$event.source.selected && this.detailsForm.get('servicesId').value.includes(id)){

      let a=this.dataSource.find(x=>x.id==id);


      if(a!=undefined){
        let i=this.dataSource.indexOf(a);
        this.dataSource.splice(i,1)
        this.dataSource=[...this.dataSource]
      }
    }


  }

  updateStatus($event: MatRadioChange) {

this.specializationService.updateSpecializationStatus({
  id:this.specialization.id,
  isActive: JSON.parse($event.value)
}).subscribe(x=>console.log(x))
  }

  private getAllServices() {
    this.service.getAllFreeServices().subscribe(x=>this.toppingList=[...this.toppingList,...x])
  }
}
