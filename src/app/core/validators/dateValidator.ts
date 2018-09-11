import { ValidatorFn, AbstractControl } from "@angular/forms";

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const rightFormat = /\d{2,}\/\d{2,}\/\d{4,}/.test(control.value);

    return rightFormat ? null : { dateFormat: 'date should be in format dd/MM/yyyy' };
  };
}
