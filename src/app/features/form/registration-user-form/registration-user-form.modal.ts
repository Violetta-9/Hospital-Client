import {NgModule} from "@angular/core";

import {RegistrationUserFormComponent} from "./registration-user-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {AppRoutingModule} from "../../../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {CommonModule} from "@angular/common";
import {ImageCropperModule} from "ngx-image-cropper";
import {TranslateModule} from "@ngx-translate/core";




@NgModule({
  declarations: [
    RegistrationUserFormComponent
  ],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MaterialFileInputModule,
    MaterialFileInputModule,
    CommonModule,
    ImageCropperModule,
    TranslateModule

  ],
  exports: [
    RegistrationUserFormComponent,
  ],
})
export class RegistrationUserFormModal {
}
