import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOfficePageComponent } from './home-office-page.component';

describe('HomeOfficePageComponent', () => {
  let component: HomeOfficePageComponent;
  let fixture: ComponentFixture<HomeOfficePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOfficePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOfficePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
