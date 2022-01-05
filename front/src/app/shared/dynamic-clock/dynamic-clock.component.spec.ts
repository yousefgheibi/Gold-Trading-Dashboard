import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicClockComponent } from './dynamic-clock.component';

describe('DynamicClockComponent', () => {
  let component: DynamicClockComponent;
  let fixture: ComponentFixture<DynamicClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
