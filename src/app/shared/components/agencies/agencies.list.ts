import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  agencies = [
    {
      id: 'space-a',
      name: 'Space A',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'dark-origin',
      name: 'Dark Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'trasiego-air',
      name: 'Trasiego Air',
      range: 'Orbital',
      status: 'Pending',
    },
  ];

  public reloading = false;

  constructor() { }


  public reload(lista: string) {
    this.reloading=true;
    console.log('Reloading.....'+lista);
  }

  public getAgenciesLength(){
    return this.agencies.length;
    }

  ngOnInit(): void {
  }

}
