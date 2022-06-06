import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

interface Contact {
  name: string;
  email:string;
  message:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // public form!: FormGroup;  // opcion 1 de crear una propiedad publica sin inicializar.
  public form : FormGroup;

  constructor( formBuilder:FormBuilder ) {
    // Inicializamos el formulario de contacto
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    });
  }

  public hasErrors( controlName:string ):boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.invalid;
  }


  public mustShowMessage(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.touched && control.invalid;
  }

  public getErrorMessage(controlName:string) : string {
    const control = this.getControl(controlName);
    if (!control) return '';
    if(!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    // indicamos si ha pasado la validacion de required
    errorMessage +=errors['required'] ? '🎀 Campo Requerido' : '';
    errorMessage +=errors['email'] ? '🎀 Campo Requerido' : '';
    errorMessage +=errors['minlength'] ? `🎀 El campo debe tener almenos ${errors['minlength'].requiredMinLength} caracteres` : '';
    errorMessage +=errors['maxlength'] ? `🎀 El campo debe tener maximo ${errors['maxlength'].requiredMaxLength} caracteres` : '';
    return errorMessage;
  }


  public getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }



  public onSave(){
      const contact = this.form.value;
      console.warn('Send contact message', contact);
  }


  ngOnInit(): void {

  }

}
