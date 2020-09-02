import { RecommendationType } from '../domain/recommendation_type';
import { Restaurant } from '../domain/restaurant';

export function adapt(restaurants) {
  console.log(restaurants)
  return restaurants.map(restaurant => adaptRestaurant(JSON.parse(restaurant)));
}

function adaptRestaurant(restaurantApi) {
  const restaurant = new Restaurant();
  restaurant.type = RecommendationType.RESTARUANT;
  restaurant.title = restaurantApi['title']
  restaurant.address = restaurantApi['address']
  restaurant.distance = restaurantApi['distance']
  return restaurant;
}
