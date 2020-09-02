import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationComponent } from './recommendation.component';

import { RecommendationService } from './services/recommendation.service';
import { RecommendationDetailsComponent } from './components/recommendation-details/recommendation-details.component'



@NgModule({
  declarations: [RecommendationComponent, RecommendationDetailsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    RecommendationService
  ]
})
export class RecommendationModule { }
