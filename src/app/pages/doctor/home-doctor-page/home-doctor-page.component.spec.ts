import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDoctorPageComponent } from './home-doctor-page.component';

describe('HomeDoctorPageComponent', () => {
  let component: HomeDoctorPageComponent;
  let fixture: ComponentFixture<HomeDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDoctorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
