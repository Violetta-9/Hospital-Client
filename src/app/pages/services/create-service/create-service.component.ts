import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent extends EntityDetailsBaseComponent implements OnInit {

  constructor() {
    super();
    this._createForm()
  }

  ngOnInit(): void {
  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        title: new FormControl('', [Validators.maxLength(100), Validators.required]),
        price: new FormControl('', [Validators.maxLength(10), Validators.required]),
        serviceCategoryId: new FormControl('', [ Validators.required]),

      }
    )
  }

  protected saveInternal(): any {
  }

}
