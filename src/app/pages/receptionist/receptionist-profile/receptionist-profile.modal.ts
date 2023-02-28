import {NgModule} from "@angular/core";


import {ProfileModal} from "../../../features/form/profile/profile.modal";
import {CommonModule} from "@angular/common";
import {ReceptionistProfileComponent} from "./receptionist-profile.component";




@NgModule({
  declarations: [
    ReceptionistProfileComponent
  ],
    imports: [
        ProfileModal,
        CommonModule


    ],
  exports: [
    ReceptionistProfileComponent,
  ],
})
export class ReceptionistProfileModal {
}
