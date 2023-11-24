import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeafletMouseEvent, Marker, latLng, marker, tileLayer, Map } from 'leaflet';
import * as Leaflet from 'leaflet';
import { coordinatesMap } from './coordinate';
// Leaflet.Icon.Default.imagePath = './node_modules/leaflet/dist/images/';
Leaflet.Icon.Default.imagePath = 'assets/';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {

  }

  // map!: Map;
  markers: Marker<any>[] = [];

  ngOnInit(): void {
    this.markers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));

  }

  @Input()
  initialCoordinates: coordinatesMap[] = [];
  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: 'My Movies' })
    ],
    zoom: 15,
    center: latLng(29.71083695646771, 75.89754581451417)
  };

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log(latitude, longitude);
    this.markers = [];
    this.markers.push(marker([latitude, longitude]));
    this.onSelectedLocation.emit({ latitude, longitude });
  }
  // initMarkers() {
  //   const initialMarkers = [
  //     {
  //       position: { lat: 28.625485, lng: 79.821091 },
  //       draggable: true
  //     },
  //     {
  //       position: { lat: 28.625293, lng: 79.817926 },
  //       draggable: false
  //     },
  //     {
  //       position: { lat: 28.625182, lng: 79.81464 },
  //       draggable: true
  //     }
  //   ];
  //   for (let index = 0; index < initialMarkers.length; index++) {
  //     const data = initialMarkers[index];
  //     const marker = this.generateMarker(data, index);
  //     marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
  //     this.map.panTo(data.position);
  //     this.markers.push(marker)
  //   }
  // }

  // generateMarker(data: any, index: number) {
  //   return marker(data.position, { draggable: data.draggable })
  //     .on('click', (event) => this.markerClicked(event, index))
  //     .on('dragend', (event) => this.markerDragEnd(event, index));
  // }

  // onMapReady($event: Map) {
  //   this.map = $event;
  //   this.initMarkers();
  // }

  // mapClicked($event: any) {
  //   console.log($event.latlng.lat, $event.latlng.lng);
  // }

  // markerClicked($event: any, index: number) {
  //   console.log($event.latlng.lat, $event.latlng.lng);
  // }

  // markerDragEnd($event: any, index: number) {
  //   console.log($event.target.getLatLng());
  // }
}
