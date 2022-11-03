import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    BananaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
