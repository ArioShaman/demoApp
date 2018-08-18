import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThemeServiceProvider } from '../../providers/theme-service/theme-service'
import { LanguageServiceProvider } from '../../providers/language-service/language-service'

@Component({
  selector: 'side-bar',
  templateUrl: 'side-bar.html'
})
export class SideBarComponent {

  @Output() activeChange:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Input() active:boolean;
  @Input() opened:boolean;
  public activeTab = 'image';
  public darkMode:boolean;
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
    this.vars = this.langService.getVars();
    this.langService.actLangChange.subscribe((value) => {
       this.activeLang = value;
    });    
  }

  ngOnInit(){
  }
  public activate(){
    this.active = true;
    this.activeChange.emit(this.active);
  }

  public onTab(tabName){
    this.activeTab = tabName;
  }

  public changeMode(){
    this.themeService.changeMode();
    console.log(this.darkMode);
  }
}
