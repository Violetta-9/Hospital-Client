import {NgModule} from "@angular/core";

import {CreateOfficeComponent} from "./create-office/create-office.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {AppRoutingModule} from "../../app-routing.module";
import {CommonModule} from "@angular/common";




@NgModule({
  declarations: [
    CreateOfficeComponent
  ],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    CommonModule,


  ],
  exports: [
    CreateOfficeComponent,
  ],
})
export class OfficeModal {
}
