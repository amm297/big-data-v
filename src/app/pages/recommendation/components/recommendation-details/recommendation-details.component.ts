import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../domain/restaurant';

@Component({
  selector: 'app-recommendation-details',
  templateUrl: './recommendation-details.component.html',
  styleUrls: ['./recommendation-details.component.scss']
})
export class RecommendationDetailsComponent implements OnInit {

  private _recommendation: Restaurant;

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  set recommendation(recommendation: Restaurant) {
    console.log(recommendation)
    this._recommendation = recommendation;
  }

  get recommendation(): Restaurant {
    return this._recommendation;
  }

}
