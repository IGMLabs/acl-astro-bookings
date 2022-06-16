import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/services/forms/form-messages.service';

@Component({
  selector: 'app-select-template-control',
  templateUrl: './select-template.control.html',
  styleUrls: ['./select-template.control.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectTemplateControl),
      multi: true, // Para poder usar el mismo token en varios sitios(NG_VALUE_ACCESSOR)
    },
  ],
})
export class SelectTemplateControl
       implements OnInit, ControlValueAccessor {

  @Input() public form!: FormGroup ;
  @Input() public formControlName: string = '';
  @Input() public inputType: string = 'radio';
  @Input() public placeholder: string = '...';
  @Input() public label!: string[] ;

  // public label!: string[] ;

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


  writeValue(value: any): void {
    this.value = value;
  }


  registerOnChange(changeCallBack: any): void {
    this.changeCallBack = changeCallBack;
  }


  registerOnTouched(touchedCallBack: any): void {
    this.touchedCallBack = touchedCallBack;
  }


  public radioSelected(event: any){
    const controlValue    = event.target.value;
    const controlSelected = event.target.selected;

    this.value = controlValue;
    this.changeCallBack(controlSelected);
    this.touchedCallBack();
  }


  // public onChecked(event: any){
  //   const controlValue = event.target.value;
  //   const controlChecked = event.target.checked;

  //   this.value = controlValue;
  //   this.changeCallBack(controlChecked);
  //   this.touchedCallBack();
  // }


  // Select o radiobutton??
  // public onSelected(event: any){
  //   const controlValue = event.target.value;
  //   const controlSelected = event.target.selected;

  //   this.value = controlValue;
  //   this.changeCallBack(controlSelected);
  //   this.touchedCallBack();
  // }


  ngOnInit(): void {
  }

}
