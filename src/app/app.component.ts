import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Astro Bookings';
  public subtitle = 'Bienvenid@!!';
  public author = 'Alejandro Calvo';
  public authorUrl = 'https://www.google.com';


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

public getAgenciesLength(){
return this.agencies.length;
}


public reload(lista: string) {
  this.reloading=true;
  console.log('Reloading.....'+lista);
}

}
