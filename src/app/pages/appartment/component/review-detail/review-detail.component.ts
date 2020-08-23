import { Component, OnInit, Input } from '@angular/core';

import { Review } from '../../domain/review'

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {

  private _review: Review;

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  set review(review: Review) {
    this._review = review;
  }

  get review(): Review {
    return this._review;
  }
}
