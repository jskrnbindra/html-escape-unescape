import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HTMLEscapeUnescapeModule } from './html-escape-unescape'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    HTMLEscapeUnescapeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
