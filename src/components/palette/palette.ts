import { Component } from '@angular/core';

/**
 * Generated class for the PaletteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'palette',
  templateUrl: 'palette.html'
})
export class PaletteComponent {

  text: string;

  constructor() {
    this.text = 'Palette component';
  }

}
