import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {SearchConditionBase, SearchConditionCacheService} from "../../../core/services/search-condition-cache-service";
import {FilterBase} from "../../../core/components/abstraction/filter-base";
import {FormBuilder} from "@angular/forms";
import {SpecializationService} from "../../../core/services/swagger-gen/specialization";
import {OfficeService} from "../../../core/services/swagger-gen/office";

@Component({
  selector: 'app-doctor-filter',
  templateUrl: './doctor-filter.component.html',
  styleUrls: ['./doctor-filter.component.css']
})
export class DoctorFilterComponent  extends FilterBase<SearchConditionBase>  implements OnInit {
 @Input() public filterChanged$;
 defaultValue;
 private officeInfo;
  private specializationInfo;
  public a=[
    {  id : 1 ,  name : 'Вольво',isActive: true  } ,
    {  id : 2 ,  name : 'Saab',isActive: true  } ,
    {  id : 3 ,  name : 'Opel',isActive: false  } ,
    {  id : 4 ,  name : 'Audi',isActive: true } ,
  ];
  constructor(public fb: FormBuilder,
              private specializationService:SpecializationService,
              private officeService:OfficeService,
              searchConditionCacheService: SearchConditionCacheService<SearchConditionBase>) {
    super(searchConditionCacheService);
  }

  ngOnInit(): void {
    this.getAllOffices();
    this.getAllSpecialization();
if(this.isFilterExists()){
  this.defaultValue=this.getFiltersByKey()
  this.filterChanged$.next();

}
    this._createForm();
  }
  private _createForm() {
    this.detailsForm = this.fb.group({
      fullName: this.fb.group({
        firstName: [this.defaultValue.fullName.firstName],
        lastName: [this.defaultValue.fullName.lastName],
        middleName: [this.defaultValue.fullName.middleName],
      }),
      specializationId: [this.defaultValue.specializationId],
      officeId: [this.defaultValue.officeId],

    });
  }
  protected filterChangedNotifier() {
    this.filterChanged$.next();
  }

  private getAllOffices() {
this.officeService.getAllOffices().subscribe(x=>this.officeInfo=x);
  }

  private getAllSpecialization() {
this.specializationService.getAllSpecialization().subscribe(x=>this.specializationInfo=x);
  }
}
