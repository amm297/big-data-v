import { Injectable } from '@angular/core';
import { Request } from '../domain/request';
import { Appartment } from '../domain/appartment';
import { adapt } from './apartment_adapter'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppartmentService {
  private _apiUrl: string;
  private _path: string

  constructor(private _http: HttpClient) {
    this._apiUrl = 'http://localhost:8080';
    this._path = 'apartments'
  }

  public appartments(request: Request): Promise<Array<Appartment>> {
    return this._http.get(`${this._apiUrl}/${this._path}/${request.neighborhood}/${request.pax}`).toPromise()
      .then(data => {
        return adapt(data['apartments']);
      }).catch(err => { console.log(err); return null })
  }
}
