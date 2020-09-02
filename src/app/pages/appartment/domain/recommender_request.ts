export class RecommenderRequest {
  lat: number;
  lng: number;
  review: number

  constructor(request) {
    this.lat = request['lat'];
    this.lng = request['lng'];
    this.review = request['review']
  }
}
