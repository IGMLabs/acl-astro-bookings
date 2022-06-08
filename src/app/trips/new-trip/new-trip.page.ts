import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';

@Component({
  //selector: 'app-new-trip', Se borra porque no se llega a usar
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.css']
})
export class NewTripPage implements OnInit {

  public agencies: Agency[] ;

  constructor(private tripsApi: TripsApi, private agenciesApi: AgenciesApi, private router: Router) {

    this.agencies = agenciesApi.getAll();
  }

  onSubmitClick(newTripData:Trip) {
    this.tripsApi.post(newTripData);
  }

  ngOnInit(): void {
  }

}
