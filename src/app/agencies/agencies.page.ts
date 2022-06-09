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


public agencies$: Observable<Agency[]>;
public error: boolean = false;


 constructor( private agenciesApi: AgenciesApi ) {

 this.agencies$ = this.agenciesApi.getAll$();
 }



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
