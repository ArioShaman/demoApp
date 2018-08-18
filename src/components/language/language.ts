import { Component } from '@angular/core';
import { ThemeServiceProvider } from '../../providers/theme-service/theme-service'
import { LanguageServiceProvider } from '../../providers/language-service/language-service'

@Component({
  selector: 'language',
  templateUrl: 'language.html'
})
export class LanguageComponent {

  public darkMode:boolean;

  public languages:Array<object>;
  public activeLang;
  public vars;

  constructor(
    public themeService: ThemeServiceProvider,
    public langService: LanguageServiceProvider,
  ) {
    this.darkMode = this.themeService.darkMode;
    this.themeService.darkModeChange.subscribe((value) => {
      this.darkMode = value;
    });

    this.activeLang = this.langService.actLang;
    this.languages = this.langService.getLanguages();
    this.vars = this.langService.getVars();
    this.langService.actLangChange.subscribe((value) => {
       this.activeLang = value;
    });
  }

  public changeLang(lang){
    // this.activeLang = lang['name'];
    this.langService.changeLang(lang);
  }
}
