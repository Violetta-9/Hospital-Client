import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManagementPageComponent } from './home-management-page.component';

describe('HomeManagementPageComponent', () => {
  let component: HomeManagementPageComponent;
  let fixture: ComponentFixture<HomeManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
