import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTripRoutingModule } from './new-trip-routing.module';
import { NewTripForm } from './new-trip.form';
import { NewTripPage } from './new-trip.page';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    NewTripForm,
    NewTripPage
  ],
  imports: [
    CommonModule,
    NewTripRoutingModule,
    SharedModule
  ]
})
export class NewTripModule { }
