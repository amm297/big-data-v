import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Request } from './domain/request';
import { Point } from './domain/point';
import { Marker } from './domain/marker';

import { RecommendationService } from './services/recommendation.service'
import { Recommendation } from './domain/recommendation';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  private _recommendations: Array<Recommendation>;
  private _markers: Array<Marker>;
  private _loading: boolean;
  private _center: Point;

  constructor(
    private _route: ActivatedRoute,
    private _recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this._loading = true;

    this._route.queryParams.subscribe(params => {
      const request = new Request(params)
      this._center = new Point(request.lat, request.lng);
      this._recommendationService.recommend(request).then(data => {
        this._recommendations = data;
        this._markers = this._recommendations.map(recommendation => new Marker(recommendation.location.point, '/assets/markers/restaurant-marker.png'))
      }).finally(() => this._loading = false)
    });
  }

  get recommendations(): Array<Recommendation> {
    return this._recommendations;
  }

  get center(): Point {
    return this._center;
  }

  get markers(): Array<Marker> {
    return this._markers;
  }

  get loading(): boolean {
    return this._loading;
  }
}
