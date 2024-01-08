import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReservationTabsComponent } from './main-reservation-tabs.component';

describe('MainReservationTabsComponent', () => {
  let component: MainReservationTabsComponent;
  let fixture: ComponentFixture<MainReservationTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainReservationTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReservationTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
