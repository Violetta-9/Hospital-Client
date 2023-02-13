import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateDoctorComponent} from "./pages/doctor/create-doctor/create-doctor.component";
import {CreateReceptionistComponent} from "./pages/receptionist/create-receptionist/create-receptionist.component";
import {CreateOfficeComponent} from "./pages/office/create-office/create-office.component";
import {CreateServiceComponent} from "./pages/services/create-service/create-service.component";

const routes: Routes = [
  { path: 'doctor/create', component: CreateDoctorComponent },
  { path: 'receptionist/create', component: CreateReceptionistComponent },
  { path: 'office/create', component: CreateOfficeComponent },
  { path: 'service/create', component: CreateServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
