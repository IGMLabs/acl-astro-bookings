import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { IdNameApi } from 'src/app/core/api/id-name.api';
import { IdName } from 'src/app/core/api/id-name.interface';
import { FormMessagesService } from 'src/app/core/services/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/services/forms/form-validations.service';
import { FormBase } from 'src/app/core/services/forms/form.base';
import { CommonService } from '../../core/services/common/common.service';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends FormBase implements OnInit {
  public ranges: IdName[];
  public statuses;

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private cs: CommonService,
    idNameApi: IdNameApi,
    private agenciesApi: AgenciesApi
  ) {
    super(fms);
    this.ranges = idNameApi.getRanges();
    this.statuses = idNameApi.getStatuses();
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),
    });
  }

  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.cs.getDashId(name);
    const newAgencyData = { id, name, range, status };
    console.warn('Send agency data ', newAgencyData);
    this.agenciesApi.post(newAgencyData);
  }

  ngOnInit(): void {}
}


