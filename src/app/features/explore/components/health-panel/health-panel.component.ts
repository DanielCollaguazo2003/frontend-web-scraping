import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface HealthInfoItem {
  title: string;
  date: string;
  note: string;
  level: 'Alta' | 'Media' | 'Baja';
  icon: string;
  report: string;
}

@Component({
  selector: 'app-health-panel',
  templateUrl: './health-panel.component.html'
})
export class HealthPanelComponent implements OnChanges {
  @Input() location: string = ''; // opcional si aún quieres usarla visualmente
  @Input() healthData: { items: HealthInfoItem[] } | null = null;

  info: HealthInfoItem[] = [];
  showBackStates: boolean[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['healthData']) {
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

  getBorderColor(level: 'Alta' | 'Media' | 'Baja'): string {
    return {
      'Alta': 'border-red-500',
      'Media': 'border-yellow-500',
      'Baja': 'border-green-500'
    }[level];
  }

  private loadFromData() {
    this.info = Array.isArray(this.healthData?.items)
      ? this.healthData!.items
      : [];

    this.showBackStates = this.info.map(() => false);
  }
}
