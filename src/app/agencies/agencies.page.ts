import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { ActivatedRoute } from '@angular/router';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css'],
})
export class AgenciesPage implements OnInit {
  public agencies$: Observable<Agency[]>;
  public trips$!: Observable<Trip[]>;
  private search$: BehaviorSubject<string> = new BehaviorSubject('');

 // public error: boolean = false;
  constructor(private agenciesApi: AgenciesApi,
              private route: ActivatedRoute,
              private tripsApi: TripsApi) {
                this.agencies$ = this.search$.pipe(
                  // map((searchTerm) => this.agenciesApi.getByText$(searchTerm))
                  switchMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
                  // concatMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
                  // exhaustMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
                );

  //  const q = this.route.snapshot.queryParamMap.get('q');
  //  console.log(q);

  this.route.queryParamMap.subscribe((queryParamMap) => {
    const q = queryParamMap.get('q');
    this.trips$ = this.tripsApi.getByText$(q);
    console.log(q);
  } );

  this.trips$ = this.route.queryParamMap.pipe(
        map((qpm) => qpm.get('q')),
        switchMap((agencyId) => this.tripsApi.getByText$(agencyId))

  )}



  onReload() {
    this.search$.next('');
  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
  }

  ngOnInit(): void {}
}
