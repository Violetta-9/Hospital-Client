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
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {ToastrModule} from "ngx-toastr";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    LoginModalComponent,
    RegistrationModalComponent
  ],
    imports: [
        MatNativeDateModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgbModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDatepickerModule,
        TranslateModule,


    ],
  exports: [
   LoginModalComponent
  ],
})
export class UserModal {
}
