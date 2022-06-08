import { Component, OnInit } from '@angular/core';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  // selector: 'app-trips', se borra porque no se llega a usar
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css']
})
export class TripsPage implements OnInit {

  public tripsPadre!: Trip[];

  constructor( private tripsApi: TripsApi ) {
    this.tripsPadre = tripsApi.getAll();
  }

  onReload(){
    this.tripsPadre = this.tripsApi.getAll()
  }

  ngOnInit(): void {
  }

}
