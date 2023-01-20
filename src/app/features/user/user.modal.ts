import {NgModule} from "@angular/core";
import {LoginModalComponent} from "./modals/login-modal/login-modal.component";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RegistrationModalComponent} from "./modals/registration-modal/registration-modal.component";



@NgModule({
  declarations: [
    LoginModalComponent,
    RegistrationModalComponent
  ],
  imports: [

    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,


  ],
  exports: [
   LoginModalComponent
  ],
})
export class UserModal {
}
