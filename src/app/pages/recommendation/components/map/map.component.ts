import { Component, OnInit, Input } from '@angular/core';

import { Point } from '../../domain/point';
import { Marker } from '../../domain/marker';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private _provider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  // 'http://{s}.sm.mapstack.stamen.com/(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/{z}/{x}/{y}.png';
  private _attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  // '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  private _map;
  private _center: Point;
  private _markers: Array<Marker>;


  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this._map = L.map('map', { zoomControl: false }).setView(
      this._center.coords(),
      12
    );

    L.control.zoom({ position: 'bottomright' }).addTo(this._map);
    L.tileLayer(this._provider, { attribution: this._attribution }).addTo(this._map);
    L.svg({ clickable: true }).addTo(this._map);

    this.addMarker(this._center, this.createIcon('/assets/markers/house-marker.png'));
    console.log(this._markers)
    if (this._markers) {
      this._markers.forEach(marker => this.addMarker(marker.point, this.createIcon(marker.iconUrl)))
    }
  }

  private addMarker(point: Point, icon: any) {
    if (icon) {
      console.log(point, icon)
      L.marker(point.coords(), { icon }).addTo(this._map);
    } else {
      L.marker(point.coords()).addTo(this._map);
    }

  }

  private createIcon(iconUrl: string) {
    return L.icon({
      iconUrl: iconUrl,
      iconSize: [32, 32],
      iconAnchor: [0, 0]
    });
  }

  @Input()
  set center(center: Point) {
    this._center = center;
  }

  @Input()
  set markers(markers: Array<Marker>) {
    this._markers = markers;

  }
}
