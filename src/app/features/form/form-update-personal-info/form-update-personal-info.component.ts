import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {emailValidators} from "../../../shared/validators/emailValidator";

@Component({
  selector: 'app-form-update-personal-info',
  templateUrl: './form-update-personal-info.component.html',
  styleUrls: ['./form-update-personal-info.component.css']
})
export class FormUpdatePersonalInfoComponent extends EntityDetailsBaseComponent implements OnInit {
public editPersonalInfo=true;
  constructor() {
    super();
    this._createForm()
  }

  ngOnInit(): void {
  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        firstName: new FormControl('dddd', [Validators.maxLength(256), Validators.required]),
        lastName: new FormControl('cdsa', [Validators.maxLength(256), Validators.required]),
        middleName: new FormControl('sdsd', [Validators.maxLength(256), Validators.required]),
        birthDate: new FormControl('dsad', [Validators.required]),
        email: new FormControl('', [Validators.maxLength(256), Validators.required, emailValidators()]),
        phoneNumber: new FormControl('', [Validators.maxLength(15), Validators.required]),

      }
    )
  }

  protected saveInternal(): any {
  }

}
