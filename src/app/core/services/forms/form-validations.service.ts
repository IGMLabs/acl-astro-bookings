import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {


  constructor() { }



  public passwordMatch(form: AbstractControl) : ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (!password || !confirmPassword) {
      return {
        passwordMatch: 'No passwords provided'
      };
    }
    if (password.value !== confirmPassword.value){
      return {
        passwordMatch: "Passwords don't match"
      };
    }
    return null;
  }



  // public compareDates(form: AbstractControl): ValidationErrors | null {
  //   const dateForm = form.get('start_date');
  //   const dateTo = form.get('end_date');
  //   console.log('hola');
  //   if (!dateForm || !dateTo) {
  //     return {
  //       compareDates: 'Dates dont exist',
  //     };
  //   }
  //   if (dateForm.value > dateTo.value) {
  //     return {
  //       compareDates: 'Dates wrong',
  //     };
  //   }
  //   return null;
  // }


  public compareDates(form: AbstractControl) : ValidationErrors | null {
    const start = form.get('start_date')?.value;
    const end = form.get('end_date')?.value;
    if (!start || !end) {
      return {
        compareDates: 'No dates provided'
      };
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    const today = new Date();

    if (today > startDate){
      return {
        compareDates: "You can't travel to the past"
      };
    }
    if (endDate < startDate){
      return {
        compareDates: "Travel to the past it's not posible yet"
      };
    }
    return null;
  }

  controlDate(control: AbstractControl): ValidationErrors | null {
    const date = control.value;
    const dateTo = new Date();
    if (!date) {
      return {
        dateControl: 'Dates dont exist',
      };
    }
    const dateDate= new Date(date);
    if (dateDate < dateTo) {
      return {
        dateControl: 'Dates wrong',
      };
    }
    return null;
  }

}

