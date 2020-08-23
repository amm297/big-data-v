import { Injectable } from '@angular/core';
import { Request } from '../domain/request';
import { Appartment } from '../domain/appartment';
import { adapt } from './apartment_adapter'


@Injectable({
  providedIn: 'root'
})
export class AppartmentService {
  private _apiUrl: string;

  constructor() {
    this._apiUrl = '';
  }

  public appartments(request: Request): Promise<Array<Appartment>> {
    return new Promise((resolve, reject) => {
      resolve(adapt(this._mock_appartments))
    })
  }

  private _mock_appartment_1 = {
    'id': 'test_id',
    'url': 'https://google.com',
    'name': 'Appartment 1',
    'description': 'Charming, bright and close to all floor. For one person. Or two people for stays during two nights. Quiet neighborhood and very friendly hosts. Bed in the air! EXCELLENT LOCATION. Near the center with the advantage of the tranquility of a residential area. Floor and bright room. We are a young couple working, quiet, clean, tidy and very friendly. We have a private room for rent, from one night to one week A BED IN THE AIR! 1.20 cm. For two seasons short people or for long periods. The bathroom with shower is shared. You can use the kitchen. You have about everything: -A 10 minutes centro.-area university, Arapiles district. -A 5 minutes from Princess Street and Fuencarral, where you can go shopping. They are all the stores! -A 5 minutes from Malasaħa neighborhood where you find designer shops and vintage. Just as international restaurants, bars and alternative theaters. -A 10 minutes from Moncloa -A 7 minutes Argĵelles.-Transportation: meters Quevedo and San Bernardo. Several bus lines',
    'houseRules': 'It is a very clean and tidy . We expect the same of you. We clean the room before and after you leave. You can have the room as you want, but you must maintain cleanliness and order in common areas. You can smoke but in the kitchen window .',
    'image': 'https://a0.muscache.com/im/pictures/18353466/bdd506f0_original.jpg?aki_policy=medium',
    'propertyType': 'APPARTMENT',
    'roomType': 'Private room',
    'accomodates': 2,
    'bathrooms': 1,
    'bedrooms': 1,
    'beds': 1,
    'bedType': 'BED',
    'amenities': 'TV,Internet,Wireless Internet,Kitchen,Smoking allowed,Buzzer/wireless intercom,Heating,Washer,First aid kit,Essentials,24-hour check-in,Hangers,Iron,Laptop friendly workspace,translation missing: en.hosting_amenity_49,translation missing: en.hosting_amenity_50',
    'squareFeet': null,
    'address': 'Arapiles, Madrid, Community of Madrid 28015, Spain',
    'neighborhood': 'Arapiles',
    'zipcode': '28015',
    'latitude': 40.43289633714846,
    'logitude': -3.707733180185036,
    'price': 26,
    'securityDeposit': 90,
    'cleaningFee': 0,
    'cancellationPolicy': 'MODERATE',
    'reviews': 14,
    'reviewsScoreRate': 97,
    'reviewsScoreAccuracy': 10,
    'reviewsScoreCleanliness': 10,
    'reviewScoreCheckin': 10,
    'reviewScoreCommunication': 10,
    'reviewScoreLocation': 10,
    'reviewScoreValue': 10
  }

  private _mock_appartments = [
    this._mock_appartment_1,
    this._mock_appartment_1,
    this._mock_appartment_1
  ]

}
