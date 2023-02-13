import {NgModule} from "@angular/core";


import {CreateServiceComponent} from "./create-service/create-service.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";




@NgModule({
  declarations: [
    CreateServiceComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    TranslateModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule


  ],
  exports: [
    CreateServiceComponent,
  ],
})
export class ServiceModal {
}
