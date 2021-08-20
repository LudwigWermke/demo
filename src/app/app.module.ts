import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './reusableComponents/content-wrapper/content-wrapper.component';
import { SmallNavBarComponent } from './reusableComponents/small-nav-bar/small-nav-bar.component';

import { DefaultViewComponent } from './defaultView/default-view/default-view.component';
import { BlankButtonViewComponent } from './defaultView/blank-button-view/blank-button-view.component';
import { OpenCameraViewComponent } from './defaultView/open-camera-view/open-camera-view.component';

import { ScannerComponent } from './scannerView/scanner/scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentWrapperComponent,
    SmallNavBarComponent,
    DefaultViewComponent,
    BlankButtonViewComponent,
    OpenCameraViewComponent,
    ScannerComponent,
  ],
  imports: [BrowserModule, ZXingScannerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
