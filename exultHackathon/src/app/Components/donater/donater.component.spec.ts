import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaterComponent } from './donater.component';

describe('DonaterComponent', () => {
  let component: DonaterComponent;
  let fixture: ComponentFixture<DonaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
