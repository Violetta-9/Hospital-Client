import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateWorkInfoComponent } from './form-update-work-info.component';

describe('FormUpdateWorkInfoComponent', () => {
  let component: FormUpdateWorkInfoComponent;
  let fixture: ComponentFixture<FormUpdateWorkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdateWorkInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpdateWorkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
