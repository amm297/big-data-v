import { Injectable } from '@angular/core';
import { Request } from '../domain/request';
import { HttpClient } from '@angular/common/http'

import { Recommendation } from '../domain/recommendation';
import { adapt } from './recommendation_adapter';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private _apiUrl = '';
  private _path = '';

  constructor(private _http: HttpClient) {
    this._apiUrl = environment.apiUrl;
    this._path = environment.restaurantRecommender;
  }

  public recommend(request: Request): Promise<Array<Recommendation>> {
    request.tags = request.tags ? (request.tags as string[]).join(',') : [];
    return this._http.post(`${this._apiUrl}/${this._path}`, request).toPromise()
      .then(data => {
        return adapt(data);
      }).catch(err => { console.log(err); return null })
  }
}
