import { RecommendationType } from '../domain/recommendation_type';
import { Recommendation } from '../domain/recommendation';
import { Restaurant } from '../domain/restaurant';
import { Activity } from '../domain/activity';
import { PointOfInterest } from '../domain/point_of_interest';
import { Location } from '../domain/location';
import { Review } from '../domain/review';
import { Point } from '../domain/point';

export function adapt(recommendations): Array<Recommendation> {
  const restaurants = recommendations['restaurants'] ? recommendations['restaurants'].map(restaurant => adaptRestaurant(restaurant)) : [];
  const activities = recommendations['activities'] ? recommendations['activities'].map(activity => adaptActivity(activity)) : [];
  const pois = recommendations['point_of_interest'] ? recommendations['point_of_interest'].map(poi => adaptPoi(poi)) : [];
  return restaurants.concat(activities).concat(pois)
}

function adaptPoi(poiApi): Recommendation {
  const poi = new PointOfInterest()
  poi.type = RecommendationType.POINT_OF_INTEREST;
  poi.title = poiApi['name']
  poi.description = poiApi['description']
  poi.schedule = poiApi['schedule']
  poi.location = adaptLocation(poiApi)
  return poi;
}

function adaptActivity(activityApi): Recommendation {
  const activity = new Activity()
  activity.type = RecommendationType.ACTIVITY;
  activity.title = activityApi['title'];
  activity.cancellation = activityApi['cancellation'];
  activity.description = activityApi['description'];
  activity.language = activityApi['language'];
  activity.price = activityApi['price'];
  activity.time = activityApi['time'];
  activity.location = adaptLocation(activityApi)
  activity.review = adaptReview(activityApi)
  return activity;
}

function adaptRestaurant(restaurantApi): Recommendation {
  const restaurant = new Restaurant();
  restaurant.type = RecommendationType.RESTAURANT;
  restaurant.title = restaurantApi['title']
  restaurant.restaurantType = restaurantApi['type']
  restaurant.price = restaurantApi['price']
  restaurant.description = restaurantApi['description']
  restaurant.tags = restaurantApi['tags']
  restaurant.location = adaptLocation(restaurantApi)
  restaurant.review = adaptReview(restaurantApi)
  return restaurant;
}

function adaptLocation(restaurantApi): Location {
  const location = new Location();
  location.address = restaurantApi['address'] || restaurantApi['meeting_point']
  location.distance = restaurantApi['distance']
  location.point = new Point(restaurantApi['latitude'], restaurantApi['longitude']);
  return location;
}

function adaptReview(restaurantApi): Review {
  const review = new Review();
  review.rating = restaurantApi['rating'];
  review.review = restaurantApi['review'];
  return review;
}
