import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: 'side-bar.html'
})
export class SideBarComponent {

  @Output() activeChange:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Input() active:boolean;
  @Input() opened:boolean;
  public activeTab = 'image';

  constructor() {
  }

  ngOnInit(){
    console.log(this.active);
  }
  public activate(){
    this.active = true;
    this.activeChange.emit(this.active);
    console.log('activate' + this.active);
  }

  public onTab(tabName){
    this.activeTab = tabName;
  }
}
