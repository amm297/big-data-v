import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../domain/price';
@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.scss']
})
export class PriceDetailComponent implements OnInit {

  private _price: Price;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set price(price: Price) {
    console.log(price)
    this._price = price;
  }

  get price(): Price {
    return this._price;
  }

}
