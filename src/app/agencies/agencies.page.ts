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
  this.agenciesPadre = agenciesApi.getAll();
}

onReload(){
  this.agenciesPadre = this.agenciesApi.getAll();
}


  ngOnInit(): void {
  }

}
