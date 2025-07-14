import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent {
  selectedLocation: string = '';

  handleSearch(query: string) {
    this.selectedLocation = query;
    console.log('Destino buscado:', query);
  }
}
