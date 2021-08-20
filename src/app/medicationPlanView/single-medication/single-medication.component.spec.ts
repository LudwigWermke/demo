import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMedicationComponent } from './single-medication.component';

describe('SingleMedicationComponent', () => {
  let component: SingleMedicationComponent;
  let fixture: ComponentFixture<SingleMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMedicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
