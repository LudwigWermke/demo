import { Component, Input, OnInit } from '@angular/core';
import { MedicationStatement } from 'src/app/scannerView/medication-statement';

@Component({
  selector: 'single-medication',
  templateUrl: './single-medication.component.html',
  styleUrls: ['./single-medication.component.css'],
})
export class SingleMedicationComponent implements OnInit {
  constructor() {}
  @Input('medStatement') medStatement = new MedicationStatement();

  ngOnInit(): void {}
}
