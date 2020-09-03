import { Injectable } from '@angular/core';
import { Request } from '../domain/request';
import { Appartment } from '../domain/appartment';
import { adapt } from './apartment_adapter'
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppartmentService {
  private _apiUrl: string;
  private _path: string

  constructor(private _http: HttpClient) {
    this._apiUrl = environment.apiUrl;
    this._path = environment.apartments
  }

  public appartments(request: Request): Promise<Array<Appartment>> {
    let path = this._path.replace(':neighborhood', request.neighborhood)
    path = path.replace(':pax', request.pax.toString())
    return this._http.get(`${this._apiUrl}/${path}`).toPromise()
      .then(data => {
        return adapt(data['apartments']);
      }).catch(err => { console.log(err); return null })
  }
}
