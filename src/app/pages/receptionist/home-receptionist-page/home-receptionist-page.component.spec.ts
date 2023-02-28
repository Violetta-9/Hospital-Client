import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReceptionistPageComponent } from './home-receptionist-page.component';

describe('HomeReceptionistPageComponent', () => {
  let component: HomeReceptionistPageComponent;
  let fixture: ComponentFixture<HomeReceptionistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeReceptionistPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeReceptionistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
