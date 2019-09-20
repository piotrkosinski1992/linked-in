import { AbstractControl, FormGroup } from '@angular/forms';

//TODO doesn't work, one letter delay
export function ValidateRepeatedPassword(control: FormGroup) {
  if (control.parent == undefined || control.parent.value.password === undefined) {
    console.log('table not found');
    return {
      validateRepeatedPassword: {
        valid: false
      }
    };
  } else {
    console.log(control.parent.value.password);
    console.log(control.parent.value.repeatPassword);
    return control.parent.value.password === control.parent.value.repeatPassword ? null : {
      validateRepeatedPassword: {
        valid: false
      }
    };
  }
}
