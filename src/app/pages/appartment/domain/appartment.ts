import { AppartmentDetails } from './appartment_details';
import { Location } from './location';
import { Review } from './review';
import { Price } from './price';

export class Appartment {
  details: AppartmentDetails;
  location: Location;
  price: Price;
  review: Review;
}
