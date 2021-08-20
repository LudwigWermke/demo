import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './reusableComponents/content-wrapper/content-wrapper.component';
import { SmallNavBarComponent } from './reusableComponents/small-nav-bar/small-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentWrapperComponent,
    SmallNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
