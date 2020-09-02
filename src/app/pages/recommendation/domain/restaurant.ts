import { Recommendation } from './recommendation';

export class Restaurant extends Recommendation {
  title: string;
  address: string;
  distance: number;
}
