import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaterProfileComponent } from './donater-profile.component';

describe('DonaterProfileComponent', () => {
  let component: DonaterProfileComponent;
  let fixture: ComponentFixture<DonaterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonaterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonaterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
