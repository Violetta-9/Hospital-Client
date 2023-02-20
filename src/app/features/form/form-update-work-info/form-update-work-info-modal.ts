import {NgModule} from "@angular/core";
import {FormUpdateWorkInfoComponent} from "./form-update-work-info.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";









@NgModule({
  declarations: [
    FormUpdateWorkInfoComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    TranslateModule,
    MatButtonModule,
    CommonModule


  ],
  exports: [

    FormUpdateWorkInfoComponent
  ],
})
export class FormUpdateWorkInfoModal {
}
