import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _apiUrl: string;
  private _pathLocation: string
  private _pathTags: string

  constructor(private _http: HttpClient) {
    console.log(environment)
    this._apiUrl = environment.apiUrl;
    this._pathLocation = environment.locations;
    this._pathTags = environment.tags;
  }

  public locations(): Promise<Array<string>> {
    return this._http.get(`${this._apiUrl}/${this._pathLocation}`).toPromise()
      .then(data => {
        return data['locations'];
      }).catch(err => { console.log(err); return null })
  }

  public tags(): Promise<Array<string>> {
    return this._http.get(`${this._apiUrl}/${this._pathTags}`).toPromise()
      .then(data => {
        return data['tags'];
      }).catch(err => { console.log(err); return null })
  }
}
