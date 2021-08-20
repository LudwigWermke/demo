import { Injectable } from '@angular/core';
import { MedicationPlan } from './scannerView/medication-plan';

/**
 *  very simple service to share the medication plan
 */
@Injectable({
  providedIn: 'root',
})
export class MedPlanServiceService {
  constructor() {}

  plan: MedicationPlan = new MedicationPlan([]);
}
