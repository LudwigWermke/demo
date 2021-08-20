import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scannerView/scanner/scanner.component';
import { MedPlanViewComponent } from './medicationPlanView/med-plan-view/med-plan-view.component';
import { BlankButtonViewComponent } from './defaultView/blank-button-view/blank-button-view.component';
import { OpenCameraViewComponent } from './defaultView/open-camera-view/open-camera-view.component';

const routes: Routes = [
  { path: '', component: BlankButtonViewComponent },
  { path: 'prepareOpen', component: OpenCameraViewComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'plan', component: MedPlanViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
