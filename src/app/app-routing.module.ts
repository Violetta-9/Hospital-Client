import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateDoctorComponent} from "./pages/doctor/create-doctor/create-doctor.component";
import {CreateReceptionistComponent} from "./pages/receptionist/create-receptionist/create-receptionist.component";
import {CreateOfficeComponent} from "./pages/office/create-office/create-office.component";
import {CreateServiceComponent} from "./pages/services/create-service/create-service.component";
import {ProfileComponent} from "./features/form/profile/profile.component";
import {
  CreateSpecializationComponent
} from "./pages/specialization/create-specialization/create-specialization.component";
import {DoctorProfileComponent} from "./pages/doctor/doctor-profile/doctor-profile.component";
import {ReceptionistProfileComponent} from "./pages/receptionist/receptionist-profile/receptionist-profile.component";
import {PatientProfileComponent} from "./pages/patient/patient-profile/patient-profile.component";
import {HomeOfficePageComponent} from "./pages/office/home-office-page/home-office-page.component";
import {OfficePageComponent} from "./pages/office/office-page/office-page.component";
import {HomeDoctorPageComponent} from "./pages/doctor/home-doctor-page/home-doctor-page.component";
import {
  HomeReceptionistPageComponent
} from "./pages/receptionist/home-receptionist-page/home-receptionist-page.component";
import {
  HomeSpecializationPageComponent
} from "./pages/specialization/home-specialization-page/home-specialization-page.component";
import {HomeServicesPageComponent} from "./pages/services/home-services-page/home-services-page.component";
import {SpecializationPageComponent} from "./pages/specialization/specialization-page/specialization-page.component";
import {ServicePageComponent} from "./pages/services/service-page/service-page.component";
import {HomePatientPageComponent} from "./pages/patient/home-patient-page/home-patient-page.component";
import {CreatePatientComponent} from "./pages/patient/create-patient/create-patient.component";
import {HomeManagementPageComponent} from "./pages/receptionist/home-management-page/home-management-page.component";
import {CreateAppointmentComponent} from "./create-appointment/create-appointment.component";
const itemRoutes: Routes = [
  { path: 'page/service', component: HomeServicesPageComponent },
  { path: 'service/create', component: CreateServiceComponent },

  { path: 'page/office', component: HomeOfficePageComponent },
  { path: 'office/create', component: CreateOfficeComponent },

  { path: 'receptionist/profile', component: ReceptionistProfileComponent },
  { path: 'page/receptionist', component: HomeReceptionistPageComponent },
  { path: 'receptionist/create', component: CreateReceptionistComponent },

  { path: 'page/doctor', component: HomeDoctorPageComponent },
  { path: 'doctor/profile', component: DoctorProfileComponent },
  { path: 'doctor/create', component: CreateDoctorComponent },

  { path: 'page/patient', component: HomePatientPageComponent },
  { path: 'patient/profile', component: PatientProfileComponent },
  { path: 'patient/create', component: CreatePatientComponent },

  { path: 'page/specialization', component: HomeSpecializationPageComponent },
  { path: 'specialization/create', component: CreateSpecializationComponent },


]

const routes: Routes = [


  { path: 'doctor/profile', component: DoctorProfileComponent },
  { path: 'appointment', component: CreateAppointmentComponent },
  { path: 'receptionist/profile', component: ReceptionistProfileComponent },
  { path: 'management', component: HomeManagementPageComponent,children:itemRoutes },

  { path: 'office', component: OfficePageComponent },
  { path: 'specialization', component: SpecializationPageComponent },
  { path: 'service', component: ServicePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
