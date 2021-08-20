import { Component } from '@angular/core';
import { MedicationPlan } from './scannerView/medication-plan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  plan: MedicationPlan = new MedicationPlan([]); // default (but valid) object

  activeView = 'default-view';

  // sequential list of views

  views = ['default-view', 'scanner-view', 'medication-plan-view'];

  importMedPlan(plan: MedicationPlan) {
    this.plan = plan;
  }

  next() {
    console.log('next called from: ', this.activeView);
    let a = this.views.indexOf(this.activeView);
    if (a < 0) {
      this.activeView = this.views[0];
    } else {
      // go to the next view
      this.activeView = this.views[(a + 1) % this.views.length];
    }
    console.log(this.activeView);
  }

  goBackToDefault() {
    this.activeView = 'default-view';
  }
}
