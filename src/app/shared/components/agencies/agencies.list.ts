import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css'],
})
export class AgenciesList implements OnInit {
  // Con el input indicamos que las agencias le viene de fuera(agencies.page)
  // Movi el constructor de aqui al agencies.page.ts
  @Input() public agenciesHijo: Agency[] = [];

  @Output() private reload = new EventEmitter();


  public reloading = false;

  public onReloadClick(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
    // Para indicarle al padre que lo haga
    this.reload.emit();
  }

  public getAgenciesLength() {
    return this.agenciesHijo.length;
  }

  ngOnInit(): void {}
}
