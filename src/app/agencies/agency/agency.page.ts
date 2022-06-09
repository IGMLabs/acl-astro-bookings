import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Agency } from 'src/app/core/api/agency.interface';
import { AgenciesApi } from '../../core/api/agencies.api';

@Component({
  // selector: 'app-agency', Se borra porque no se llega a usar
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css']
})
export class AgencyPage implements OnInit {

  public agencyId: string;
  public agency$: Observable<Agency>;

  constructor( route:ActivatedRoute, agenciesApi: AgenciesApi ) {
    this.agencyId = route.snapshot.paramMap.get('id') || '';
    this.agency$ = agenciesApi.getById$(this.agencyId);

   }

  ngOnInit(): void {
  }

}
