import { HighlightDirective } from './directives/highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OvalComponent } from './oval/oval.component';
import { HighdarkDirective } from './directives/highdark.directive';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    OvalComponent,
    HighlightDirective,
    HighdarkDirective,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
