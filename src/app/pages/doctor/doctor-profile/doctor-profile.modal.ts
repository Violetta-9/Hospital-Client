import {NgModule} from "@angular/core";

import {DoctorProfileComponent} from "./doctor-profile.component";
import {ProfileModal} from "../../../features/form/profile/profile.modal";
import {CommonModule} from "@angular/common";




@NgModule({
  declarations: [
    DoctorProfileComponent
  ],
    imports: [
        ProfileModal,
        CommonModule


    ],
  exports: [
    DoctorProfileComponent,
  ],
})
export class DoctorProfileModal {
}
