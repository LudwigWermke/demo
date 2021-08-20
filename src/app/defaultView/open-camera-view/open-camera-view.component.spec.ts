import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCameraViewComponent } from './open-camera-view.component';

describe('OpenCameraViewComponent', () => {
  let component: OpenCameraViewComponent;
  let fixture: ComponentFixture<OpenCameraViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenCameraViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCameraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
