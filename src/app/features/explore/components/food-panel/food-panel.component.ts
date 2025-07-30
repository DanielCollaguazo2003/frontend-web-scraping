import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Dish {
  name: string;
  description: string;
}

@Component({
  selector: 'app-food-panel',
  templateUrl: './food-panel.component.html'
})
export class FoodPanelComponent implements OnChanges {
  @Input() location: string = '';
  @Input() gastronomyData: any;

  dishes: Dish[] = [];
  gastronomyReport = '';
  showBack = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gastronomyData']) {
      this.loadFromData();
      this.showBack = false;
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

  private loadFromData() {
    if (!this.gastronomyData) {
      this.dishes = [];
      this.gastronomyReport = 'No se encontró información gastronómica.';
      return;
    }

    this.dishes = Array.isArray(this.gastronomyData.platos)
      ? this.gastronomyData.platos.map((p: any) => ({
          name: p.nombre || 'Plato sin nombre',
          description: p.descripcion || 'Sin descripción'
        }))
      : [];

    this.gastronomyReport = this.gastronomyData.reporte || 'Sin reporte disponible.';
  }
}
