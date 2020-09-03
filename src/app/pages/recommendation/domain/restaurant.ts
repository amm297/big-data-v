import { Recommendation } from './recommendation';

export class Restaurant extends Recommendation {
  title: string;
  restaurantType: string;
  price: string;
  description: string;
  tags: string;
}
