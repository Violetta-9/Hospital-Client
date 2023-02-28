import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {emailValidators} from "../../../shared/validators/emailValidator";
import {DoctorService, StatusService} from "../../../core/services/swagger-gen/profile";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  extends EntityDetailsBaseComponent implements OnInit {
 public statusGroup: FormGroup= new FormGroup({});
 public statuses;
  @Input() userRole;
  @Input() profileUser;
  @Output() dataForPersonalUpdating=new EventEmitter();
  @Output() dataForWorkUpdating=new EventEmitter();

  panelOpenState = false;

  constructor(public statusService:StatusService,public doctorService:DoctorService){
    super();
this.getStatuses();
  }

  ngOnInit(): void {

    this._createForm();


  }
  _createForm(){
    this.statusGroup = new FormGroup({
      status:new FormControl(this.profileUser.statusTitle)
    });
console.log(this.statusGroup.getRawValue())

  }

  protected saveInternal(): any {
  }

  updatePersonalData($event: any) {
    this.dataForPersonalUpdating.emit($event);
  }

  updateWorkData($event: any) {
    this.dataForWorkUpdating.emit($event);
  }

  private getStatuses() {
      this.statusService.getAllStatus().subscribe(x=>{
        let defValue=x.find(s=>s.title.toLowerCase()==this.profileUser.statusTitle.toLowerCase()).id;
        this.statuses=x;
        this.statusGroup.get('status').setValue(defValue);
      })
  }

  onSelect($event: MatSelectChange) {
    console.log($event.value)
    this.doctorService.updateStatusForm($event.value,this.profileUser.accountId).subscribe(x=>console.log(x))
  }
}
