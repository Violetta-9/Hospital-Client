import {NgModule} from "@angular/core";


import {FormUpdatePersonalInfoComponent} from "../form-update-personal-info/form-update-personal-info.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TranslateModule} from "@ngx-translate/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {ImageCropperModule} from "ngx-image-cropper";





@NgModule({
  declarations: [
    FormUpdatePersonalInfoComponent,

  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    TranslateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    MaterialFileInputModule,
    ImageCropperModule


  ],
  exports: [
    FormUpdatePersonalInfoComponent,

  ],
})
export class FormUpdatePersonalInfoModal {
}
