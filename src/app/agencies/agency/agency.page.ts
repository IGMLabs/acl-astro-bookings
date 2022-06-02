import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css']
})
export class AgencyPage implements OnInit {

  agencyId: string;
  constructor( route:ActivatedRoute ) {
    this.agencyId = route.snapshot.paramMap.get('id')!;
    //this.agencyId = route.snapshot.paramMap.get('id') || '';  OPCION 2
   }

  ngOnInit(): void {
  }

}
