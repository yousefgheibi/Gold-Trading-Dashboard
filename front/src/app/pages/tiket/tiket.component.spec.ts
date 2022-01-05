import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiketComponent } from './tiket.component';

describe('TiketComponent', () => {
  let component: TiketComponent;
  let fixture: ComponentFixture<TiketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
