import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormMessagesService } from '../../../core/services/forms/form-messages.service';

@Component({
  selector: 'app-input-template-control',
  templateUrl: './input-template.control.html',
  styleUrls: ['./input-template.control.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTemplateControl),
      multi: true,
    },
  ],
})
export class InputTemplateControl
       implements OnInit, ControlValueAccessor {

  @Input() public form!: FormGroup ;
  @Input() public formControlName: string = '';
  @Input() public inputType: string = 'text';
  @Input() public label: string = 'Enter data';
  @Input() public placeholder: string = '...';


  public touchedCallBack : any;
  public changeCallBack : any;
  public value: any;


  constructor(private fms: FormMessagesService) {   }


  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }


  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }


  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }


  protected getControl(controlName: string): AbstractControl | null {
    return this.fms.getControl(this.form, controlName);
  }


  public onKeyUp(event: any){
    const controlValue = event.target.value;
    this.value = controlValue;
    this.changeCallBack(this.value);
    this.touchedCallBack();
  }

  public onChecked(event: any){
    const controlValue = event.target.value;
    const controlChecked = event.target.checked;

    this.value = controlValue;
    this.changeCallBack(controlChecked);
    this.touchedCallBack();
  }

  writeValue(value: any): void {
    this.value = value;
  }


  registerOnChange(changeCallBack: any): void {
    this.changeCallBack = changeCallBack;
  }


  registerOnTouched(touchedCallBack: any): void {
    this.touchedCallBack = touchedCallBack;
  }


  ngOnInit(): void {
  }

}
