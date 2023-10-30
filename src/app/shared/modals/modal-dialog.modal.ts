import {NgModule} from "@angular/core";
import {DeleteConfirmComponent} from "./delete-confirm/delete-confirm.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";




@NgModule({
  declarations: [
   DeleteConfirmComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule


  ],
  exports: [
    DeleteConfirmComponent
  ],
})
export class ModalDialogModal {
}
