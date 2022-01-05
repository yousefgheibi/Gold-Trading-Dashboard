import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFactorComponent } from './show-factor.component';

describe('ShowFactorComponent', () => {
  let component: ShowFactorComponent;
  let fixture: ComponentFixture<ShowFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
