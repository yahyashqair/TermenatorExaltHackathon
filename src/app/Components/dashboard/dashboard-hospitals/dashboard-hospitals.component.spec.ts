import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHospitalsComponent } from './dashboard-hospitals.component';

describe('DashboardHospitalsComponent', () => {
  let component: DashboardHospitalsComponent;
  let fixture: ComponentFixture<DashboardHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHospitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
