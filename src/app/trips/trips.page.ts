import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  // selector: 'app-trips', se borra porque no se llega a usar
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css']
})
export class TripsPage implements OnInit {

  //public tripsPadre!: Trip[];
  public trips$!: Observable<Trip[]>;
  public error: boolean = false;

  constructor( private tripsApi: TripsApi ) {
    this.trips$ = this.tripsApi.getAll$();
  }

  // onReload(){
  //   this.trips$ = this.tripsApi.getAll$()
  //   this.error= true;
  // }

  onReload(){
    this.tripsApi.getAll$().subscribe(
         ( data ) => {
           // this.agenciesPadre = data;
    },
         ( err )  => {
            console.log('hay un fallo', err.message);
            this.error = true;
  }
    );
  }


  ngOnInit(): void {
  }

}
