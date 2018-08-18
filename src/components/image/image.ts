import { Component } from '@angular/core';
import { IMAGES } from './images-list'
import { ALBUM } from './album-list'
import { LanguageServiceProvider } from '../../providers/language-service/language-service'


@Component({
  selector: 'image',
  templateUrl: 'image.html',
  styleUrls: ['/image.sass']
})
export class ImageComponent {

  public activeLang;
  public vars;
  public images = IMAGES;
  public album = ALBUM;

  constructor(public langService: LanguageServiceProvider) {
    this.activeLang = this.langService.actLang;
    this.vars = this.langService.getVars();
    this.langService.actLangChange.subscribe((value) => {
       this.activeLang = value;
    });
  }

  ngOnInit(){
    // console.log(this.images);
  }
}
