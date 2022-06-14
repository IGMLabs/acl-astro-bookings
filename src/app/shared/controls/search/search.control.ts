import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { fromEvent, map, Observable, tap, debounceTime, filter, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.control.html',
  styleUrls: ['./search.control.css']
})
export class SearchControl implements OnInit {

  // Con el ViewChild coge el elemento del html
  @ViewChild('searchInput', {static:true}) public searchInput!: ElementRef;
  @Output() search = new EventEmitter<string>();

  public searchInput$!: Observable<string>;


  constructor() { }


  ngOnInit(): void {
    this.searchInput$ = fromEvent(this.searchInput.nativeElement,'keyup').pipe(
          map(( event ) => (event as any ).target.value),
          //
          tap((searchTerm) => console.log(searchTerm)),
          // Con el debounceTime hacemos que espere 1 segundo antes de continuar la ejecucion(1000)
          debounceTime(1000),
          // Con el filter aplicamos filtros, como por ejemplo que busque a partir de la 3ª letra
          filter((searchText) => searchText.length > 2),
          // Con el distintUntilChanged solo ejecutara el codigo cuando lo que le pasemos
          //es distinto a lo que ya paso por aqui antes, estariamos subscritos a este ultimo y no a los anteriores.
          distinctUntilChanged()
       );
  }
}
