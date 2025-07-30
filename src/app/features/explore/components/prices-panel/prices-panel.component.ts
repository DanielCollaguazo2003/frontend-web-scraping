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
  showBack = false;
  priceReport = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location) {
      this.loadMockPrices(this.location);
      this.loadMockReport(this.location);
      this.showBack = false; // reset al cambiar ubicación
    }
  }

  toggleFlip() {
    this.showBack = !this.showBack;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleFlip();
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

  private loadMockReport(location: string) {
    const lower = location.toLowerCase();

    if (lower.includes('quito')) {
      this.priceReport = `Según el análisis del LLM, los precios en Quito son consistentes con su tamaño urbano y oferta turística amplia, reflejando una variedad de opciones desde económicas hasta premium.`;
    } else if (lower.includes('cuenca')) {
      this.priceReport = `El LLM indica que los precios en Cuenca tienden a ser más bajos debido a menor demanda turística y costo de vida más bajo en comparación con Quito.`;
    } else {
      this.priceReport = `No se encontró información detallada sobre precios para esta ubicación.`;
    }
  }
}
