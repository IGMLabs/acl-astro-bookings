import { Component, OnInit } from '@angular/core';

import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  // selector: 'app-agencies', Se borra porque no se llega a usar.
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage implements OnInit {

public agenciesPadre!: Agency[];

constructor( private agenciesApi: AgenciesApi ) {
  agenciesApi.getAll().subscribe( ( data ) => {
    this.agenciesPadre = data;
  } );
}

onReload(){
  this.agenciesApi.getAll().subscribe( ( data ) => {
    this.agenciesPadre = data;
  } );
}

  ngOnInit(): void {
  }

}
