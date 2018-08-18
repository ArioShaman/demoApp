import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { CacheService } from 'ng2-cache';

@Injectable()
export class ThemeServiceProvider {
  public darkMode:boolean;
  public darkModeChange: Subject<boolean> = new Subject<boolean>();

  constructor(public cache: CacheService) {
    if (this.cache.get('darkMode')){
        this.darkMode = this.cache.get('darkMode');
      }else{
        this.darkMode = true;
        this.cache.set('darkMode', this.darkMode);
      }
      console.log(this.darkMode);
  }

  public get(){
    return this.darkMode;
  }
  public changeMode(){
    this.cache.set('darkMode', !this.darkMode);
    this.darkMode = !this.darkMode;
    this.darkModeChange.next(this.darkMode);
  }

}
