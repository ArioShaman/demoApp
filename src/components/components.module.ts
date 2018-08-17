import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideBarComponent } from './side-bar/side-bar';
import { ImageComponent } from './image/image';
import { LocationComponent } from './location/location';
import { PaletteComponent } from './palette/palette';
import { OutlineComponent } from './outline/outline';
import { FolderComponent } from './folder/folder';
import { SettingsComponent } from './settings/settings';
import { LanguageComponent } from './language/language';

@NgModule({
	declarations: [SideBarComponent,
    ImageComponent,
    LocationComponent,
    PaletteComponent,
    OutlineComponent,
    FolderComponent,
    SettingsComponent,
    LanguageComponent],
	imports: [
		BrowserModule
	],
	exports: [SideBarComponent,
    ImageComponent,
    LocationComponent,
    PaletteComponent,
    OutlineComponent,
    FolderComponent,
    SettingsComponent,
    LanguageComponent]
})
export class ComponentsModule {}
