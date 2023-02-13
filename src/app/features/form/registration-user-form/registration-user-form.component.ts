import {Component, Input, OnInit} from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";
import {ThemePalette} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {emailValidators} from "../../../shared/validators/emailValidator";
import {passwordValidator} from "../../../shared/validators/passwordValidator";
import {ImageCroppedEvent} from "ngx-image-cropper";

@Component({
  selector: 'app-registration-user-form',
  templateUrl: './registration-user-form.component.html',
  styleUrls: ['./registration-user-form.component.css']
})
export class RegistrationUserFormComponent extends EntityDetailsBaseComponent implements OnInit {
  @Input() userRole;
constructor() {
  super();
  this._createForm();
}

  ngOnInit(): void {
  }

  protected saveInternal(): any {
    console.log(this.detailsForm.getRawValue());
  }
  private _createForm() {
    this.detailsForm = new FormGroup({
        firstName: new FormControl('', [Validators.maxLength(256), Validators.required]),
        lastName: new FormControl('', [Validators.maxLength(256), Validators.required]),
        middleName: new FormControl('', [Validators.maxLength(256), Validators.required]),
        birthDate: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.maxLength(256), Validators.required, emailValidators()]),
        phoneNumber: new FormControl('', [Validators.maxLength(15), Validators.required]),
        specialization: new FormControl('', [ Validators.required]),
        office: new FormControl('', [ Validators.required]),
        status: new FormControl('', [ Validators.required]),
        file: new FormControl(''),
      }
      )
  }



  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
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

}
