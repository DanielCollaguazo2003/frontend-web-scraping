import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  query: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    const cleaned = this.query.trim();
    if (cleaned) {
      this.search.emit(cleaned);
    }
  }
}
