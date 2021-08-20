import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankButtonViewComponent } from './blank-button-view.component';

describe('BlankButtonViewComponent', () => {
  let component: BlankButtonViewComponent;
  let fixture: ComponentFixture<BlankButtonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankButtonViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
