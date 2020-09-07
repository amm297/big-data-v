import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationComponent } from './recommendation.component';

import { RecommendationService } from './services/recommendation.service';
import { RecommendationDetailsComponent } from './components/recommendation-details/recommendation-details.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './components/map/map.component';

import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [
    RecommendationComponent,
    RecommendationDetailsComponent,
    MapComponent,
  ],
  imports: [CommonModule, LeafletModule, InlineSVGModule],
  providers: [RecommendationService],
})
export class RecommendationModule { }
