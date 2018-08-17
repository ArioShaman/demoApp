import { Component } from '@angular/core';
import { IMAGES } from './images-list'
import { ALBUM } from './album-list'
/**
 * Generated class for the ImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image',
  templateUrl: 'image.html',
  styleUrls: ['/image.sass']
})
export class ImageComponent {

  text: string;

  public images = IMAGES;
  public album = ALBUM;
  constructor() {
  }
  ngOnInit(){
    console.log(this.images);
  }
}
