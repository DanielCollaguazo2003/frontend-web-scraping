import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface SafetyIncident {
  title: string;
  date: string;
  location: string;
  level: 'Alto' | 'Medio' | 'Bajo';
  icon: string;
  report: string;
}

@Component({
  selector: 'app-safety-panel',
  templateUrl: './safety-panel.component.html',
  styleUrls: ['./safety-panel.component.scss']
})
export class SafetyPanelComponent implements OnChanges {
  @Input() location: string = ''; // opcional para mostrar nombre de ciudad
  @Input() safetyData: { items: SafetyIncident[] } | null = null;

  incidents: SafetyIncident[] = [];
  showBackStates: boolean[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['safetyData']) {
      this.loadFromData();
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

  getBorderColor(level: 'Alto' | 'Medio' | 'Bajo'): string {
    return {
      'Alto': 'border-red-500',
      'Medio': 'border-yellow-500',
      'Bajo': 'border-green-500'
    }[level];
  }

  private loadFromData(): void {
    this.incidents = Array.isArray(this.safetyData?.items)
      ? this.safetyData!.items
      : [];

    this.showBackStates = this.incidents.map(() => false);
  }
}
