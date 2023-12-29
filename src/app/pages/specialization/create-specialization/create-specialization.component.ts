import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../../core/services/swagger-gen/service";
import {MatOptionSelectionChange} from "@angular/material/core";
import {SpecializationService} from "../../../core/services/swagger-gen/specialization";
import { EmptyService } from '../../../core/services/swagger-gen/service/model/emptyService';
import { AlertService } from '../../../services/alert-service.service';

@Component({
  selector: 'app-create-specialization',
  templateUrl: './create-specialization.component.html',
  styleUrls: ['./create-specialization.component.css']
})
export class CreateSpecializationComponent  extends EntityDetailsBaseComponent implements OnInit {
  public isTableOpen=false;
  toppingList:EmptyService[];
  displayedColumns: string[] = ['title'];
  dataSource=[];
  constructor(public service:ServiceService,
              public specialization:SpecializationService,
              private alertService: AlertService) {
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
  onChange(id: number, title : string, $event: MatOptionSelectionChange<number>) {

    if(!this.isTableOpen){
      this.isTableOpen=!this.isTableOpen;
    }

    if($event.source.selected){
      this.dataSource=[...this.dataSource,{id: id,title: title }]
    }else{

      var a=this.dataSource.find(x=>x.id==id);


      if(a!=undefined){
        var i=this.dataSource.indexOf(a);
        this.dataSource.splice(i,1)
        this.dataSource=[...this.dataSource]
      }
    }
    if(this.dataSource.length==0){
      this.isTableOpen=false;
    }
  }

  protected saveInternal(): any {
      this.detailsForm.addControl('isActive', new FormControl(true));
    this.specialization.createSpecialization(this.detailsForm.getRawValue()).subscribe(x=>{
      if(x>0){
        this.showSuccess();
      }else{
        this.showError();
      }
    })
  }

  showSuccess() {
      this.alertService.showSuccess('RESPONSE.SPECIALIZATION.SUCCESSFULLY_CREATED')
  }
  showError(){
      this.alertService.showError('ERROR.ERROR_MESSAGES')
  }

}

