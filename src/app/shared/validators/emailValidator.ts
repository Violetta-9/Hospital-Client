import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function emailValidators(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {


    let emailRgEx: RegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
    let valid =
      !control.value || emailRgEx.test(control.value)
    return valid ? null : { email: true }

  };
}
