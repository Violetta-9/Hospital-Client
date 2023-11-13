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
import {HomeOfficePageComponent} from "./home-office-page/home-office-page.component";
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import {OfficePageComponent} from "./office-page/office-page.component";
import {MatExpansionModule} from "@angular/material/expansion";
import { MatIconModule } from '@angular/material/icon';
import { MaterialFileInputModule } from 'ngx-material-file-input';




@NgModule({
  declarations: [
    CreateOfficeComponent,
    HomeOfficePageComponent,
    OfficePageComponent
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
    MatTableModule,
    MatRadioModule,
    MatExpansionModule,
    MatIconModule,
    MaterialFileInputModule,


  ],
  exports: [
    CreateOfficeComponent,
    HomeOfficePageComponent,
    OfficePageComponent
  ],
})
export class OfficeModal {
}
