import {NgModule} from "@angular/core";
import {HomeReceptionistPageComponent} from "./home-receptionist-page/home-receptionist-page.component";
import {HomeManagementPageComponent} from "./home-management-page/home-management-page.component";
import {CreateReceptionistComponent} from "./create-receptionist/create-receptionist.component";
import {MatTableModule} from "@angular/material/table";
import {RegistrationUserFormModal} from "../../features/form/registration-user-form/registration-user-form.modal";
import {MatTabsModule} from "@angular/material/tabs";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppModule} from "../../app.module";
import {ServiceModal} from "../services/service.modal";






@NgModule({
  declarations: [
    CreateReceptionistComponent,
    HomeReceptionistPageComponent,
    HomeManagementPageComponent,

  ],
  imports: [
    MatTableModule,
    RegistrationUserFormModal,
    MatTabsModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    BrowserAnimationsModule,
    ServiceModal,


  ],
  exports: [
    CreateReceptionistComponent,
    HomeReceptionistPageComponent,
    HomeManagementPageComponent,
  ],
})
export class ReceptionistModule {
}
