import { Component, Input, OnDestroy } from '@angular/core';
import { ExploreDataService } from '../../data/explore-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss'],
})
export class ExplorePageComponent implements OnDestroy {
  selectedLocation: string = 'Cuenca';
  loading: boolean = false;
  progress: number = 0;
  @Input() eventData: any;

  reportData: any = null;

  private wsSubscription?: Subscription;
  private scrapingSubscription?: Subscription;
  private currentTaskId?: string;

  constructor(private exploreDataService: ExploreDataService) {}

  handleSearch(query: string) {
    this.selectedLocation = query;
    this.loading = true;
    this.progress = 0;
    this.reportData = null;

    // Cancelar suscripciones y conexiones anteriores
    this.wsSubscription?.unsubscribe();
    this.scrapingSubscription?.unsubscribe();
    this.exploreDataService.disconnect();

    // Iniciar nueva solicitud de scraping
    this.scrapingSubscription = this.exploreDataService
      .startScraping({
        query: query,
        'max results': 20,
        platform: 'twitter',
      })
      .subscribe({
        next: (response) => {
          this.currentTaskId = response.task_id;

          this.wsSubscription = this.exploreDataService.messages$.subscribe(
            (msg) => {
              switch (msg.type) {
                case 'task_started':
                  this.progress = 0;
                  break;

                case 'progress_update':
                  this.progress =
                    typeof msg['progress'] === 'number'
                      ? msg['progress']
                      : Math.min(this.progress + 33, 99);
                  break;

                case 'task_completed':
                  this.progress = 100;
                  this.loading = false;

                  if (this.currentTaskId) {
                    this.exploreDataService
                      .getResults(this.currentTaskId)
                      .subscribe({
                        next: (results) => {
                          try {
                            if (typeof results.gpt_report === 'string') {
                              const cleaned = results.gpt_report
                                .replace(/```json/g, '')
                                .replace(/```/g, '')
                                .trim();

                              console.log('Parsed GPT report:', cleaned);
                              this.reportData = JSON.parse(cleaned);
                            } else {
                              this.reportData = results.gpt_report;
                            }
                          } catch (e) {
                            console.error('Error parsing GPT report JSON', e);
                          }
                        },
                        error: (err) => {
                          console.error('Error obteniendo resultados:', err);
                        },
                      });
                  }
                  break;

                case 'task_failed':
                  this.loading = false;
                  alert('El scraping falló. Intenta nuevamente.');
                  break;
              }
            }
          );
        },
        error: (err) => {
          console.error('Error iniciando scraping:', err);
          this.loading = false;
        },
      });
  }

  ngOnDestroy() {
    this.wsSubscription?.unsubscribe();
    this.scrapingSubscription?.unsubscribe();
    this.exploreDataService.disconnect();
  }
}
