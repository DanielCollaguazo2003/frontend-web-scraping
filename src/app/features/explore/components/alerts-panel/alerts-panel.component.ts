import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface AlertItem {
  title: string;
  date: string;
  location: string;
  level: 'Alta' | 'Media' | 'Baja';
  icon: string;
}

@Component({
  selector: 'app-alerts-panel',
  templateUrl: './alerts-panel.component.html',
  styleUrls: ['./alerts-panel.component.scss']
})
export class AlertsPanelComponent implements OnChanges {
  @Input() location: string = '';
  alerts: AlertItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location) {
      this.loadMockAlerts(this.location);
    }
  }

  private loadMockAlerts(location: string) {
    const lower = location.toLowerCase();

    if (lower.includes('quito')) {
      this.alerts = [
        {
          title: 'Manifestación en la Av. 10 de Agosto',
          date: '11 julio',
          location: 'Centro Norte',
          level: 'Media',
          icon: '🔊'
        },
        {
          title: 'Cierre temporal por obras',
          date: '8 – 15 julio',
          location: 'La Mariscal',
          level: 'Baja',
          icon: '🚧'
        }
      ];
    } else if (lower.includes('cuenca')) {
      this.alerts = [
        {
          title: 'Protesta estudiantil',
          date: '9 julio',
          location: 'Universidad de Cuenca',
          level: 'Alta',
          icon: '📣'
        }
      ];
    } else {
      this.alerts = [];
    }
  }
}
