import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (
    !control.value.startsWith('https') ||
    (!control.value.includes('.com') && !control.value.includes('.es')) ||
    control.value.includes('muyoc.com') ||
    !control.value.includes('@')
  ) {
    return { validUrl: true };
  }
  return null;
}
