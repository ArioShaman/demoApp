import { Component } from '@angular/core';
import { IMAGES } from './images-list'
import { ALBUM } from './album-list'


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
