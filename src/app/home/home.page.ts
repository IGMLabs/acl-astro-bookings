import { Component, OnInit } from '@angular/core';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';
import { AgenciesApi } from '../core/api/agencies.api';
import { Booking } from '../core/api/booking.interface';
import { BookingsApi } from '../core/api/bookings.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

tripsPadre: Trip[] = [];
agenciesPadre: Agency[] = [];
bookingsPadre: Booking[] = [];

public reloading = false;


public reload(lista: string) {
  this.reloading=true;
  console.log('Reloading.....'+lista);
}

  constructor( tripsApi:TripsApi, agenciesApi:AgenciesApi, bookingsApi:BookingsApi ) {

      tripsApi.getAll$().subscribe( (data) => {
        this.tripsPadre = data;
      });
      agenciesApi.getAll$().subscribe( (data) => {
        this.agenciesPadre = data;
      });
      bookingsApi.getAll$().subscribe( (data) => {
        this.bookingsPadre = data;
      });

   }

  ngOnInit(): void {
  }

}
