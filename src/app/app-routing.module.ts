import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scannerView/scanner/scanner.component';
import { DefaultViewComponent } from './defaultView/default-view/default-view.component';
import { MedPlanViewComponent } from './medicationPlanView/med-plan-view/med-plan-view.component';

const routes: Routes = [
  { path: 'scanner', component: ScannerComponent },
  { path: '', component: DefaultViewComponent },
  { path: 'plan', component: MedPlanViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
