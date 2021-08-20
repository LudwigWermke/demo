import { Component, OnInit } from '@angular/core';
import { MedPlanServiceService } from 'src/app/med-plan-service.service';
import { MedicationPlan } from 'src/app/scannerView/medication-plan';

@Component({
  selector: 'med-plan-view',
  templateUrl: './med-plan-view.component.html',
  styleUrls: ['./med-plan-view.component.css'],
})
export class MedPlanViewComponent implements OnInit {
  constructor(private updateMedPlanService: MedPlanServiceService) {
    this.plan = this.updateMedPlanService.plan;
  }

  plan: MedicationPlan;

  ngOnInit(): void {}
}
