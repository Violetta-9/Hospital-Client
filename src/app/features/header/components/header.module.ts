import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LoginModalComponent} from "../../user/modals/login-modal/login-modal.component";
import {MatInputModule} from "@angular/material/input";




@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    RouterModule,
    NgbModule,


  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
