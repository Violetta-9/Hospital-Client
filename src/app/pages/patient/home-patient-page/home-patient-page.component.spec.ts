import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePatientPageComponent } from './home-patient-page.component';

describe('HomePatientPageComponent', () => {
  let component: HomePatientPageComponent;
  let fixture: ComponentFixture<HomePatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePatientPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
