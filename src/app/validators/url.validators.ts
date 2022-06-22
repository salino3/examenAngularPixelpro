import { AbstractControl } from '@angular/forms';


export function Validateweb(control: AbstractControl) {
  if (
   
    !control.value.startsWith('www.') ||
    (!control.value.includes('.com') && !control.value.includes('.es')) ||
    control.value.includes('muyoc.com') 
  ) {
    return { validUrl: true };
  }
  return null;
}

export function ValidateUrl(control: AbstractControl) {
  if (
    
    (!control.value.includes('.com') && !control.value.includes('.es')) ||
    control.value.includes('muyoc.com') ||
    !control.value.includes('@')
  ) {
    return { validUrl: true };
  }
  return null;
}