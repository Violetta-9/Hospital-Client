import {NgModule} from "@angular/core";


import {FormUpdatePersonalInfoComponent} from "../form-update-personal-info/form-update-personal-info.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TranslateModule} from "@ngx-translate/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";





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
    CommonModule


  ],
  exports: [
    FormUpdatePersonalInfoComponent,

  ],
})
export class FormUpdatePersonalInfoModal {
}
