import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { CacheService } from 'ng2-cache';
import { VARIABLES } from '../../app/i18n-providers';

@Injectable()
export class LanguageServiceProvider {
  public languages = [
    {
      name: 'english',
      code: 'en',
    },
    {
      code: 'ru',
      name: 'russian'
    }
  ];
  public vars = VARIABLES;
  public actLang:object;
  public actLangChange: Subject<object> = new Subject<object>();
  constructor(public cache: CacheService) {
    if (this.cache.get('actLang')){
        this.actLang = this.cache.get('actLang');
      }else{
        this.actLang = this.languages[0];
        this.cache.set('actLang', this.actLang);
      }
  }
  public get(){
    return this.actLang;
  }
  public getLanguages(){
    return this.languages;
  }
  public getVars(){
    return this.vars;
  }
  public changeLang(lang){
    this.cache.set('actLang', lang);
    this.actLang = lang;
    this.actLangChange.next(this.actLang);
  }
}
