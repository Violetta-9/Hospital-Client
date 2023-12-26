import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePreViewComponent } from './service-pre-view.component';

describe('ServicePreViewComponent', () => {
  let component: ServicePreViewComponent;
  let fixture: ComponentFixture<ServicePreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePreViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
