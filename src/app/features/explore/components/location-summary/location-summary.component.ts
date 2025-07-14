import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-location-summary',
  templateUrl: './location-summary.component.html',
  styleUrls: ['./location-summary.component.scss'],
})
export class LocationSummaryComponent {
  @Input() location: string = '';
  summary: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location) {
      this.generateMockSummary(this.location);
    }
  }

  private generateMockSummary(location: string) {
    // Más adelante aquí llamaremos al backend/LLM
    const lower = location.toLowerCase();

    if (lower.includes('quito')) {
      this.summary =
        'Ciudad histórica en los Andes, con clima templado, gastronomía diversa y rica vida cultural.';
    } else if (lower.includes('cuenca')) {
      this.summary =
        'Ciudad colonial con arquitectura patrimonial, excelente comida y ambiente tranquilo.';
    } else {
      this.summary = `Resumen de ${location} no disponible aún.`;
    }
  }
}
