import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedPlanViewComponent } from './med-plan-view.component';

describe('MedPlanViewComponent', () => {
  let component: MedPlanViewComponent;
  let fixture: ComponentFixture<MedPlanViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedPlanViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
