import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentintractionModule } from './componentintraction/componentintraction.module';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    ComponentintractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
