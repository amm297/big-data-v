import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _apiUrl: string;
  private _path: string

  constructor(private _http: HttpClient) {
    this._apiUrl = 'http://localhost:8080';
    this._path = 'locations'
  }

  public locations(): Promise<Array<string>> {
    return this._http.get(`${this._apiUrl}/${this._path}`).toPromise()
      .then(data => {
        return data['locations'];
      }).catch(err => { console.log(err); return null })
  }
}
