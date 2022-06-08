import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/api/trip.interface';
import { FormMessagesService } from 'src/app/core/services/forms/form-messages.service';
import { TripsApi } from '../../../core/api/trips.api';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css']
})
export class TripsList implements OnInit {

  public trips: Trip[];
  public reloading = false;


  public reload(lista: string) {
    this.reloading = true;
    console.log('Reloading.....' + lista);
  }


  constructor(tripsApi: TripsApi,
    fms: FormMessagesService,
  ) {
    // super(fms);
    this.trips = tripsApi.getAll();

  }



  public getTripsLength(){
    return this.trips.length;
    }

  public getClassForStatus(status: string) {
    if (status === 'Confirmed') {
      return 'green';
    }
    return 'orange';
  }

  public getClassForPlaces(places: number) {
    if (places === 0) return 'sold-out';
    if (places < 8) return 'few-places';
    return '';
  }

  ngOnInit(): void {
  }

}
