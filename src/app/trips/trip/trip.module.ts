import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripPage } from './trip.page';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TripPage
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    SharedModule
  ]
})
export class TripModule { }
