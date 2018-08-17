import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { mapStyle } from './map-style'
import { ThemeServiceProvider } from '../../providers/theme-service/theme-service'

declare var google;

@Component({
  selector: 'location',
  templateUrl: 'location.html'
})
export class LocationComponent {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public mapStyle;// = mapStyle;
  public darkMode:boolean;

  constructor(
    public themeService: ThemeServiceProvider,
    public geolocation: Geolocation
  ) {
    this.darkMode = this.themeService.darkMode;
    this.themeService.darkModeChange.subscribe((value) => {
      this.darkMode = value;
      console.log('change');
      this.loadMap();
    });
  }


  ngOnInit(){
    this.loadMap();
  }
  loadMap(){

    // let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      if(this.darkMode){
        this.mapStyle = mapStyle;
      }else{
        this.mapStyle = [];
      }

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: this.mapStyle,
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      let latLng = new google.maps.LatLng(-34.9290, 138.6010);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    });
  }

}
