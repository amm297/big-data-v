import { RecommendationType } from './recommendation_type';
import { Location } from './location';
import { Review } from './review';

export class Recommendation {
  type: RecommendationType;
  location: Location;
  review: Review;

  get iconFroomType() {
    if (this.type === RecommendationType.RESTAURANT) {
      return '/assets/markers/restaurant-marker.png'
    } else if (this.type === RecommendationType.ACTIVITY) {
      return '/assets/markers/activity-marker.png'
    }
  }

  get icon() {
    return `/assets/icons/${this.type.toLowerCase()}.svg`
  }
}
