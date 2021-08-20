import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'default-view',
  templateUrl: './default-view.component.html',
  styleUrls: ['./default-view.component.css'],
})
export class DefaultViewComponent implements OnInit {
  constructor() {}
  showDefault = true;
  ngOnInit(): void {}

  @Output('goToNextView') goToNextView = new EventEmitter();
  @Output('goBackToDefault') goBackToDefault = new EventEmitter();

  onOpenCameraView() {
    this.showDefault = false;
  }

  onOpenScannerView() {
    this.goToNextView.emit();
    this.showDefault = true;
  }

  onGoBackToBlankView() {
    this.goBackToDefault.emit();
    this.showDefault = true;
  }
}
