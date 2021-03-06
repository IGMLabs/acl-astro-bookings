import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { FormMessagesService } from 'src/app/core/services/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/services/forms/form-validations.service';
import { FormBase } from 'src/app/core/services/forms/form.base';
import { CommonService } from '../../core/services/common/common.service';
import { Agency } from 'src/app/core/api/agency.interface';
import { Trip } from 'src/app/core/api/trip.interface';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css']
})
export class NewTripForm extends FormBase implements OnInit {

  // public start_date = 0;

  @Input() public agenciesHijo: Agency[] = [] ;
  @Output() public save = new EventEmitter<Trip>();

  constructor(
              formBuilder: FormBuilder,
              fvs: FormValidationsService,
              fms: FormMessagesService,
              private cs: CommonService
              ) {

    // Form base
    super(fms);

    this.form = formBuilder.group({
      agency: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      places: new FormControl('', [Validators.required, Validators.min(2), Validators.max(10)]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      flightPrice: new FormControl('', [Validators.required, Validators.min(1000000), Validators.max(10000000)]),

    }, {
      validators: [fvs.compareDates]
    });
  }

  public onSubmitClick() {
    const { agency, destination, places, start_date, end_date, flightPrice } = this.form.value;
    const id = this.cs.getDashId(agency + "-" + destination);
    const newTripData = { id, agency, destination, places, start_date, end_date, flightPrice };

    this.save.emit(newTripData);

  }

  ngOnInit(): void { }
}
