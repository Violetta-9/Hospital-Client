import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdatePersonalInfoComponent } from './form-update-personal-info.component';

describe('FormUpdatePersonalInfoComponent', () => {
  let component: FormUpdatePersonalInfoComponent;
  let fixture: ComponentFixture<FormUpdatePersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdatePersonalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpdatePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
