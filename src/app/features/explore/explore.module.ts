import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LocationSummaryComponent } from './components/location-summary/location-summary.component';
import { EventsPanelComponent } from './components/events-panel/events-panel.component';
import { AlertsPanelComponent } from './components/alerts-panel/alerts-panel.component';
import { PricesPanelComponent } from './components/prices-panel/prices-panel.component';
import { FoodPanelComponent } from './components/food-panel/food-panel.component';
import { SafetyPanelComponent } from './components/safety-panel/safety-panel.component';
import { HealthPanelComponent } from './components/health-panel/health-panel.component';
import { ReviewsPanelComponent } from './components/reviews-panel/reviews-panel.component';
import { FormsModule } from '@angular/forms';
import { FlipCardComponent } from 'src/app/shared/components/flip-card/flip-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ExplorePageComponent,
    SearchBarComponent,
    LocationSummaryComponent,
    EventsPanelComponent,
    AlertsPanelComponent,
    PricesPanelComponent,
    FoodPanelComponent,
    SafetyPanelComponent,
    HealthPanelComponent,
    ReviewsPanelComponent,
    FlipCardComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ExploreRoutingModule,
    HttpClientModule
  ]
})
export class ExploreModule { }
