import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { MediationPlanParserService } from 'src/app/mediation-plan-parser.service';

@Component({
  selector: 'scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent implements OnInit {
  constructor(private service: MediationPlanParserService) {}

  @Output('hasMedicationPlan') hasMedicationPlan = new EventEmitter();

  @Output('goBack') goBack = new EventEmitter();

  ngOnInit(): void {}
  hideScanner = false;
  allowedFormats = [BarcodeFormat.DATA_MATRIX];

  onCodeResult(xml: string) {
    try {
      let medications = this.service.parse(xml);
      console.log(medications);
      this.hideScanner = true;
      this.hasMedicationPlan.emit(medications);
    } catch (error) {
      this.hideScanner = true;
    }
  }

  onErrorDetected() {
    this.hideScanner = true;
  }

  onGoBackPressed() {
    this.hideScanner = true; // stops the scan
    this.goBack.emit();
  }
}
