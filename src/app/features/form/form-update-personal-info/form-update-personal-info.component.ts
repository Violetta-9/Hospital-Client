import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {emailValidators} from "../../../shared/validators/emailValidator";
import {OfficeService} from "../../../core/services/swagger-gen/office";
import {SpecializationService} from "../../../core/services/swagger-gen/specialization";

@Component({
  selector: 'app-form-update-personal-info',
  templateUrl: './form-update-personal-info.component.html',
  styleUrls: ['./form-update-personal-info.component.css']
})
export class FormUpdatePersonalInfoComponent extends EntityDetailsBaseComponent implements OnInit {
public editPersonalInfo=true;

 @Input() userProfile;
 @Input() userRole;
  @Output() newDataForUpdating=new EventEmitter();

  constructor() {
    super();

  }

  ngOnInit(): void {
    this._createForm()
  }
  private _createForm() {

    this.detailsForm = new FormGroup({
        firstName: new FormControl(this.userProfile.firstName, [Validators.maxLength(256), Validators.required]),
        lastName: new FormControl(this.userProfile.lastName, [Validators.maxLength(256), Validators.required]),
        middleName: new FormControl(this.userProfile.middleName, [Validators.maxLength(256), Validators.required]),
        birthDate: new FormControl(this.userProfile.birthDay, [Validators.required]),
        phoneNumber: new FormControl(this.userProfile.phoneNumber, [Validators.maxLength(15), Validators.required]),

      }
    )
  }

  protected saveInternal(): any {
    this.detailsForm.addControl("accountId", new FormControl(this.userProfile.accountId));

    this.newDataForUpdating.emit(this.detailsForm.getRawValue())
  }


}
