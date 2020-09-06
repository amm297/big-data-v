import { RecommendationType } from '../domain/recommendation_type';
import { Recommendation } from '../domain/recommendation';
import { Restaurant } from '../domain/restaurant';
import { Location } from '../domain/location';
import { Review } from '../domain/review';
import { Point } from '../domain/point';

export function adapt(restaurants: Array<string>): Array<Recommendation> {
  return restaurants.map(restaurant => adaptRestaurant(JSON.parse(restaurant)));
}

function adaptRestaurant(restaurantApi: JSON): Recommendation {
  const restaurant = new Restaurant();
  restaurant.type = RecommendationType.RESTARUANT;
  restaurant.title = restaurantApi['title']
  restaurant.restaurantType = restaurantApi['type']
  restaurant.price = restaurantApi['price']
  restaurant.description = restaurantApi['description']
  restaurant.tags = restaurantApi['tags']
  restaurant.location = adaptLocation(restaurantApi)
  restaurant.review = adaptReview(restaurantApi)
  return restaurant;
}

function adaptLocation(restaurantApi: JSON): Location {
  const location = new Location();
  location.address = restaurantApi['address']
  location.distance = restaurantApi['distance']
  location.point = new Point(restaurantApi['latitude'], restaurantApi['longitude']);
  return location;
}

function adaptReview(restaurantApi: JSON): Review {
  const review = new Review();
  review.rating = restaurantApi['rating'];
  review.review = restaurantApi['review'];
  return review;
}
