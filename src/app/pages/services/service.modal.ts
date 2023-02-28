import {NgModule} from "@angular/core";


import {CreateServiceComponent} from "./create-service/create-service.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ServicePageComponent} from "./service-page/service-page.component";
import {MatRadioModule} from "@angular/material/radio";




@NgModule({
  declarations: [
    CreateServiceComponent,ServicePageComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    TranslateModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule


  ],
  exports: [
    CreateServiceComponent,ServicePageComponent
  ],
})
export class ServiceModal {
}
