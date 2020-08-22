import { Injectable } from '@angular/core';
import { Request } from '../domain/request';


@Injectable({
  providedIn: 'root'
})
export class AppartmentService {
  private _apiUrl: string;

  constructor() {
    this._apiUrl = '';
  }

  public appartments(request: Request): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('test')
    })
  }
}
