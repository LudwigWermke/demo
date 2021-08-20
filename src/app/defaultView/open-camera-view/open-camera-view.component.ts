import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'open-camera-view',
  templateUrl: './open-camera-view.component.html',
  styleUrls: ['./open-camera-view.component.css'],
})
export class OpenCameraViewComponent implements OnInit {
  constructor() {}
  @Output('nextView') nextView = new EventEmitter();
  @Output('goBack') goBack = new EventEmitter();

  subTitle = `Mithilfe deiner Kamera kannst du ganz
   einfach deinen Medikamentenplan in hypio übertragen.`;

  next() {
    this.nextView.emit();
  }

  ngOnInit(): void {}

  onGoBackPressed() {
    this.goBack.emit();
  }
}
