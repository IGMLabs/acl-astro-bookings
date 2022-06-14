import { Component, OnInit } from '@angular/core';
import { AbstractControl,
         FormBuilder,
         FormControl,
         Validators } from '@angular/forms';
import { FormMessagesService } from '../core/services/forms/form-messages.service';
import { FormBase } from '../core/services/forms/form.base';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css']
})
export class ContactForm extends FormBase implements OnInit {

  constructor(
              formBuilder:FormBuilder,
              fms: FormMessagesService
              ) {

    // Form base
    super(fms);

    // Inicializamos el formulario de contacto
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl(''),
      message: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    });
  }


  public getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }


  public onSave() {
    const contactOriginal = this.form.value;
    console.warn('contactOriginal', contactOriginal);
    const contactApi = {
      ...contactOriginal,
      email: contactOriginal.email.email,
    };
    console.warn('contactApi', contactApi);
  }

  ngOnInit(): void {

  }

}
