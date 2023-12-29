import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ImageCroppedEvent} from "ngx-image-cropper";
import {AddImageToAvatarService} from "../../../core/services/manage-photo/add-image-to-avatar.service";

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
  imageChangedEvent: any;
  croppedImage;
  fileToReturn;
  isImageShowed=true;
  constructor(public addImageToAvatarService:AddImageToAvatarService) {
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
        birthDate: new FormControl(this.userProfile.birthDay, [Validators.required],),
        phoneNumber: new FormControl(this.userProfile.phoneNumber, [Validators.maxLength(15), Validators.required]),
        file: new FormControl(),

      }
    )
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  fileChangeEvent(event: any): void {
    this.isImageShowed=true;
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {

    this.croppedImage = event.base64;
    this.addImageToAvatarService.AddImageToAvatar(this.croppedImage)
    this.fileToReturn = this.base64ToFile(
      event.base64,
      this.imageChangedEvent.target.files[0].name,
    )
  }
  base64ToFile(data, filename) {

    const arr = data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  protected saveInternal(): any {
    this.detailsForm.get('file').setValue(this.fileToReturn);

    this.detailsForm.addControl("accountId", new FormControl(this.userProfile.accountId));

    this.newDataForUpdating.emit(this.detailsForm.getRawValue())
  }


  deleteImage() {
    this.isImageShowed=false;
    this.fileToReturn=null;
    this.detailsForm.get('file').setValue(null)
    this.addImageToAvatarService.DeleteAvatar(undefined);
  }
}
