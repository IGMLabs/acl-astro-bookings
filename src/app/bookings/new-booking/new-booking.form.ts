import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from '../../core/api/trip.interface';
import { Booking } from '../../core/api/booking.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/services/forms/form-messages.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { FormBase } from '../../core/services/forms/form.base';

@Component({
  selector: 'app-new-booking-form',
  templateUrl: './new-booking.form.html',
  styleUrls: ['./new-booking.form.css']
})
export class NewBookingForm extends FormBase implements OnInit {
// public start_date = 0;

@Input() public tripsHijo: Trip[] = [] ;
@Output() public save = new EventEmitter<Booking>();

constructor(
            formBuilder: FormBuilder,
            fms: FormMessagesService,
            private cs: CommonService
            ) {

  // Form base
  super(fms);


  this.form = formBuilder.group({
    tripId: new FormControl('', [Validators.required]),
    passengerName: new FormControl('', [Validators.required]),
    date: new FormControl(new Date().toLocaleDateString('en-US'), [Validators.required]),
    luggageKilos: new FormControl('', [Validators.required]),
    hasPremiumFoodPrice: new FormControl(false, [Validators.required]),

  });
}

public onSubmitClick() {
  const { tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice } = this.form.value;
  const id = this.cs.getDashId(tripId + "-" + passengerName);
  const newBookingData = { id, tripId,passengerName, date, luggageKilos, hasPremiumFoodPrice };

  this.save.emit(newBookingData);

}

ngOnInit(): void { }
}

