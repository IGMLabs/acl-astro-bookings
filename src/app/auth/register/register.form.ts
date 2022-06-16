import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/services/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/services/forms/form-validations.service';
import { FormBase } from 'src/app/core/services/forms/form.base';
import { AuthApi } from '../auth.api';
import { Register } from '../../core/api/register.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm extends FormBase implements OnInit {

  @Output() public save = new EventEmitter<Register>();

  constructor(formBuilder: FormBuilder, fvs: FormValidationsService, fms: FormMessagesService, private aa: AuthApi) {
    super(fms)
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      acceptTerms: new FormControl(false,[Validators.requiredTrue]),
    }, {
      validators: [fvs.passwordMatch]
    });
  }


  public onSave() {
    const {name, email, password} = this.form.value;
    const register = {name, email:email.email, password };
    console.warn('Send Register', register);
    // this.aa.postRegister$(newRegister).subscribe();
    this.save.emit(register);
  }



  ngOnInit(): void {
  }
}
