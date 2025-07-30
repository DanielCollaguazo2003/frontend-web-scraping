import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Comentario {
  usuario: string;
  calificacion: number; // 1-5
  fecha: string; // formato ISO
  comentario: string;
  reporte: string; // análisis de sentimiento por comentario
}

@Component({
  selector: 'app-reviews-panel',
  templateUrl: './reviews-panel.component.html'
})
export class ReviewsPanelComponent implements OnChanges {
  @Input() location: string = '';
  @Input() reviewsData: any;

  comentarios: Comentario[] = [];
  generalReport: string = '';
  showBackStates: boolean[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reviewsData']) {
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
    if (!this.reviewsData || !Array.isArray(this.reviewsData)) {
      this.comentarios = [];
      this.generalReport = '';
      return;
    }

    this.comentarios = this.reviewsData.map((raw: any) => ({
      usuario: raw.usuario || 'Usuario desconocido',
      calificacion: raw.calificacion || 0,
      fecha: raw.fecha || 'Fecha desconocida',
      comentario: raw.comentario || 'Sin comentario',
      reporte: raw.reporte || 'Sin análisis de sentimiento',
    }));
    this.showBackStates = this.comentarios.map(() => false);
  }
  getStars(rating: number): string {
    return '⭐'.repeat(rating);
  }
}
