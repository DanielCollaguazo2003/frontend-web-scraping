import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
interface PriceData {
  food: string;
  accommodation: string;
  transport: string;
  activities: string;
}
@Component({
  selector: 'app-prices-panel',
  templateUrl: './prices-panel.component.html',
  styleUrls: ['./prices-panel.component.scss']
})
export class PricesPanelComponent implements OnChanges {
  @Input() location: string = '';
  prices: PriceData | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location) {
      this.loadMockPrices(this.location);
    }
  }

  private loadMockPrices(location: string) {
    const lower = location.toLowerCase();

    if (lower.includes('quito')) {
      this.prices = {
        food: '$5 – $20 por comida',
        accommodation: '$25 – $80 por noche',
        transport: '$1 – $15 por trayecto',
        activities: '$5 – $30 por actividad'
      };
    } else if (lower.includes('cuenca')) {
      this.prices = {
        food: '$4 – $15 por comida',
        accommodation: '$20 – $60 por noche',
        transport: '$1 – $10 por trayecto',
        activities: '$5 – $25 por actividad'
      };
    } else {
      this.prices = null;
    }
  }
}
