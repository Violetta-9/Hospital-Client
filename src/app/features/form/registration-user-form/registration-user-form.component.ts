import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EntityDetailsBaseComponent} from "../../../core/components/abstraction/entity-detail-base.component";

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {emailValidators} from "../../../shared/validators/emailValidator";

import {base64ToFile, ImageCroppedEvent} from "ngx-image-cropper";
import {AllOfficesDto, OfficeService} from "../../../core/services/swagger-gen/office";
import {SpecializationListDTO, SpecializationService} from "../../../core/services/swagger-gen/specialization";
import {filter} from "rxjs";
import {StatusDTO, StatusService} from "../../../core/services/swagger-gen/profile";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-registration-user-form',
  templateUrl: './registration-user-form.component.html',
  styleUrls: ['./registration-user-form.component.css']
})
export class RegistrationUserFormComponent extends EntityDetailsBaseComponent implements OnInit {
  @Input() userRole;
  @Output() registerData=new EventEmitter();
  public fileToReturn;
  public officeList:AllOfficesDto[];
  public specializations=[]
  public statuses:StatusDTO[]
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(public officeService:OfficeService,
              public specializationService:SpecializationService,
              public statusService:StatusService) {
    super();
    this.getAllOffice();
    this.getStatus();
    this.getAllSpecialization();


  }

  ngOnInit(): void {
    this._createForm()
  }





  private _createForm() {

    this.detailsForm = new FormGroup({
        firstName: new FormControl('', [Validators.maxLength(256), Validators.required]),
        lastName: new FormControl('', [Validators.maxLength(256), Validators.required]),
        middleName: new FormControl('', [Validators.maxLength(256), Validators.required]),
        birthDate: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.maxLength(256), Validators.required, emailValidators()]),
        phoneNumber: new FormControl('', [Validators.maxLength(15), Validators.required]),
        specialization: new FormControl(this.userRole=='receptionist'?0:'', [ Validators.required]),
        office: new FormControl('', [ Validators.required]),
        status: new FormControl(this.userRole=='receptionist'?0:'', [ Validators.required]),
        file: new FormControl(''),
      }
    )
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.fileToReturn = this.base64ToFile(
      event.base64,
      this.imageChangedEvent.target.files[0].name,
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

  private getAllOffice() {
    this.officeService.getAllOffices().subscribe(x=>this.officeList=x);

  }

  private getAllSpecialization() {
    this.specializationService.getAllSpecialization().subscribe(x=>{
      for (const item of x) {
        if(item.isActive){
          this.specializations.push(item)
        }
      }
    })
  }

  private getStatus() {
    this.statusService.getAllStatus().subscribe(x=>this.statuses=x);
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
    this.registerData.emit(this.detailsForm.getRawValue());

  }
}
