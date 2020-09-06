import { Point } from './point';
export class Marker {
  point: Point;
  iconUrl: string;

  constructor(point: Point, iconUrl: string) {
    this.point = point;
    this.iconUrl = iconUrl;
  }
}
