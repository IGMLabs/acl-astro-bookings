import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.control.html',
  styleUrls: ['./search.control.css'],
})
export class SearchControl implements OnInit {
  @ViewChild('searchInput', { static: true }) public searchInput!: ElementRef;

  @Output() search = new EventEmitter<string>();


  constructor() {}

  // Operadores Sincronos
  ngOnInit(): void {
    const nativeSource$ = fromEvent(this.searchInput.nativeElement, 'keyup');
    //this.searchInput$ =
    nativeSource$.pipe(
      map((event) => (event as any).target.value as string),
      tap((searchTerm) => console.log('antes:', searchTerm)),
      debounceTime(500),
      tap((searchTerm) => console.log('después: ', searchTerm)),
      filter((searchText) => searchText.length > 1 || searchText.length == 0),
      tap((searchTerm) => console.log('filtrado: ', searchTerm)),
      distinctUntilChanged(),
      tap((searchTerm) => console.log('para buscar: ', searchTerm)),
      // tap((searchTerm) => this.search.emit(searchTerm))
      // Si no nos subscribimos esto no devuelve nada!
      ).subscribe(((searchTerm) => this.search.emit(searchTerm)));
  }
}
