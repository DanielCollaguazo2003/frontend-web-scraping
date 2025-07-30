import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface EventItem {
  name: string;
  date: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-events-panel',
  templateUrl: './events-panel.component.html',
  styleUrls: ['./events-panel.component.scss']
})
export class EventsPanelComponent implements OnChanges {
  @Input() location: string = '';
  @Input() eventData: any;

  events: EventItem[] = [];
  generalReport: string = '';
  showBackStates: boolean[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['eventData']) {
      this.loadEventsFromData();
    }
  }

  toggleCard(index: number): void {
    this.showBackStates[index] = !this.showBackStates[index];
  }

  handleKeyDown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleCard(index);
    }
  }

  private loadEventsFromData(): void {
    if (!this.eventData || !Array.isArray(this.eventData.eventos)) {
      this.events = [];
      this.generalReport = '';
      return;
    }

    this.events = this.eventData.eventos.map((raw: any) => ({
      name: raw.nombre || 'Evento sin nombre',
      date: raw.fecha || 'Fecha desconocida',
      location: raw.ubicacion || 'Ubicación no especificada',
      description: raw.descripcion || 'Sin descripción',
    }));

    this.generalReport = this.eventData.reporte || 'Sin reporte general.';
    this.showBackStates = this.events.map(() => false);
  }
}
