import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { MedPlanServiceService } from 'src/app/med-plan-service.service';
import { MediationPlanParserService } from 'src/app/mediation-plan-parser.service';

@Component({
  selector: 'scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent implements OnInit {
  constructor(
    private service: MediationPlanParserService,
    private updateMedPlanService: MedPlanServiceService,
    private router: Router
  ) {}
  subTitle =
    'Für genügend Licht sorgen und Kamera so still wie möglich halten.';

  ngOnInit(): void {}
  hideScanner = false;
  allowedFormats = [BarcodeFormat.DATA_MATRIX];

  onCodeResult(xml: string) {
    try {
      let medications = this.service.parse(xml);
      this.updateMedPlanService.plan = medications;
      this.router.navigate(['plan']);
    } catch (error) {
      this.hideScanner = true; // automatically displays an error message
    }
  }

  onErrorDetected() {
    this.hideScanner = true;
  }

  disableScanner() {
    this.hideScanner = true;
  }
}
