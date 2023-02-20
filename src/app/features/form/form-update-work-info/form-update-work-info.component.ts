import { Component, OnInit } from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-form-update-work-info',
  templateUrl: './form-update-work-info.component.html',
  styleUrls: ['./form-update-work-info.component.css']
})
export class FormUpdateWorkInfoComponent extends EntityDetailsBaseComponent implements OnInit {
public editWorkInfo=true;
  constructor() {
    super();
    this._createForm()
  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        specialization: new FormControl('option', [ Validators.required]),
        office: new FormControl('option', [ Validators.required]),

      }
    )
  }
  ngOnInit(): void {
  }

  protected saveInternal(): any {
  }

}
