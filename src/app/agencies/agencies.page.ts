import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  // selector: 'app-agencies', Se borra porque no se llega a usar.
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage implements OnInit {

//public agenciesPadre!: Agency[];
public agencies$!: Observable<Agency[]>;
public error: boolean = false;

// constructor( private agenciesApi: AgenciesApi ) {
//   agenciesApi.getAll().subscribe(
//       ( data ) => {
//           this.agenciesPadre = data;
//   },
//       ( err )  => {
//           console.log('hay un fallo', err.message);
//           this.error = true;
//   }
//   );
// }

//  private subscriptor = {
//    next : (data : Agency[]) => {
//     //this.agenciesPadre = data;
//    },
//    error: (err: Error) => {
//      console.log('hay un fallo', err.message);
//     this.error = true;
//    }
//  }

 constructor( private agenciesApi: AgenciesApi ) {
//  this.agenciesApi.getAll$().subscribe(
//  this.subscriptor
//  );
 this.agencies$ = this.agenciesApi.getAll$();
 }

//  constructor( private agenciesApi: AgenciesApi ) {
//   //  this.agenciesApi.getAll$().subscribe(
//   //  this.subscriptor
//   //  );
//    this.agencies$ = this.agenciesApi.getAll$().pipe(
//      catchError(
//       ( err )  => {
//         console.log('hay un fallo', err.message);
//         this.error = true;
//         return of(err);
//       }
//      )
//    )
//    }




// Esta forma de hacerlo es igual a la de aqui abajo

// constructor( private agenciesApi: AgenciesApi ) {
//   agenciesApi.getAll$().subscribe(
//   {
//     next : (data) => {
//       this.agenciesPadre = data;
//     },
//     error: (err) => {
//       console.log('hay un fallo', err.message);
//       this.error = true;
//     }
//   }
//   );
// }




onReload(){
  this.agenciesApi.getAll$().subscribe(
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
