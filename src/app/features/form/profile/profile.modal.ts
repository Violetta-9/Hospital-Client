import {NgModule} from "@angular/core";

import {ProfileComponent} from "./profile.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {TranslateModule} from "@ngx-translate/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormUpdatePersonalInfoModal} from "../form-update-personal-info/form-update-personal-info.modal";
import {FormUpdateWorkInfoModal} from "../form-update-work-info/form-update-work-info-modal";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    ProfileComponent
  ],
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatExpansionModule,
        TranslateModule,
        MatDatepickerModule,
        CommonModule,
        MatInputModule,
        MatButtonModule,
        FormUpdatePersonalInfoModal,
        FormUpdateWorkInfoModal,
        MatTreeModule,
        MatIconModule,
        MatTableModule,


    ],
  exports: [
    ProfileComponent,
  ],
})
export class ProfileModal {
}
