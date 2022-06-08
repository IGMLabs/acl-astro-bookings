import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Trip } from 'src/app/core/api/trip.interface';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css']
})
export class TripsList implements OnInit {

  // Aqui se indica qque los trips se reciben del padre(trips.page.ts)
  @Input() tripsHijo: Trip[] = [];

  // Aqui creamos el nuevo evento para enviarle al padre.
  @Output() private reload = new EventEmitter();


  // El evento reload lo lanzamos al ejecutar esta funcion
  public onReloadClick() {
    this.reload.emit();
  }

  public getTripsLength(){
    return this.tripsHijo.length;
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
