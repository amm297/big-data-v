import { Recommendation } from './recommendation';

export class Activity extends Recommendation {
  cancellation: string;
  description: string;
  language: string;
  price: number;
  time: string;
  title: string;
}
