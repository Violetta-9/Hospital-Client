import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsPreViewComponent } from './doctors-pre-view.component';

describe('DoctorsPreViewComponent', () => {
  let component: DoctorsPreViewComponent;
  let fixture: ComponentFixture<DoctorsPreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsPreViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsPreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
