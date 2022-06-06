import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm implements OnInit {

// public form!: FormGroup;  // opcion 1 de crear una propiedad publica sin inicializar.
public form : FormGroup;

constructor( formBuilder:FormBuilder ) {
  // Inicializamos el formulario de contacto
  this.form = formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    confirmaPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    aceptaTerms: new FormControl (false, [Validators.requiredTrue]),
  },
  // Configuracion grupal a continuacion
  {
    // no la inicializo, solo le apunto a la funcion
    validators:[this.passIguales],
  });
}

// le pasamos el formulario con AbstractControl en este punto.
private passIguales(form: AbstractControl): ValidationErrors | null{
  const password = form.get('password');
  const confirmarPassword = form.get('confirmaPassword');
  if (!password || !confirmarPassword){
    return {
      confirmarPassword: 'Debes introducir la password',
    };
  }
  if (password.value !== confirmarPassword.value) {
      return {
        confirmarPassword: 'Las password no son iguales',
     };
  }
  return null;
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


public getPasswordMatchMessage(){
  const errors = this.form.errors;
  if(!errors) return'';
  if(errors['confirmarPassword']) return errors['confirmarPassword'];
  return '';
}

public getControl(controlName: string): AbstractControl | null {
  return this.form.get(controlName);
}



public onSave(){
    const { name, email, password } = this.form.value;
    const register = { name, email, password };
    console.warn('Send register', register);
}


ngOnInit(): void {

}
}
