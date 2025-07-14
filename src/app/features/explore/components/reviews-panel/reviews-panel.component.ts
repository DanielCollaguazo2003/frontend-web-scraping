import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Review {
  user: string;
  rating: number; // 1-5
  date: string;
  comment: string;
}

@Component({
  selector: 'app-reviews-panel',
  templateUrl: './reviews-panel.component.html'
})
export class ReviewsPanelComponent implements OnChanges {
  @Input() location: string = '';
  reviews: Review[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location) {
      this.loadMockReviews(this.location);
    }
  }

  private loadMockReviews(location: string) {
    const lower = location.toLowerCase();

    if (lower.includes('quito')) {
      this.reviews = [
        {
          user: 'Ana M.',
          rating: 5,
          date: '12 Julio 2025',
          comment: 'Un lugar increíble, con mucha cultura y comida deliciosa.'
        },
        {
          user: 'Carlos G.',
          rating: 4,
          date: '10 Julio 2025',
          comment: 'Buena experiencia, aunque el transporte puede ser mejor.'
        }
      ];
    } else if (lower.includes('cuenca')) {
      this.reviews = [
        {
          user: 'María P.',
          rating: 4,
          date: '11 Julio 2025',
          comment: 'Ciudad muy acogedora y limpia.'
        }
      ];
    } else {
      this.reviews = [];
    }
  }

  getStars(rating: number): string {
    return '⭐'.repeat(rating);
  }
}
