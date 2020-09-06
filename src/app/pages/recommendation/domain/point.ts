export class Point {
  latitude: number;
  longitude: number;

  constructor(lat, lng) {
    this.latitude = lat;
    this.longitude = lng;
  }

  public coords(): Array<number> {
    return new Array(this.latitude, this.longitude);
  }
}
