import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDonatersComponent } from './dashboard-donaters.component';

describe('DashboardDonatersComponent', () => {
  let component: DashboardDonatersComponent;
  let fixture: ComponentFixture<DashboardDonatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDonatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDonatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
