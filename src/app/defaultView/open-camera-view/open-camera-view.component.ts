import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-camera-view',
  templateUrl: './open-camera-view.component.html',
  styleUrls: ['./open-camera-view.component.css'],
})
export class OpenCameraViewComponent implements OnInit {
  constructor() {}

  subTitle = `Mithilfe deiner Kamera kannst du ganz
   einfach deinen Medikamentenplan in hypio übertragen.`;

  ngOnInit(): void {}
}
