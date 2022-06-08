import { Component, OnInit } from '@angular/core';

import { Agency } from 'src/app/core/api/agency.interface';
import { IdNameApi } from 'src/app/core/api/id-name.api';
import { IdName } from 'src/app/core/api/id-name.interface';
import { AgenciesApi } from '../../core/api/agencies.api';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.page.html',
  styleUrls: ['./new-agency.page.css']
})
export class NewAgencyPage implements OnInit {

  public ranges: IdName[];
  public statuses: string[];

  constructor(idNameApi: IdNameApi, private agenciesApi: AgenciesApi) {

    this.ranges = idNameApi.getRanges();
    this.statuses = idNameApi.getStatuses();

  }

  onSave(newAgencyData:Agency) {
    this.agenciesApi.post(newAgencyData);
  }


  ngOnInit(): void {
  }

}
