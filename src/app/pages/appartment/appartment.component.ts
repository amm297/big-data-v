import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AppartmentService } from './services/appartment.service';
import { Request } from './domain/request';
import { RecommenderRequest } from './domain/recommender_request';
import { Appartment } from './domain/appartment';
import { AppRoutes } from '../../app-routes';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.scss']
})
export class AppartmentComponent implements OnInit {

  private _appartments: Array<Appartment>;
  private _request: Request;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _appartmentService: AppartmentService) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this._request = new Request(params)
      this._appartmentService.appartments(this._request).then(data => {
        this._appartments = data;
      })
    })
  }

  selectAppartment(req: RecommenderRequest) {
    req.tags = this._request.tags;
    this._router.navigate([AppRoutes.BASE_PATH, AppRoutes.RECOMMENDATION], { queryParams: req })
  }

  get appartments(): Array<Appartment> {
    return this._appartments;
  }

}
