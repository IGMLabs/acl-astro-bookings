import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-view',
  templateUrl: './trip.view.html',
  styleUrls: ['./trip.view.css']
})
export class TripView implements OnInit {
  @Input() public tripId = '';

  constructor() { }

  ngOnInit(): void {
  }

}
