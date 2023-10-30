import {NgModule} from "@angular/core";;
import {PatientProfileComponent} from "./patient-profile/patient-profile.component";
import {HomePatientPageComponent} from "./home-patient-page/home-patient-page.component";
import {CreatePatientComponent} from "./create-patient/create-patient.component";
import {MatTableModule} from "@angular/material/table";
import {ProfileModal} from "../../features/form/profile/profile.modal";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [

    PatientProfileComponent,
    HomePatientPageComponent,
    CreatePatientComponent,

  ],
  imports: [
    MatTableModule,
    ProfileModal,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatSlideToggleModule


  ],
  exports: [
    PatientProfileComponent,
    HomePatientPageComponent,
    CreatePatientComponent,  ],
})
export class PatientModule {
}
