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
  events: EventItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location) {
      this.loadMockEvents(this.location);
    }
  }

  private loadMockEvents(location: string) {
    const lower = location.toLowerCase();
    if (lower.includes('quito')) {
      this.events = [
        {
          name: 'Fiesta de la Luz',
          date: '12 – 16 Agosto',
          location: 'Centro Histórico',
          description:
            'Festival de arte urbano con iluminación de iglesias coloniales.'
        },
        {
          name: 'Feria Gastronómica Andina',
          date: '20 – 22 Septiembre',
          location: 'Parque Itchimbía',
          description:
            'Exposición de comida tradicional con chefs nacionales e internacionales.'
        }
      ];
    } else if (lower.includes('cuenca')) {
      this.events = [
        {
          name: 'Festival de Jazz',
          date: '1 – 3 Noviembre',
          location: 'Teatro Casa de la Cultura',
          description: 'Encuentro internacional de jazz en escenarios históricos.'
        }
      ];
    } else {
      this.events = [];
    }
  }
}
