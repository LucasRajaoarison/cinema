import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeReservationComponent } from './anime-reservation.component';

describe('AnimeReservationComponent', () => {
  let component: AnimeReservationComponent;
  let fixture: ComponentFixture<AnimeReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
