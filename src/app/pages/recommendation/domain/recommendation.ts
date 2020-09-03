import { RecommendationType } from './recommendation_type';
import { Location } from './location';
import { Review } from './review';

export class Recommendation {
  type: RecommendationType;
  location: Location;
  review: Review;
}
