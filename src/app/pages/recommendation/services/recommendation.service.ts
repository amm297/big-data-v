import { Injectable } from '@angular/core';
import { Request } from '../domain/request';
import { HttpClient } from '@angular/common/http'

import { Recommendation } from '../domain/recommendation';
import { adapt } from './recommendation_adapter';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private _apiUrl = '';
  private _path = '';

  constructor(private _http: HttpClient) {
    this._apiUrl = 'http://localhost:8080';
    this._path = 'recommender/restaurant'
  }

  public recommend(request: Request): Promise<Array<Recommendation>> {
    return this._http.post(`${this._apiUrl}/${this._path}`, request).toPromise()
      .then(data => {
        return adapt(data['restaurants']);
      }).catch(err => { console.log(err); return null })
  }
}
