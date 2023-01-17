import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule,
    NgbModule,


  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule {
}
