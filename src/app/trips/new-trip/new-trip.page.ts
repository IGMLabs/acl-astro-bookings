import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  public agencies$: Observable<Agency[]>;

  constructor(private tripsApi: TripsApi, agenciesApi: AgenciesApi, private router: Router) {

    this.agencies$ = agenciesApi.getAll$();
  }

  onSubmitSave(newTripData:Trip) {
    // Para que haga un post de verdad hay que meterle el .subscribe()

    this.tripsApi.post$(newTripData).subscribe(()=> {
      this.router.navigate(['/trips']);
    });
  }

  ngOnInit(): void {
  }

}
