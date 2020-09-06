import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _apiUrl: string;
  private _path: string

  constructor(private _http: HttpClient) {
    console.log(environment)
    this._apiUrl = environment.apiUrl;
    this._path = environment.locations
  }

  public locations(): Promise<Array<string>> {
    return this._http.get(`${this._apiUrl}/${this._path}`).toPromise()
      .then(data => {
        return data['locations'];
      }).catch(err => { console.log(err); return null })
  }
}
