import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNavBarComponent } from './small-nav-bar.component';

describe('SmallNavBarComponent', () => {
  let component: SmallNavBarComponent;
  let fixture: ComponentFixture<SmallNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
