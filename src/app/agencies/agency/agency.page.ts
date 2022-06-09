import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Agency } from 'src/app/core/api/agency.interface';
import { AgenciesApi } from '../../core/api/agencies.api';

@Component({
  // selector: 'app-agency', Se borra porque no se llega a usar
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css']
})
export class AgencyPage implements OnInit {

  public agencyId: string;
  public agency?: Agency;

  constructor( route:ActivatedRoute, agenciesApi: AgenciesApi ) {
    this.agencyId = route.snapshot.paramMap.get('id') || '';
    //this.agencyId = route.snapshot.paramMap.get('id') || '';  OPCION 2
   agenciesApi.getById(this.agencyId).subscribe( (data) => {
     this.agency = data;
   });
   }

  ngOnInit(): void {
  }

}
