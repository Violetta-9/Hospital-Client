import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {emailValidators} from "../../../shared/validators/emailValidator";
import {DoctorService, StatusService} from "../../../core/services/swagger-gen/profile";
import {MatSelectChange} from "@angular/material/select";
import {AddImageToAvatarService} from "../../../core/services/manage-photo/add-image-to-avatar.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteConfirmComponent} from "../../../shared/modals/delete-confirm/delete-confirm.component";
import {DeletePersonService} from "../../../core/services/manage-delete/delete-person.service";

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
  @Output() doctorStatus=new EventEmitter();
public newPhoto;
  panelOpenState = false;

  constructor(public statusService:StatusService,
              public doctorService:DoctorService,
              public addImageToAvatar:AddImageToAvatarService,
              public dialog: MatDialog,
              public deletePersonService:DeletePersonService){
    super();
this.getStatuses();
  }

  ngOnInit(): void {
this.addImageToAvatar.addImageTrigger.subscribe(x=>this.newPhoto=x)
    this.addImageToAvatar.deleteImageTrigger.subscribe(x=>this.newPhoto=x)
    this._createForm();


  }
  _createForm(){
    this.statusGroup = new FormGroup({
      status:new FormControl(this.profileUser.statusTitle)
    });


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
    this.doctorStatus.emit($event.value);

  }

  deletePerson(element:any) {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: {element},
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result){
          this.deletePersonService.DeletePerson(result);
      }

    });

  }
}
