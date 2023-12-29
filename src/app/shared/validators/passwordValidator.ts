import {AbstractControl, ValidationErrors} from "@angular/forms";


export function passwordValidator(form:AbstractControl): ValidationErrors {
  let pass=form.get('password')

  let confPass= form.get('passwordConfirm')

  if (pass.value==confPass.value) {
    removeErrors(pass);
    removeErrors(confPass);

  }
  else {
    pass.setErrors({ ...pass.errors, 'notSame': true });
    confPass.setErrors({ ...pass.errors, 'notSame': true });

  }
  return null;
}

function removeErrors(control: AbstractControl) {
  if(!control?.errors){
    return;
  }
  if(control?.errors && control.hasError('notSame')){
    delete control?.errors['notSame']

  }
  if(!control?.errors || Object.keys(control?.errors).length==0){
    control?.setErrors(null);
  }

}
