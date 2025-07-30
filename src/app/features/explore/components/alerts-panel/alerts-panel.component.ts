import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface AlertItem {
  title: string;
  date: string;
  location: string;
  level: 'Alta' | 'Media' | 'Baja';
  icon: string;
  explanation: string;
}

@Component({
  selector: 'app-alerts-panel',
  templateUrl: './alerts-panel.component.html',
  styleUrls: ['./alerts-panel.component.scss']
})
export class AlertsPanelComponent implements OnChanges {
  @Input() location: string = '';
  @Input() alertData: any;

  alerts: AlertItem[] = [];
  generalReport: string = '';
  showBackStates: boolean[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['alertData']) {
      this.loadAlertsFromData();
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

  getBorderColor(level: 'Alta' | 'Media' | 'Baja'): string {
    return {
      'Alta': 'border-red-500',
      'Media': 'border-yellow-500',
      'Baja': 'border-green-500'
    }[level];
  }

  getBadgeClass(level: 'Alta' | 'Media' | 'Baja'): string {
    return {
      'Alta': 'bg-red-100 text-red-700',
      'Media': 'bg-yellow-100 text-yellow-700',
      'Baja': 'bg-green-100 text-green-700'
    }[level];
  }

  private loadAlertsFromData() {
    if (!this.alertData || !Array.isArray(this.alertData.alertas)) {
      this.alerts = [];
      this.generalReport = '';
      return;
    }

    // Aquí asumimos que las alertas ya vienen completas en el JSON
    // Si necesitas mapearlas o enriquecerlas, hazlo aquí
    this.alerts = this.alertData.alertas.map((raw: any) => ({
      title: raw.title || 'Alerta sin título',
      date: raw.date || 'Fecha desconocida',
      location: raw.location || 'Ubicación desconocida',
      level: raw.level || 'Media', // por defecto
      icon: raw.icon || 'exclamation-circle',
      explanation: raw.explanation || 'Sin explicación detallada.'
    }));

    this.generalReport = this.alertData.reporte || 'Sin reporte general.';

    this.showBackStates = this.alerts.map(() => false);
  }
}
