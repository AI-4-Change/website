import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { REACH_LOCATIONS } from 'src/constants';
import { ReachLocation } from 'src/models/reachLocation';

@Component({
  selector: 'app-springprogram',
  templateUrl: './springprogram.component.html',
  styleUrls: ['./springprogram.component.less'],
})
export class SpringprogramComponent implements AfterViewInit {
  private map: L.Map;
  private API_TOKEN =
    'cGsuZXlKMUlqb2lZV3R6WVdSeklpd2lZU0k2SW1OcmNYWTNiSGc0ZGpCaWRtOHljSEoxWjJKc1lXUTJlREVpZlEuV1R6VVg3dHkxSGRybHNJa3ZTVE5qQQ==';

  public images = Array(9)
    .fill(0)
    .map((_, idx) => idx + 1);

  private initMap() {
    this.map = new L.Map('reach-map', {
      scrollWheelZoom: false,
      worldCopyJump: true,
    });
    this.map.setView([0, 0], 2.5);
    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${atob(
        this.API_TOKEN
      )}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(this.map);
  }

  private addLocation(location: ReachLocation) {
    L.marker(location.location, {
      title: location.name,
      alt: location.name,
    })
      .addTo(this.map)
      .bindPopup(`<b>${location.name}</b>`);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    for (let location of REACH_LOCATIONS) {
      this.addLocation(location);
    }
  }
}
