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
    super.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
   }


  writeValue(value: any): void {
    super.form.setValue({ email: value }, { emitEvent: false });
  }


  registerOnChange(changeCallBack: any): void {
    super.form.valueChanges.subscribe(changeCallBack);
  }


  registerOnTouched(touchedCallBack: any): void {
    this.touchedCallBack = touchedCallBack;
  }


  ngOnInit(): void {
  }

}
