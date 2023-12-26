import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderModule} from "./features/header/components/header.module";
import {UserModal} from "./features/user/user.modal";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ApiModule as AuthorizationApiModule, BASE_PATH as AUTHORIZATION_BASE_PATH} from "./core/services/swagger-gen/authorization"
import {ApiModule as ProfileApiModal, BASE_PATH as PROFILE_BASE_PATH} from "./core/services/swagger-gen/profile"
import {ApiModule as OfficeApiModal, BASE_PATH as OFFICE_BASE_PATH} from "./core/services/swagger-gen/office"
import {ApiModule as SpecializationApiModal, BASE_PATH as SPECIALIZATION_BASE_PATH} from "./core/services/swagger-gen/specialization"
import {ApiModule as ServiceApiModal, BASE_PATH as SERVICE_BASE_PATH} from "./core/services/swagger-gen/service"
import {ApiModule as AppointmentApiModal, BASE_PATH as APPOINTMENT_BASE_PATH } from "./core/services/swagger-gen/appointment"
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor} from "./core/interceptors/global-http-error-interceptor";

import {RegistrationUserFormModal} from "./features/form/registration-user-form/registration-user-form.modal";
import { AppRoutingModule } from './app-routing.module';
import { CreateDoctorComponent } from './pages/doctor/create-doctor/create-doctor.component';
import { CreateReceptionistComponent } from './pages/receptionist/create-receptionist/create-receptionist.component';

import {OfficeModal} from "./pages/office/office.modal";

import {ServiceModal} from "./pages/services/service.modal";
import { ProfileComponent } from './features/form/profile/profile.component';
import {ProfileModal} from "./features/form/profile/profile.modal";
import {
  FormUpdatePersonalInfoComponent
} from "./features/form/form-update-personal-info/form-update-personal-info.component";
import {FormUpdatePersonalInfoModal} from "./features/form/form-update-personal-info/form-update-personal-info.modal";
import {FormUpdateWorkInfoModal} from "./features/form/form-update-work-info/form-update-work-info-modal";
import { CreateSpecializationComponent } from './pages/specialization/create-specialization/create-specialization.component';
import {SpecializationModal} from "./pages/specialization/specialization.modal";
import {AuthInterceptor} from "./core/interceptors/authorization-interseptor";
import { DoctorProfileComponent } from './pages/doctor/doctor-profile/doctor-profile.component';
import {DoctorProfileModal} from "./pages/doctor/doctor-profile/doctor-profile.modal";
import { ReceptionistProfileComponent } from './pages/receptionist/receptionist-profile/receptionist-profile.component';
import {ReceptionistProfileModal} from "./pages/receptionist/receptionist-profile/receptionist-profile.modal";
import { PatientProfileComponent } from './pages/patient/patient-profile/patient-profile.component';
import { HomeOfficePageComponent } from './pages/office/home-office-page/home-office-page.component';
import { OfficePageComponent } from './pages/office/office-page/office-page.component';
import { HomeDoctorPageComponent } from './pages/doctor/home-doctor-page/home-doctor-page.component';
import {MatTableModule} from "@angular/material/table";
import { HomeReceptionistPageComponent } from './pages/receptionist/home-receptionist-page/home-receptionist-page.component';
import { HomeSpecializationPageComponent } from './pages/specialization/home-specialization-page/home-specialization-page.component';
import { HomeServicesPageComponent } from './pages/services/home-services-page/home-services-page.component';
import {MatRadioModule} from "@angular/material/radio";
import { SpecializationPageComponent } from './pages/specialization/specialization-page/specialization-page.component';
import { ServicePageComponent } from './pages/services/service-page/service-page.component';
import { HomePatientPageComponent } from './pages/patient/home-patient-page/home-patient-page.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { DeleteConfirmComponent } from './shared/modals/delete-confirm/delete-confirm.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ModalDialogModal} from "./shared/modals/modal-dialog.modal";
import { CreatePatientComponent } from './pages/patient/create-patient/create-patient.component';
import {PatientModule} from "./pages/patient/patient.module";
import { HomeManagementPageComponent } from './pages/receptionist/home-management-page/home-management-page.component';
import {ReceptionistModule} from "./pages/receptionist/receptionist.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgSelectModule} from "@ng-select/ng-select";
import { DoctorFilterComponent } from './features/doctors/doctor-filter/doctor-filter.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HomeAppointmentPageComponent } from './home-appointment-page/home-appointment-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ResultPageComponent } from './result-page/result-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { RescheduleAppointmenDialog } from './reschedule-appointment/reschedule-appointment.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicePreViewComponent } from './service-pre-view/service-pre-view.component';
import { CartComponent } from './cart/cart.component';
import { DoctorsPreViewComponent } from './doctors-pre-view/doctors-pre-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    HomeDoctorPageComponent,
    HomeServicesPageComponent,
    DoctorFilterComponent,
    CreateAppointmentComponent,
    HomeAppointmentPageComponent,
    ResultPageComponent,
    RescheduleAppointmenDialog,
    AboutUsComponent,
    HomePageComponent,
    ServicePreViewComponent,
    CartComponent,
    DoctorsPreViewComponent


  ],
  imports: [

    BrowserModule,
    HeaderModule,
    OfficeModal,
    UserModal,
    RegistrationUserFormModal,
    NgbModule,
    DoctorProfileModal,
    AuthorizationApiModule,
    ServiceApiModal,
    ProfileApiModal,
    OfficeApiModal,
    SpecializationApiModal,
    AppointmentApiModal,
    AppRoutingModule,
    ServiceModal,
    ReceptionistProfileModal,
    FormUpdatePersonalInfoModal,
    FormUpdateWorkInfoModal,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ModalDialogModal, PatientModule, ReceptionistModule, MatExpansionModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgSelectModule, MatButtonToggleModule, MatStepperModule, MatDatepickerModule, MatSlideToggleModule, TranslateModule, MatCardModule
  ],
  providers: [
    {provide: AUTHORIZATION_BASE_PATH, useValue: environment.authorizationUri},
    {provide: PROFILE_BASE_PATH, useValue: environment.profileUri},
    {provide: OFFICE_BASE_PATH, useValue: environment.officeUri},
    {provide: SPECIALIZATION_BASE_PATH, useValue: environment.specializationUri},
    {provide: SERVICE_BASE_PATH, useValue: environment.serviceUri},
    {provide: APPOINTMENT_BASE_PATH, useValue: environment.appointmentUri},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  exports: [
    HomeServicesPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule  { }


