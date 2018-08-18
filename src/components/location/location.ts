import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { mapStyle } from './map-style'
import { ThemeServiceProvider } from '../../providers/theme-service/theme-service'
import { LanguageServiceProvider } from '../../providers/language-service/language-service'

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
  public latLng;
  public activeLang;
  public vars;

  constructor(
    public themeService: ThemeServiceProvider,
    public langService: LanguageServiceProvider,
    public geolocation: Geolocation
  ) {
    this.darkMode = this.themeService.darkMode;
    this.themeService.darkModeChange.subscribe((value) => {
      this.darkMode = value;
      this.reloadMap();
    });
    this.activeLang = this.langService.actLang;
    this.vars = this.langService.getVars();
    this.langService.actLangChange.subscribe((value) => {
       this.activeLang = value;
    });
  }


  ngOnInit(){
    this.loadMap();
  }
  reloadMap(){
    if(this.darkMode){
      this.mapStyle = mapStyle;
    }else{
      this.mapStyle = [];
    }
    let mapOptions = {
      center: this.latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: this.mapStyle,
    }
    this.map.setOptions(mapOptions);
  }
  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {

      this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      if(this.darkMode){
        this.mapStyle = mapStyle;
      }else{
        this.mapStyle = [];
      }

      let mapOptions = {
        center: this.latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: this.mapStyle,
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      this.latLng = new google.maps.LatLng(-34.9290, 138.6010);
      let mapOptions = {
        center: this.latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    });
  }

}
