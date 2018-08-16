import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideBarComponent } from './side-bar/side-bar';

@NgModule({
	declarations: [SideBarComponent],
	imports: [
		BrowserModule
	],
	exports: [SideBarComponent]
})
export class ComponentsModule {}
