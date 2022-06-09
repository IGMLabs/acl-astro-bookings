import { Component, OnInit } from '@angular/core';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';
import { AgenciesApi } from '../core/api/agencies.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

tripsPadre: Trip[] = [];
agenciesPadre: Agency[] = [];

public reloading = false;


public reload(lista: string) {
  this.reloading=true;
  console.log('Reloading.....'+lista);
}

  constructor( tripsApi:TripsApi, agenciesApi:AgenciesApi ) {
      tripsApi.getAll$().subscribe( (data) => {
        this.tripsPadre = data;
      });
      agenciesApi.getAll$().subscribe( (data) => {
        this.agenciesPadre = data;
      })

   }

  ngOnInit(): void {
  }

}
