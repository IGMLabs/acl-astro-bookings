import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {


public reloading = false;


public reload(lista: string) {
  this.reloading=true;
  console.log('Reloading.....'+lista);
}

  constructor() { }

  ngOnInit(): void {
  }

}
