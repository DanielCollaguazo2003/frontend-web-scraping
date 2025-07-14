import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface HealthInfoItem {
  title: string;
  date: string;
  note: string;
  level: 'Alta' | 'Media' | 'Baja';
  icon: string;
}

@Component({
  selector: 'app-health-panel',
  templateUrl: './health-panel.component.html'
})
export class HealthPanelComponent implements OnChanges {
  @Input() location: string = '';
  info: HealthInfoItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location) {
      this.loadMockHealthInfo(this.location);
    }
  }

  private loadMockHealthInfo(location: string) {
    const lower = location.toLowerCase();

    if (lower.includes('quito')) {
      this.info = [
        {
          title: 'Recomendación de vacuna contra fiebre amarilla',
          date: 'Julio 2025',
          note: 'Especialmente para zonas rurales y selva.',
          level: 'Media',
          icon: '💉'
        },
        {
          title: 'Buen acceso a atención médica',
          date: 'Actualizado julio 2025',
          note: 'Hospitales y clínicas accesibles en zonas urbanas.',
          level: 'Baja',
          icon: '🏥'
        }
      ];
    } else if (lower.includes('cuenca')) {
      this.info = [
        {
          title: 'Brote leve de dengue reportado',
          date: 'Julio 2025',
          note: 'Recomendado uso de repelente en zonas húmedas.',
          level: 'Alta',
          icon: '🦟'
        }
      ];
    } else {
      this.info = [];
    }
  }
}
