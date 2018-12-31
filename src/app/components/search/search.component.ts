import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output('filter')
  searchBy: EventEmitter<string> = new EventEmitter();

  emitSearch(event) {
    const search: string = event.target.value;

    return this.searchBy.emit(search);
  }
}
