import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'small-nav-bar',
  templateUrl: './small-nav-bar.component.html',
  styleUrls: ['./small-nav-bar.component.css'],
})
export class SmallNavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('title') title = '';
  @Input('icon') icon = '';

  @Output('wasClicked') wasClicked = new EventEmitter();

  onClick() {
    this.wasClicked.emit();
  }

  // ugly class defs that makes reading the html-template hard
  classesOfClickableComponent = ` col-8 col-sm-8 col-md-12 col-xl-7 col-xxl-7
      offset-0 offset-sm-0 offset-md-0 offset-lg-0 offset-xl-0 offset-xxl-0
      d-flex justify-content-start align-items-center clickable-element `;
}
