import { Component, OnInit, Input } from '@angular/core';
import { MedicationStatement } from 'src/app/scannerView/medication-statement';

@Component({
  selector: 'toggle-item',
  templateUrl: './toggle-item.component.html',
  styleUrls: ['./toggle-item.component.css'],
})
export class ToggleItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('title') title: string = '';

  // index is used by bootstrap to identify which item to close/open (hack)
  @Input('index') index: string = '';

  @Input('medStatements') medStatements: MedicationStatement[] = [];
}
