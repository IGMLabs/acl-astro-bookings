import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css'],
})
export class AgenciesList implements OnInit {

  @Input() public agenciesHijo: Agency[] = []; // Con el input indicamos que las agencias le viene de fuera(agencies.page)

  @Output() private reload = new EventEmitter();


  public reloading = false;

  constructor(private router        : Router,
              private activatedRoute: ActivatedRoute){

  }


  public onReloadClick(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
    this.reload.emit(); // Para indicarle al padre que lo haga con el .emit
  }

  public getAgenciesLength() {
    return this.agenciesHijo.length;
  }

  public onSearchClick(agencyId: string){
    this.router.navigate([],{
      relativeTo         : this.activatedRoute, //hay que poner el relativeTo para poder quedarse en la misma pagina
      queryParams        : { q:agencyId },
      queryParamsHandling:'merge',
    })
  }

  ngOnInit(): void {}
}
