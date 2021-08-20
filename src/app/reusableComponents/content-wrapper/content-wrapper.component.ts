import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css'],
})
export class ContentWrapperComponent implements OnInit {
  constructor() {}

  classesOuterWrapper = `col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4
  offset-1 offset-sm-2 offset-md-3 offset-lg-4 offset-xl-4`;

  classesInnerWrapper = ` d-flex flex-column justify-content-center 
  align-items-center w-100 h-100`;

  @Input('instructionTitle') instructionTitle: string | undefined;
  @Input('instructionSubTitle') instructionSubTitle: string | undefined;

  ngOnInit(): void {}
}
