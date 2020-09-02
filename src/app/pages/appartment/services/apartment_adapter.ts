import { Appartment } from '../domain/appartment'
import { AppartmentDetails } from '../domain/appartment_details'
import { Location } from '../domain/location'
import { Price } from '../domain/price'
import { Review } from '../domain/review'

import { PropertyType } from '../domain/property_type'
import { BedType } from '../domain/bed_type'
import { RoomType } from '../domain/room_type'
import { CancellationPolicyType } from '../domain/cancellation_policy_type'

export function adapt(appartments): Array<Appartment> {
  return appartments.map(apt => adaptApparment(JSON.parse(apt)))
}

function adaptApparment(appartment): Appartment {
  const adaptedAppartment = new Appartment();
  adaptedAppartment.details = adaptDetails(appartment);
  adaptedAppartment.location = adaptLocation(appartment);
  adaptedAppartment.price = adaptPrice(appartment);
  adaptedAppartment.review = adaptReview(appartment);
  return adaptedAppartment;
}

function adaptDetails(appartment): AppartmentDetails {
  const details = new AppartmentDetails()
  details.id = appartment['id']
  details.url = appartment['url']
  details.name = appartment['name']
  details.description = appartment['description']
  details.houseRules = appartment['house_rules']
  details.image = appartment['picture_url']
  details.propertyType = PropertyType[appartment['property_type']]
  details.roomType = RoomType[appartment['room_type']]
  details.accomodates = appartment['accommodates']
  details.bathrooms = appartment['bathrooms']
  details.bedrooms = appartment['bedrooms']
  details.beds = appartment['beds']
  details.bedType = BedType[appartment['bed_type']]
  details.amenities = appartment['amenities']
  details.squareFeet = appartment['square_feet']
  return details;
}

function adaptLocation(appartment): Location {
  const location = new Location()
  location.address = appartment['street']
  location.neighborhood = appartment['neighbourhood']
  location.zipcode = appartment['zipcode']
  location.latitude = appartment['latitude']
  location.longitude = appartment['longitude']
  return location;
}

function adaptPrice(appartment): Price {
  const price = new Price()
  price.price = appartment['pricee']
  price.securityDeposit = appartment['security_depositt']
  price.cleaningFee = appartment['cleaning_feee']
  price.cancellationPolicy = CancellationPolicyType[appartment['cancellation_policy']]
  return price;
}

function adaptReview(appartment): Review {
  const review = new Review()
  review.reviews = appartment['number_of_reviews']
  review.reviewsScoreRate = appartment['review_scores_rating']
  review.reviewsScoreAccuracy = appartment['review_scores_accuracy']
  review.reviewsScoreCleanliness = appartment['review_scores_cleanliness']
  review.reviewScoreCheckin = appartment['review_scores_checkin']
  review.reviewScoreCommunication = appartment['review_scores_communication']
  review.reviewScoreLocation = appartment['review_scores_location']
  review.reviewScoreValue = appartment['review_scores_value']
  return review;
}
