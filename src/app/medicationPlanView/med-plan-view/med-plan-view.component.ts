import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MedicationPlan } from 'src/app/scannerView/medication-plan';

@Component({
  selector: 'med-plan-view',
  templateUrl: './med-plan-view.component.html',
  styleUrls: ['./med-plan-view.component.css'],
})
export class MedPlanViewComponent implements OnInit {
  constructor() {}

  @Input('plan') plan: MedicationPlan = new MedicationPlan([]); // dummy, but valid plan

  @Output('submitPressed') submitPressed = new EventEmitter();

  ngOnInit(): void {}

  onClick() {
    this.submitPressed.emit();
  }
}
