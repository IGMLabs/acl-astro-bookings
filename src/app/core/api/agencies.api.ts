import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Agency } from "./agency.interface";



@Injectable(
  {
    providedIn: 'root'
  }
)
export class AgenciesApi {

  // Declaramos que de agencies vendria un "parcial" de agencias
  // public agencies: Partial<Agency>[] = [
  // public agencies: Agency[] = [  !!! Ahora lo saco del bbdd json!!!
  //   {
  //     id: 'space-y',
  //     name: 'Space Y',
  //     range: 'Interplanetary',
  //     status: 'Active',
  //   },
  //   {
  //     id: 'green-origin',
  //     name: 'Green Origin',
  //     range: 'Orbital',
  //     status: 'Active',
  //   },
  //   {
  //     id: 'virgin-way',
  //     name: 'Virgin Way',
  //     range: 'Orbital',
  //     status: 'Pending',
  //   },
  // ];

  constructor( private http: HttpClient ) {

  }

  // Recupera de bbdd todas las agencias enviandolas como un observable
  public getAll() {
    return this.http.get<Agency[]>('http://localhost:3000/agencies');
  }

  // Recupera 1 agencia de bbdd enviandolas como un observable
  public getById(id: string) {
    return this.http.get<Agency>('http://localhost:3000/agencies/'+ id);
  }

  // Inserta en bbdd una agency
  public post( agency: Agency ){
      return this.http.post<Agency>('http://localhost:3000/agencies', agency);
  }

}
