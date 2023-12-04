import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppointmentPageComponent } from './home-appointment-page.component';

describe('HomeAppointmentPageComponent', () => {
  let component: HomeAppointmentPageComponent;
  let fixture: ComponentFixture<HomeAppointmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAppointmentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
