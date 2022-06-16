import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
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
  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor( private tripsApi: TripsApi ) {
    this.trips$ = this.tripsApi.getAll$();

    this.trips$ = this.search$.pipe(
      ///////////////Aplanador asincrono
      //map(searchTerm => this.agenciesApi.getByText$(searchTerm))
      //// El switchmap Substituye el termino de busqueda por el ultimo resultado de la llamada
      switchMap(searchTerm=> this.tripsApi.getByText$(searchTerm))
      //// ConcatMap Esperaria a completar cada una de las peticiones e iria encadenandolas una tras otra
      // concatMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //// exhaustMap Omite las peticiones que recibe mientras no complete la que esta haciendo, olvidandose de ellas.(solo una peticion en curso)
      //exhaustMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //// Mergemap devuelve todas las peticiones intentando hacerlas todas a la vez finalizando cuando envie la ultima.
     );
     }



  onReload(){
    this.search$.next('');
  }

  onSearch(searchTerm: string){
    console.log('Pasando', searchTerm);
    // Aqui emitimos el valor del search
    //this.search$.next(searchTerm);
    this.trips$ = this.tripsApi.getByText$(searchTerm);
  }

  ngOnInit(): void {

  }

}
