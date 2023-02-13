import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export function passwordValidator(form:AbstractControl): ValidationErrors {
  let pass=form.get('password')

  let confPass= form.get('passwordConfirm')

  if (pass.value==confPass.value) {
    removeErrors(pass);
    removeErrors(confPass);
    console.log("Pass"+pass.errors);
    console.log("Conf"+confPass.errors)
  }
  else {
    pass.setErrors({ ...pass.errors, 'notSame': true });
    confPass.setErrors({ ...pass.errors, 'notSame': true });

  }
  return null;
}

function removeErrors(control: AbstractControl) {
  if(!control?.errors){
    console.log(1.1+control.value)
    return;
  }
  if(control?.errors && control.hasError('notSame')){
    console.log(2.1+control.value)
    delete control?.errors['notSame']

  }
  if(!control?.errors || Object.keys(control?.errors).length==0){
    console.log(3.1+control.value)
    control?.setErrors(null);
  }

}
