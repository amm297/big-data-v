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
  return appartments.map(apt => adaptApparment(apt))
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
  details.houseRules = appartment['houseRules']
  details.image = appartment['image']
  details.propertyType = PropertyType[appartment['propertyType']]
  details.roomType = RoomType[appartment['roomType']]
  details.accomodates = appartment['accomodates']
  details.bathrooms = appartment['bathrooms']
  details.bedrooms = appartment['bedrooms']
  details.beds = appartment['beds']
  details.bedType = BedType[appartment['bedType']]
  details.amenities = appartment['amenities']
  details.squareFeet = appartment['squareFeet']
  return details;
}

function adaptLocation(appartment): Location {
  const location = new Location()
  location.address = appartment['address']
  location.neighborhood = appartment['neighborhood']
  location.zipcode = appartment['zipcode']
  location.latitude = appartment['latitude']
  location.logitude = appartment['logitude']
  return location;
}

function adaptPrice(appartment): Price {
  const price = new Price()
  price.price = appartment['price']
  price.securityDeposit = appartment['securityDeposit']
  price.cleaningFee = appartment['cleaningFee']
  price.cancellationPolicy = CancellationPolicyType[appartment['cancellationPolicy']]
  return price;
}

function adaptReview(appartment): Review {
  const review = new Review()
  review.reviews = appartment['reviews']
  review.reviewsScoreRate = appartment['reviewsScoreRate']
  review.reviewsScoreAccuracy = appartment['reviewsScoreAccuracy']
  review.reviewsScoreCleanliness = appartment['reviewsScoreCleanliness']
  review.reviewScoreCheckin = appartment['reviewScoreCheckin']
  review.reviewScoreCommunication = appartment['reviewScoreCommunication']
  review.reviewScoreLocation = appartment['reviewScoreLocation']
  review.reviewScoreValue = appartment['reviewScoreValue']
  return review;
}
