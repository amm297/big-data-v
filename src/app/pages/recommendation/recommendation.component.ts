import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Request } from './domain/request';

import { RecommendationService } from './services/recommendation.service'
import { Recommendation } from './domain/recommendation';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  private _recommendations: Array<Recommendation>

  constructor(
    private _route: ActivatedRoute,
    private _recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      const request = new Request(params)
      this._recommendationService.recommend(request).then(data => {
        this._recommendations = data;
      })
    })
  }

  get recommendations(): Array<Recommendation> {
    return this._recommendations;
  }

}
