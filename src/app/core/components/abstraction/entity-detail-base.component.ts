import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ComponentBase} from "./component-base";


@Component({
  template: ''
})
export abstract class EntityDetailsBaseComponent extends ComponentBase{
  public submitted: boolean = false;

  public detailsForm: FormGroup = new FormGroup({});



  get f() {

    return this.detailsForm.controls;

  }
  protected validateAllFormFields(formGroup: FormGroup): boolean {
    if (!formGroup || !formGroup.controls) {
      return false;
    }

    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
    return formGroup.valid;
  }

  protected abstract saveInternal(): any;

  public save(): void {

    if (!this.validate()) {

      return
    }

    this.saveInternal();
  }

  public resetForm(resetSubmitted: boolean = false) {
    this.detailsForm.reset();

    this.submitted = !resetSubmitted;
  }


  public validate(): boolean {
    this.submitted = true;

    return (this.validateAllFormFields(this.detailsForm) && this.detailsForm.valid);
  }

}
