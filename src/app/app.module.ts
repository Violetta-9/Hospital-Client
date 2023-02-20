import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderModule} from "./features/header/components/header.module";
import {UserModal} from "./features/user/user.modal";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ApiModule as AuthorizationApiModule, BASE_PATH as AUTHORIZATION_BASE_PATH} from "./core/services/swagger-gen/authorization"
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor} from "./core/interceptors/global-http-error-interceptor";

import {RegistrationUserFormModal} from "./features/form/registration-user-form/registration-user-form.modal";
import { AppRoutingModule } from './app-routing.module';
import { CreateDoctorComponent } from './pages/doctor/create-doctor/create-doctor.component';
import { CreateReceptionistComponent } from './pages/receptionist/create-receptionist/create-receptionist.component';
import { CreateOfficeComponent } from './pages/office/create-office/create-office.component';
import {OfficeModal} from "./pages/office/office.modal";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { CreateServiceComponent } from './pages/services/create-service/create-service.component';
import {ServiceModal} from "./pages/services/service.modal";
import { ProfileComponent } from './features/form/profile/profile.component';
import {ProfileModal} from "./features/form/profile/profile.modal";
import {
  FormUpdatePersonalInfoComponent
} from "./features/form/form-update-personal-info/form-update-personal-info.component";
import {FormUpdatePersonalInfoModal} from "./features/form/form-update-personal-info/form-update-personal-info.modal";
import {FormUpdateWorkInfoModal} from "./features/form/form-update-work-info/form-update-work-info-modal";







@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    CreateReceptionistComponent,




  ],
  imports: [
    BrowserModule,
    HeaderModule,
    OfficeModal,
    UserModal,
    RegistrationUserFormModal,
    NgbModule,
    AuthorizationApiModule,
    AppRoutingModule,
    ServiceModal,
    ProfileModal,
    FormUpdatePersonalInfoModal,
    FormUpdateWorkInfoModal




  ],
  providers: [
    {provide: AUTHORIZATION_BASE_PATH, useValue: environment.authorizationUri},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule  { }


