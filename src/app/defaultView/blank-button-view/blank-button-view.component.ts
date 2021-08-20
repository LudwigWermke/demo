import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blank-button-view',
  templateUrl: './blank-button-view.component.html',
  styleUrls: ['./blank-button-view.component.css'],
})
export class BlankButtonViewComponent implements OnInit {
  @Output('nextView') nextView = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onOpenCameraView() {
    this.nextView.emit();
  }
}
