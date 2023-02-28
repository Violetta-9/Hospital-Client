import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecializationPageComponent } from './home-specialization-page.component';

describe('HomeSpecializationPageComponent', () => {
  let component: HomeSpecializationPageComponent;
  let fixture: ComponentFixture<HomeSpecializationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSpecializationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSpecializationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
