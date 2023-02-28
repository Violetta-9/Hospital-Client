import {NgModule} from "@angular/core";

import {CreateSpecializationComponent} from "./create-specialization/create-specialization.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {MatOptionModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {HomeSpecializationPageComponent} from "./home-specialization-page/home-specialization-page.component";
import {MatRadioModule} from "@angular/material/radio";
import {SpecializationPageComponent} from "./specialization-page/specialization-page.component";
import {AppModule} from "../../app.module";
import {MatIconModule} from "@angular/material/icon";




@NgModule({
  declarations: [
    CreateSpecializationComponent,
    HomeSpecializationPageComponent,
    SpecializationPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatOptionModule,
    MatButtonModule,
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    AppModule,
    MatIconModule,
    FormsModule,
    MatRadioModule


  ],
  exports: [
    CreateSpecializationComponent,
    HomeSpecializationPageComponent,
    SpecializationPageComponent,
  ],
})
export class SpecializationModal {
}
