import { Component, forwardRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/services/forms/form-messages.service';
import { FormBase } from 'src/app/core/services/forms/form.base';

@Component({
  selector: 'app-email-control',
  templateUrl: './email.control.html',
  styleUrls: ['./email.control.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => EmailControl ),
      multi: true,
    }
  ]
})
export class EmailControl extends FormBase implements OnInit, ControlValueAccessor {

  public formControlName: string = 'email';
  public touchedCallBack : any;

  constructor(fms: FormMessagesService) {

    super(fms);
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
   }

   writeValue(value: any): void {
    //  super.form.get('email')?.setValue(value);
     this.form.setValue({email:value}, {emitEvent: false});
    }
    registerOnChange(changeCallback: any): void {
      this.form.valueChanges.subscribe(changeCallback);
    }
    registerOnTouched(touchedCallBack: any): void {
     this.touchedCallBack = touchedCallBack;
    }

    ngOnInit(): void {
    }

  }
