import { ValidatorFn, AbstractControl } from "@angular/forms";

export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const rightFormat = /\d+/.test(control.value);

    return rightFormat ? null : { numberFormat: 'value should be a number only' };
  };
}
