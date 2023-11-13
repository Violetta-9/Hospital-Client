import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OfficeService} from "../../../core/services/swagger-gen/office";
import {SpecializationService} from "../../../core/services/swagger-gen/specialization";


@Component({
  selector: 'app-form-update-work-info',
  templateUrl: './form-update-work-info.component.html',
  styleUrls: ['./form-update-work-info.component.css']
})
export class FormUpdateWorkInfoComponent extends EntityDetailsBaseComponent implements OnInit {
public editWorkInfo=true;
  public offices;
  public specialization;
  @Input() userProfile;//????
  @Input() userRole;
  @Output() workDataForUpdating= new EventEmitter()

  constructor(public officeService:OfficeService,public specializationService:SpecializationService) {
    super();


  }

  ngOnInit(): void {
    this.getAllOffices();
    if(this.userRole=="doctor"){
      this.getAllSpecialization()
    }

    this._createForm()

  }

  private _createForm() {
    this.detailsForm = new FormGroup({
      specializationId: new FormControl('0', [ Validators.required]),
      officeId: new FormControl('', [ Validators.required]),

      }
    )
  }

  protected saveInternal(): any {

    this.detailsForm.addControl("accountId", new FormControl(this.userProfile.accountId));
    console.log(this.detailsForm.getRawValue())
    this.workDataForUpdating.emit(this.detailsForm.getRawValue())
  }
  private getAllOffices() {
    this.officeService.getAllOffices().subscribe(x=>{
      let defValue=x.find(s=>s.address.toLowerCase()==this.userProfile.officeAddress.toLowerCase());

      this.offices=x;
      this.detailsForm.get('officeId').setValue(defValue);
    })
  }

  private getAllSpecialization() {
    this.specializationService.getAllSpecialization().subscribe(x=>{
      let defValue=x.find(s=>s.title.toLowerCase()==this.userProfile.specializationTitle.toLowerCase()).id;

      this.specialization=x;
      this.detailsForm.get('specializationId').setValue(defValue);
    });
  }

}
