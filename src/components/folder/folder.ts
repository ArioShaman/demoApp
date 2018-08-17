import { Component } from '@angular/core';

/**
 * Generated class for the FolderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'folder',
  templateUrl: 'folder.html'
})
export class FolderComponent {

  text: string;

  constructor() {
    this.text = 'Folder component';
  }

}
