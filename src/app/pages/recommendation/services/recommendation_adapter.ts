import { RecommendationType } from '../domain/recommendation_type';
import { Recommendation } from '../domain/recommendation';
import { Restaurant } from '../domain/restaurant';
import { Location } from '../domain/location';
import { Review } from '../domain/review';

export function adapt(restaurants: Array<string>): Array<Recommendation> {
  console.log(restaurants)
  return restaurants.map(restaurant => adaptRestaurant(JSON.parse(restaurant)));
}

function adaptRestaurant(restaurantApi): Recommendation {
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
  location.latitude = restaurantApi['latitude']
  location.longitude = restaurantApi['longitude']
  return location;
}

function adaptReview(restaurantApi: JSON): Review {
  const review = new Review();
  review.rating = restaurantApi['rating'];
  review.review = restaurantApi['review'];
  return review;
}
