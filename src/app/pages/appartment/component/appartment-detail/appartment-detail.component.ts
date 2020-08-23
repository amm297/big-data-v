import { Component, OnInit, Input } from '@angular/core';
import { Appartment } from '../../domain/appartment';

@Component({
  selector: 'app-appartment-detail',
  templateUrl: './appartment-detail.component.html',
  styleUrls: ['./appartment-detail.component.scss']
})
export class AppartmentDetailComponent implements OnInit {

  private _appartment: Appartment;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set appartment(appartment: Appartment) {
    this._appartment = appartment;
  }

  get appartment(): Appartment {
    return this._appartment;
  }

}
