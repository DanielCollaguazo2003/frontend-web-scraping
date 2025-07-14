import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
interface SafetyIncident {
  title: string;
  date: string;
  location: string;
  level: 'Alto' | 'Medio' | 'Bajo';
  icon: string;
}
@Component({
  selector: 'app-safety-panel',
  templateUrl: './safety-panel.component.html',
  styleUrls: ['./safety-panel.component.scss']
})
export class SafetyPanelComponent implements OnChanges {

   @Input() location: string = '';
  incidents: SafetyIncident[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location) {
      this.loadMockIncidents(this.location);
    }
  }

  private loadMockIncidents(location: string) {
    const lower = location.toLowerCase();

    if (lower.includes('quito')) {
      this.incidents = [
        {
          title: 'Robo en la zona centro',
          date: '10 julio',
          location: 'Plaza Grande',
          level: 'Alto',
          icon: '🚨'
        },
        {
          title: 'Accidente de tránsito leve',
          date: '9 julio',
          location: 'Av. América',
          level: 'Medio',
          icon: '🛵'
        }
      ];
    } else if (lower.includes('cuenca')) {
      this.incidents = [
        {
          title: 'Asalto a turista reportado',
          date: '8 julio',
          location: 'Parque Calderón',
          level: 'Medio',
          icon: '🚨'
        }
      ];
    } else {
      this.incidents = [];
    }
  }

}
