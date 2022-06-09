import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Agency } from "./agency.interface";
import { Observable } from 'rxjs';



@Injectable(
  {
    providedIn: 'root'
  }
)
export class AgenciesApi {

  constructor( private http: HttpClient ) {

  }

  // Recupera de bbdd todas las agencias enviandolas como un observable
  public getAll$() : Observable<Agency[]> {
    return this.http.get<Agency[]>('http://localhost:3000/agencies');
  }

  // Recupera 1 agencia de bbdd enviandolas como un observable
  public getById$(id: string): Observable<Agency> {
    return this.http.get<Agency>('http://localhost:3000/agencies/'+ id);
  }

  // Inserta en bbdd una agency
  public post$( agency: Agency ){
      return this.http.post('http://localhost:3000/agencies', agency);
  }

}
