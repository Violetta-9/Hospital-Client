import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicesPageComponent } from './home-services-page.component';

describe('HomeServicesPageComponent', () => {
  let component: HomeServicesPageComponent;
  let fixture: ComponentFixture<HomeServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeServicesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
