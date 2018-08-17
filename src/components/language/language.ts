import { Component } from '@angular/core';

/**
 * Generated class for the LanguageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'language',
  templateUrl: 'language.html'
})
export class LanguageComponent {

  text: string;

  constructor() {
    this.text = 'Language component';
  }

}
