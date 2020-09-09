import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Appartment } from '../../domain/appartment';
import { RecommenderRequest } from '../../domain/recommender_request';

@Component({
  selector: 'app-appartment-detail',
  templateUrl: './appartment-detail.component.html',
  styleUrls: ['./appartment-detail.component.scss']
})
export class AppartmentDetailComponent implements OnInit {

  private _appartment: Appartment;

  @Output() onSelect: EventEmitter<RecommenderRequest> = new EventEmitter<RecommenderRequest>();


  constructor() { }

  ngOnInit(): void {
  }

  selectAppartment() {
    this.onSelect.emit({
      lat: this._appartment.location.latitude,
      lng: this._appartment.location.longitude,
      review: this._appartment.new_rate || 0,
      tags: []
    })
  }

  @Input()
  set appartment(appartment: Appartment) {
    this._appartment = appartment;
  }

  get appartment(): Appartment {
    return this._appartment;
  }

}
