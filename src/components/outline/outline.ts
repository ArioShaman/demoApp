import { Component } from '@angular/core';

/**
 * Generated class for the OutlineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'outline',
  templateUrl: 'outline.html'
})
export class OutlineComponent {

  text: string;

  constructor() {
    this.text = 'Location component';
  }

}
