export class Request {
  lat: number;
  lng: number;
  review: number
  tags: Array<string> | string;

  constructor(request) {
    this.lat = request['lat'];
    this.lng = request['lng'];
    this.review = request['review']
    this.tags = request['tags']
  }
}
