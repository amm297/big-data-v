import { PropertyType } from './property_type'
import { RoomType } from './room_type'
import { BedType } from './bed_type'

export class AppartmentDetails {
  id: string;
  url: string;
  name: string;
  description: string;
  houseRules: string;
  image: string;
  propertyType: PropertyType; // enum?
  roomType: RoomType; // enum?
  accomodates: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  bedType: BedType;
  amenities: Array<string>; // convert this to icons?
  squareFeet: number;
}
