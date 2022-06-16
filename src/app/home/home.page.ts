import { Component, OnInit } from '@angular/core';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';
import { AgenciesApi } from '../core/api/agencies.api';
import { Booking } from '../core/api/booking.interface';
import { BookingsApi } from '../core/api/bookings.api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

tripsPadre$   : Observable<Trip[]>;
agenciesPadre$: Observable<Agency[]>;
bookingsPadre$: Observable<Booking[]>;

public reloading = false;

constructor( private tripsApi   :TripsApi,
             private agenciesApi:AgenciesApi,
             private bookingsApi:BookingsApi ) {

  this.agenciesPadre$ = this.agenciesApi.getAll$();
  this.tripsPadre$    = this.tripsApi.getAll$();
  this.bookingsPadre$ = this.bookingsApi.getAll$();
}

public onReload() {
  this.agenciesPadre$ = this.agenciesApi.getAll$();
  this.tripsPadre$    = this.tripsApi.getAll$();
  this.bookingsPadre$ = this.bookingsApi.getAll$();
}

  ngOnInit(): void {
  }

}
