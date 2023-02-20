import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {emailValidators} from "../../../shared/validators/emailValidator";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  extends EntityDetailsBaseComponent implements OnInit {
  statusGroup: FormGroup;
  @Input() userRole;

  panelOpenState = false;

  constructor(private fb: FormBuilder){
    super();

  }

  ngOnInit(): void {
    this.statusGroup = this.fb.group({
      status: [null]
    });

    this.statusGroup.get('status').setValue(1);
  }


  protected saveInternal(): any {
  }

}
