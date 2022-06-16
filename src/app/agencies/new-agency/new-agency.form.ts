import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { Agency } from 'src/app/core/api/agency.interface';
import { IdName } from 'src/app/core/api/id-name.interface';
import { FormMessagesService } from 'src/app/core/services/forms/form-messages.service';
import { FormBase } from 'src/app/core/services/forms/form.base';
import { CommonService } from '../../core/services/common/common.service';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends FormBase implements OnInit {
  @Input() public ranges: IdName[] = [];
  @Input() public statuses: string[] = [];
  @Output() public save = new EventEmitter<Agency>();

  public label: string[] = ['pending','active'];

  constructor(
    formBuilder: FormBuilder,
    fms: FormMessagesService,
    private cs: CommonService,
  ) {
    super(fms);

    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0], [Validators.required]),
    });
  }

  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.cs.getDashId(name);
    const newAgencyData = { id, name, range, status };
    console.warn('Send agency data ', newAgencyData);
    this.save.emit(newAgencyData);
  }

  ngOnInit(): void {}
}


