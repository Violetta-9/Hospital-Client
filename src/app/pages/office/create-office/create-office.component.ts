import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {emailValidators} from "../../../shared/validators/emailValidator";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent extends EntityDetailsBaseComponent implements OnInit {
  color: ThemePalette = 'primary';
  constructor() {
    super();
    this._createForm()
  }

  ngOnInit(): void {
  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        address: new FormControl('', [Validators.maxLength(100), Validators.required]),
        registryPhoneNumber: new FormControl('', [Validators.maxLength(10), Validators.required]),


      }
    )
  }

  protected saveInternal(): any {
  }

}
