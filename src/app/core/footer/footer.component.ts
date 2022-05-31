import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public title = 'Astro Bookings';
  public subtitle = 'Bienvenid@!!';
  public author = 'Alejandro Calvo';
  public authorUrl = 'https://www.google.com';

  constructor() { }

  ngOnInit(): void {
  }

}
