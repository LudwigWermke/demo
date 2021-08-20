import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './reusableComponents/content-wrapper/content-wrapper.component';
import { SmallNavBarComponent } from './reusableComponents/small-nav-bar/small-nav-bar.component';

import { BlankButtonViewComponent } from './defaultView/blank-button-view/blank-button-view.component';
import { OpenCameraViewComponent } from './defaultView/open-camera-view/open-camera-view.component';

import { ScannerComponent } from './scannerView/scanner/scanner.component';
import { MedPlanViewComponent } from './medicationPlanView/med-plan-view/med-plan-view.component';
import { ToggleItemComponent } from './medicationPlanView/toggle-item/toggle-item.component';
import { SingleMedicationComponent } from './medicationPlanView/single-medication/single-medication.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentWrapperComponent,
    SmallNavBarComponent,
    BlankButtonViewComponent,
    OpenCameraViewComponent,
    ScannerComponent,
    MedPlanViewComponent,
    ToggleItemComponent,
    SingleMedicationComponent,
  ],
  imports: [BrowserModule, ZXingScannerModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
